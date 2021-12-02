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

function averageWindSpeed (entries) {
  list = [];
  let x = 0;
  for (let i=0; i<entries.length; i++) {
      x = x+(entries[i].windSpeed)
  }
  x = Math.round(x/entries.length)
  return x
}

console.log(averageWindSpeed(exampleEntries))