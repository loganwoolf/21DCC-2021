
const exampleRoster = [
    {
        firstName:"Chris",
        lastName: "Hadfield",
        nickname:"Space Oddity",
        prefix:"Astronaut",
        job:"Shuttle DJ"
    },
    {
     firstName:"Guy",
     lastName: "Firey",
     nickname:"Flavour Planet",
     prefix:"Captain",
     job:"Space Cook"
    },
    {
        firstName:"Lipin",
        lastName: "Jection",
        prefix:"Really Big",
        job:"Fluffer"
       }
  ] 
  
  
const listAstronautJobs = (roster) => {
    astronautJobs = [];
    for (let i=0; i<roster.length; i++) {
        astronautJobs.push(roster[i].job);
        return astronautJobs;
    }
}

