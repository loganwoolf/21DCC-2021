const averageWindSpeed = (weatherEntries) => {
  // Code here!
  let accumulator = 0
  for (let entry of weatherEntries) {
    accumulator += entry.windSpeed
  }
  return Math.round(accumulator / weatherEntries.length)
}



const exampleEntries = [
  { 
    temperature:0, 
    weather:"sunny", 
    windDirection: "NNE", 
    windSpeed:24
  },
  { 
    temperature:10, 
    weather:"cloudy", 
    windDirection: "NNE", 
    windSpeed:9 
  }
] 