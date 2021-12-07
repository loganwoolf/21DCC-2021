function getAverageSpeed (firstPosition, secondPosition) {
  const totalDistance = Math.abs(firstPosition.altitude - secondPosition.altitude)
  const totalTime = Math.abs(firstPosition.time - secondPosition.time)

  return +(totalDistance / totalTime).toFixed(1)
}

const firstPosition = {
  time: 1637074462,
  altitude: 1100
}
const secondPosition = {
  time: 1637074558,
  altitude: 2200
}
  
console.log(
  getAverageSpeed(firstPosition, secondPosition)
)