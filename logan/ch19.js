function organizeData (dataArray) {
  let outputObject = {}
  for (let datum of dataArray) {
    if (!outputObject[datum.type]) {
      outputObject[datum.type] = [datum.data]
    } else {
      outputObject[datum.type].push(datum.data)
    }
  }
  return outputObject
}

const listOfReceivedData = [
  {type: "astro", data: "Saturn Data"},
  {type: "bio", data: "Space Potatoes"},
  {type: "physics", data: "Lagrange Points"},
  {type: "bio", data: "OMG Tardigrades"},
  {type: "physics", data: "Material reflectivity"},
  {type: "astro", data: "Mercury is not the hottest"},
]

console.log(
  organizeData(listOfReceivedData)
)
