
const listOfChoices = [
  "Chicken Dinner",
  "Chicken Dinner",
  "Chicken Dinner",
  "Ice Cream Sandwich", 
  "Ice Cream Sandwich"
]

function chooseLunchWinner (array) {
    return array.sort((a,b) =>
          array.filter(v => v===a).length
        - array.filter(v => v===b).length
    ).pop();
}

chooseLunchWinner(listOfChoices)
