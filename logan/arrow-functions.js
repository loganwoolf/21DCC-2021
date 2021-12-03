let arr = [4,5,7,9,12,4,3,2]

console.log("array: " + arr)
//sort array
console.log("Sort: " + 
  arr.sort((a, b) => a - b)
)

// filter by even numbers
console.log("Filter even: " +
  arr.filter(num => num % 2 === 0)
)

// reduce to average value
console.log("Reduce to average: " +
  arr.reduce((accumulator, num) => (accumulator + num),0) / arr.length 
)

// map to multiply each value by PI
console.log("Map to mult by pi: " + 
  arr.map(num => Math.round(num * Math.PI))
)