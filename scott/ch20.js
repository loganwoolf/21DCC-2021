const speed = 40  
const missionData = {
  astro:["...","..."], 
  bio:["..."], 
  physics:["..."]
}

const checks = {
  maxSpeed:50,
  minSpeed:20,
  dataEntries:{
    astro:3,
    bio:1,
    physics:1
  }
}

const confirmReentryPlans = (speed, missionData, checks) => {
  
  //checks speed vs the min & max and returns true if it's within it's limits
  let speedCheck
  const checkSpeed = (speed, checks) => {
    if (speed <= checks.maxSpeed && speed >= checks.minSpeed) { 
      speedCheck = true
    } else {
      speedCheck = false
    }
  }
  checkSpeed(speed,checks)
  
  //checks missionData has the correct number of entries 
  //for the object key:values vs the expected output
  let dataCheck
  const checkData = (missionData, checks) => {
    let keys = Object.keys(checks.dataEntries)
    for (let key of keys) {
      if (checks.dataEntries[key] === missionData[key].length) {
        dataCheck = true      
      } else {
        dataCheck = false
        return
      }
    }
}
  checkData(missionData, checks)
  
//data validation check
  let output  
  const finalCheck = (speedCheck, dataCheck) => {
    if (speedCheck === false || dataCheck === false) {
      output = false
    } 
    else {
      output = true
    }
  }
finalCheck(speedCheck, dataCheck)
console.log(output)
return output
}


confirmReentryPlans(speed, missionData, checks)

  




