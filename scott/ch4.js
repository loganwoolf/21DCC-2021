const switchToggle = (obj) => {
    obj.isOn = !obj.isOn;
 return obj
}

  const ex1 = {
    name:"toggleA",
    isOn:false
  }

  const ex2 = {
    name:"toggleB",
    isOn:true
  }

console.log(switchToggle(ex1))
// console.log(switchToggle(ex2))
// console.log(switchToggle(ex2))
// const switchToggle = (toggle) => {
//     // Code here!
  
//     // Remember to return a value!
//   }
//console.log(ex1) 