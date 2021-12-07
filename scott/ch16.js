const firstPosition = {
    time: 1637074462,
    altitude: 1100
  }
  const secondPosition = {
    time: 1637074558,
    altitude: 2200
  }

const getAverageSpeed = (obj1, obj2) => {
    var location1 = obj1
    var location2 = obj2
    var timeDifference = obj2.time - obj1.time
    var locationDifference = obj2.altitude - obj1.altitude
    var speed = Math.round((locationDifference * 10 / timeDifference))/10
   return speed
  }

getAverageSpeed(firstPosition, secondPosition)