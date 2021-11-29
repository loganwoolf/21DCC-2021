
const temperature = 32
const windSpeed = 20
const condition = "Sunny with small clouds"
const windDirection = "NNE"

function storeWeatherConditions (temperature, condition, windSpeed, windDirection) {
    const object = {
        temperature: Math.round((temperature -32) * 5 / 9),  
        windSpeed: Math.round(windSpeed / 2.237),            
        condition: condition,
        windDirection: windDirection
    };  
   return object;
}

storeWeatherConditions(temperature, condition, windSpeed, windDirection)