//input

const exchanges = [
  {origin:"MC", message:"So how is it out there?"},
  {origin:"Shuttle", message:"Oh it's pretty nice!"},
  {origin:"MC", message:"Did you like the challenges?"},
]
   
const missionData = {
  astro:["...","..."], 
  bio:["..."], 
  physics:["..."]
}
   
//output

{
  transcript:
  [
    "MC: So how is it out there?",
    "Shuttle: Oh it's pretty nice!",
    "MC: Did you like the challenges?"
  ],
  missionData:{
    astro:["...","..."], 
    bio:["..."], 
    physics:["..."]
  }
}



//original code

// Add parseMessage here if you want!

const parseMissionSummary = (exchanges, missionData) => {
  // Code here!
}
