const switchToggle = (toggle) => {
  toggle.isOn
    ? toggle.isOn = false
    : toggle.isOn = true

  return toggle
}

const someToggle1 = {
  name:"toggleA",
  isOn:false
}
const someToggle2 = {
  name:"toggleB",
  isOn:true
}

console.log(switchToggle(someToggle1))
console.log(switchToggle(someToggle2))