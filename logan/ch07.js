const storeWeatherConditions = (temperature, condition, windSpeed, windDirection) => {
  let outputObj = {
    temperature: Math.round((temperature - 32) * 5 / 9),
    windSpeed: Math.round(windSpeed / 2.237),
    windDirection: windDirection,
    condition: condition
  }

return outputObj
}


const temperature = 32
const condition = "Sunny with small clouds"
const windSpeed = 20
const windDirection = "NNE"
let weatherConditions = storeWeatherConditions(temperature, condition, windSpeed, windDirection)

console.log(weatherConditions)