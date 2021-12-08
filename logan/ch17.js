function switchSpecificToggle(toggleList, specificToggle) {
  for (let toggle of toggleList) {
    if (toggle.name === specificToggle) {
      toggle.isOn = !toggle.isOn
    }
  }
  return toggleList
}


const ex1 = [
  {
    name: "toggleA",
    isOn: false
    }, 
  {
    name: "toggleB",
    isOn: false
  },
  {
    name: "toggleC",
    isOn: false
    }, 
  {
    name: "toggleD",
    isOn: false
  }
]
const ex1Name = "toggleC"

console.log(
  switchSpecificToggle(ex1, ex1Name)
)