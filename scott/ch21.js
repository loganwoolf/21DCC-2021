//Step 1 = take exchanges and parse them into a format where it's "key: value" (origin: message)
//Step 2 = add exchanges to a list that has 2 keys "transcript" & "missionData"
//Step 3 = mission summary should have 2 objects "transcript" & "missionData"
//Step 3A = transcript should have 3 values in an array "origin1: message1", "origin2, message2", ...
//Step 3B = mission data stays the same

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

const parseMissionSummary = (exchanges, missionData) => {
    // Code here!
    //Put parsed transcript into an array    
    let transcriptArray = []
    for (let object of exchanges) {
        object = object.origin + ": " + object.message
        transcriptArray.push(object)
    }
    //create object with transcript as key 
    let output = {
        transcript: transcriptArray
    }
    //add mission data to the object   
    output.missionData=missionData
    return output
}

parseMissionSummary(exchanges, missionData)
console.log(parseMissionSummary(exchanges, missionData))
