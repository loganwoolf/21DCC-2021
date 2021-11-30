// using map
function listAstronautJobs (roster) {
  return roster.map(person => person.job)
}

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

const exampleRoster = [
  { name: 'Mark Shuttleworth', job:'Shuttle DJ' },
  { name: 'Roy Cook', job: 'Space Cook' },
  { name: 'Roux Woolf', job: 'Security' }
] 

console.log(listAstronautJobs(exampleRoster))
console.log(forLoopAstronautJobs(exampleRoster))
console.log(forInAstronautJobs(exampleRoster))
console.log(forOfAstronautJobs(exampleRoster))
