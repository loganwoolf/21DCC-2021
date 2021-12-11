const listOfReceivedData = [
  {type:"astro", data:"Saturn Data"},
  {type:"bio", data:"Space Potatoes"},
  {type:"physics", data:"Lagrange Points"},
  {type:"bio", data:"OMG Tardigrades"},
  {type:"physics", data:"Material reflectivity"},
  {type:"astro", data:"Mercury is not the hottest"},
]

const organizeData = (receivedData) => {
let output = {}
for (let datum of receivedData) {
  if (!output[datum.type]) {
    output[datum.type]=[datum.data]
  } else {
    output[datum.type].push(datum.data)
  }
}
return output
}

console.log(organizeData(listOfReceivedData))
organizeData(listOfReceivedData)