const timeRemaining = (launchDate, missionName, fakeToday) => {
  let today
  if (fakeToday) {
    today = fakeToday 
    today.setHours(24)
    
  } else {
    today = new Date() // Do not alter this line!
    today.setHours(0)
    today.setMinutes(0)
    today.setSeconds(0)
    today.setMilliseconds(0)
  }
  
  const launch = new Date(launchDate)
  launch.setHours(24)
  const daysToLaunch = Math.round((launch - today) / 3600000 / 24)
  return {
    missionName: missionName,
    daysRemaining: daysToLaunch
  }
}

console.log(
  timeRemaining('2022-01-10'
  , 'test launch'
  // , new Date('2021-12-06')
  )
)