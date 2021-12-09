function chooseLunchWinner (listOfChoices) {
  // create reduced choices array to hold objects
  let reducedChoices = []
  
  // loop through list of choices
  for (let choice of listOfChoices) {
    // search reducedChoices array
    // if an object including name of current choice exists in reducedChoices,
    // increment votes count, otherwise create one and assign a votes count of 1
    let objectFound = false
    for (let existingChoice of reducedChoices) {
      if (existingChoice.name === choice) {
        objectFound = true
        existingChoice.votes += 1
      }
    }
    if (objectFound === false) {
      reducedChoices.push({name: choice, votes: 1})
    }
  }
  
  // create counter variable
  let mostVotes = 0
  let mostVotesIndex = 0
  // loop through objects in reduced choices to find one with most votes
  for (let tally in reducedChoices) {
    if (reducedChoices[tally].votes > mostVotes) {
      mostVotes = reducedChoices[tally].votes
      mostVotesIndex = tally
    }
  }

  return reducedChoices[mostVotesIndex].name

}

const exampleList = [
  "Vodka",
  "Bread",
  "Vodka",
  "Vodka Soaked Bread",
  "Bread", 
  "Bread",
  "Vodka",
  "Vodka Soaked Bread",
  "Vodka",
  "Vodka Soaked Bread",
  "Bread", 
  "Vodka Soaked Bread",
  "Bread", 
  "Vodka Soaked Bread",
  "Bread",
]

console.log(
  chooseLunchWinner(exampleList)
)
