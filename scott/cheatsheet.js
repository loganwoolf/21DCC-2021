// How to use Loops
//
// Step 1: Use Map, Filter, Sort, For Each, or Reduce
// Step 2: get Epsteined
// Step 3: go eat dinner
// Step 4: use a damn loop

// input data
const exampleRoster = [
    { name: 'Mark Shuttleworth', job:'Shuttle DJ', age: 35},
    { name: 'Roy Cook', job: 'Space Cook', age: 25},
    { name: 'Roux Woolf', job: 'Security', age: 2}
] 

// using map
function listAstronautJobs (roster) {
    return roster.map(person => person.job)
}

// using filter
console.log(exampleRoster.filter(person => person.age < 33))

// Using Sort

// Using For Each

// Using Reduce

// using for loop
function forLoopAstronautJobs (roster) {
    let outputArr = []
    for (let i = 0; i < roster.length; i++) {
        outputArr.push(roster[i].job)
    }
    return outputArr
}

// using for..in loop
function forInAstronautJobs (roster) {
    let outputArr = []
    for (let i in roster) {
        outputArr.push(roster[i].job)
    }
    return outputArr
}

// using for..of loop
function forOfAstronautJobs (roster) {
    let outputArr = []
    for (let person of roster) {
        outputArr.push(person.job)
    }
    return outputArr
}

console.log(listAstronautJobs(exampleRoster))
console.log(forLoopAstronautJobs(exampleRoster))
console.log(forInAstronautJobs(exampleRoster))
console.log(forOfAstronautJobs(exampleRoster))

