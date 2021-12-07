const launchDate = "2021-12-12"
//const fakeToday = "2021-12-01"
// const fakeToday = new Date()
const missionName = "Moon visit"


const timeRemaining = (launchDate, missionName, fakeToday) => {
	const today = fakeToday || new Date()
    var date1 = new Date(launchDate)
    var date2 = new Date(today)
    var timeDifference = date1.getTime() - date2.getTime()
    var dayDifference = Math.round(timeDifference / (1000 * 3600 * 24))
    const dateVariance = {daysRemaining: dayDifference, missionName: missionName}
     return dateVariance 
    }

// timeRemaining(launchDate, missionName, fakeToday)
// console.log(timeRemaining(launchDate, missionName, fakeToday))

timeRemaining(launchDate, missionName)
console.log(timeRemaining(launchDate, missionName))
