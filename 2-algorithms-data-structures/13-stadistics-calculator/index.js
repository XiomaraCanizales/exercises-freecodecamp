// Get Mean
const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length

// Get Median
const getMedian = (array) => {
    const sorted = array.toSorted((a, b) => a - b)
    if (sorted.length % 2 === 0) {
        const firstMedian = sorted[sorted.length/2]
        const secondMedian = sorted[(sorted.length/2)-1]
        return getMean([firstMedian, secondMedian])
    } else {
        return sorted[Math.floor(sorted.length/2)]
    }
}

// Get Mode
const getMode = (array) => {
  const counts = {}
  array.forEach((el) => {
    counts[el] = (counts[el] || 0) + 1
  })
  if (new Set(Object.values(counts)).size === 1) {
    return null
  }
  const highest = Object.keys(counts).sort(
    (a, b) => counts[b] - counts[a]
  )[0]
  const mode = Object.keys(counts).filter(
    (el) => counts[el] === counts[highest]
  )
  return mode.join(", ")
}

// Get Range
const getRange = (array) => {
  return Math.max(...array) - Math.min(...array)
}

// Get Variance
const getVariance = (array) => {
  const mean = getMean(array)
  const variance = array.reduce((acc, el) => {
    const difference = el - mean
    const squared = difference ** 2
    return acc + squared
  }, 0) / array.length
  return variance
}

// Get standard deviation
const getStandardDeviation = (array) => {
  const variance = getVariance(array)
  const standardDeviation = Math.sqrt(variance)
  return standardDeviation
}

const calculate = (event) => {
    // 1. Prevent the page from refreshing on form submission
    event.preventDefault()

    // 2. Get the value of the input field
    const value = document.querySelector("#numbers").value
    const array = value.split(/,\s*/g)
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el))
    const mean = getMean(numbers)
    const median = getMedian(numbers)
    const mode = getMode(numbers)
    const range = getRange(numbers)
    const variance = getVariance(numbers)  
    const standardDeviation = getStandardDeviation(numbers)

    // 3. Display the result on the page
    document.querySelector("#mean").textContent = mean
    document.querySelector("#median").textContent = median
    document.querySelector("#mode").textContent = mode
    document.querySelector("#range").textContent = range
    document.querySelector("#variance").textContent = variance;
    document.querySelector("#standardDeviation").textContent = standardDeviation
}


  
