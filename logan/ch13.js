function checkAllGauges (gaugeList) {
  for (let reading of gaugeList) {
    if (reading.current > reading.max 
      || reading.current < reading.min) {
      return false
    }
  }
  return true
}


const exGaugeList = [
  {
    current:0.5,
    min:0.1,
    max:0.9
  },
  {
    current:0.9,
    min:0.1,
    max:0.6
  }
]

console.log(
  checkAllGauges(exGaugeList)
)