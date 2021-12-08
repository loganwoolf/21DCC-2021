
const toggleList = [
    {
      name: "toggleA",
      isOn: false
      }, 
    {
      name: "toggleB",
      isOn: true
    }
]
const specificToggle = "toggleA"   

const switchSpecificToggle = (arrayList, targetObj) => {
  for (let i = 0; i < arrayList.length; i++) {
    if(arrayList[i].name === targetObj) {
	  arrayList[i].isOn = true
      return arrayList
    }
  }
}

switchSpecificToggle(toggleList, specificToggle)