function addAstronautToRoster (roster, astronaut) {
  roster.push(astronaut)
  return roster
}

const exampleRoster = []

const ex1 = {
  firstName:"Chris",
  lastName: "Hadfield",
  nickname:"Space Oddity",
  prefix:"Astronaut"
}
const ex2 = {
  firstName: 'Roux',
  lastName: 'Woolf',
  nickname: 'Wild Man',
  prefix: 'Commander'
}

console.log(addAstronautToRoster(exampleRoster, ex1))
console.log(addAstronautToRoster(exampleRoster, ex2))

console.log(exampleRoster)