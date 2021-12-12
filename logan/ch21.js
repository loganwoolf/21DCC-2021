const parseMissionSummary = (exchanges, missionData) => {
  let outputObj = {
    transcript: [],
    missionData
  }
  for (let exchange of exchanges) {
    let str = `${exchange.origin}: ${exchange.message}`
    outputObj.transcript.push(str)
  }

  return outputObj
}


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

/* 
// OUTPUT EXAMPLE
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
 */

 console.log(
   parseMissionSummary(exchanges, missionData)
 )