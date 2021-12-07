
const timeRemaining = (launchDate, missionName, fakeToday) => {
	const today = fakeToday || new Date() // Do not alter this line!
  
	// Code here!
  }
  

// input
const launchDate = "2021-12-12"
const fakeToday = "2021-12-01"
const missionName = "Moon visit"
    
// output
{
	missionName = "Moon visit",
	daysRemaining = 11
  }

// Test Code

const launchDay = new Date(launchDate)
let launchTime = launchDay.getTime()  
console.log(launchTime)

const fakeDate = new Date(fakeToday)
let todayTime = fakeDate.getTime()
console.log(todayTime)