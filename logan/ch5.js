function addJobToAstronaut (astronaut, job) {
  astronaut.job = job
  return astronaut
}


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

addJobToAstronaut(ex1, 'Shuttle DJ')
addJobToAstronaut(ex2, 'Fly the damn thing')

console.log(ex1)
console.log(ex2)