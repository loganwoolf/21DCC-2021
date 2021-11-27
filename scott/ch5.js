const addJobToAstronaut = (astronaut, job) => {
    astronaut.job = job
   return astronaut 
}


  const ex1 = {
        firstName:"Chris",
        lastName: "Hadfield",
        nickname:"Space Oddity",
        prefix:"Astronaut"
  }

  console.log(addJobToAstronaut(ex1))

//   const exampleAstronaut = {
//     firstName:"Chris",
//     lastName: "Hadfield",
//     nickname:"Space Oddity",
//     prefix:"Astronaut"
//   }

// const exampleAstronaut = {
//     firstName:"Chris",
//     lastName: "Hadfield",
//     nickname:"Space Oddity",
//     prefix:"Astronaut",
//     job:"Shuttle DJ"
//   }
  