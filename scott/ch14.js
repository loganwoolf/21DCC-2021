const switchAllTogglesOn = (switchObj) => {
    for (let state of switchObj) {
        if (state.isOn === false) {
            state.isOn = true
            console.log(state)
        }
    }
    return switchObj
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

switchAllTogglesOn(toggleList)

// Step 1. Take an array as an input
// Step 2. Look at current switch status
// Step 3. If switch is off then turn on
// Step 4. If switch is on then leave on