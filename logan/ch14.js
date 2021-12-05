function switchAllTogglesOn (toggleList) {
  for (let toggle of toggleList) {
    !toggle.isOn ? toggle.isOn = !toggle.isOn : undefined
  }
  return toggleList
}

const toggleList = [
	{
		name:"Air",
		isOn:true
	},
	{
		name:"Radio",
		isOn:false
	},
]

console.log(
  switchAllTogglesOn(toggleList)
)