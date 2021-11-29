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

console.log('\nshould make true')
console.log(switchToggle(someToggle1))
console.log('\nshould make false again')
console.log(switchToggle(someToggle1))
console.log('\nshould make false')
console.log(switchToggle(someToggle2))