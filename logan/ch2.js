const generateAstronautTag = (astronaut) => {
  return `${astronaut.prefix}: ${astronaut.firstName} "${astronaut.nickname}" ${astronaut.lastName}`
}

const ex1 = {
  firstName: "Yuri",
  lastName: "Gagarin",
  nickname: "First!",
  prefix: "Cosmonaut"
}
const ex2 = {
  firstName: "Neil",
  lastName: "Armstrong",
  nickname: "Steps",
  prefix: "Astronaut"
}


console.log(generateAstronautTag(ex1))
console.log(generateAstronautTag(ex2))