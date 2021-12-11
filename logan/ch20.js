function confirmReentryPlans (speed, missionData, checks) {
  // write such that checks are done against supplied data, not other way around
  // this means anything from checks object should be on the left side of a conditional statement

  // check speed is within range
  if (checks.minSpeed > speed || checks.maxSpeed < speed) {
    return false
  }

  // check that correct amount of data has been collected break keys in checks.dataEntries out into their own array
  let studies = Object.keys(checks.dataEntries)

  // iterate over keys array to access the checks.dataEntries key's values and compare to length of collected data
  for (let field of studies) {
    if (checks.dataEntries[field] !== missionData[field].length) {
      return false
    }
  }

  // if all is good, return true
  return true
}

// sample data
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
    astro:2,
    bio:1,
    physics:1
  }
}

console.log(
  confirmReentryPlans(speed, missionData, checks)
)