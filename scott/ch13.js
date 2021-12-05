const ex1 = [ 
  {
    current:0.35,
    min:0.15,
    max:0.62
  },
  {
    current:0.1,
    min:0.1,
    max:0.9
  },
  {
    current:0.9,
    min:0.1,
    max:0.9
  },
]
const ex2 = [
    {
      current:0.4,
      min:0.1,
      max:0.9
    },
    {
      current:1.2,
      min:0.1,
      max:0.6
    }
  ]


const checkAllGauges = (gaugeObj) => {
    currentStatus = true
    for (let i = 0; i < gaugeObj.length; i++) {
        if (gaugeObj[i].current > gaugeObj[i].max || gaugeObj[i].current < gaugeObj[i].min) 
        currentStatus = false 
    }
    return currentStatus
  }
checkAllGauges(ex1)
checkAllGauges(ex2)

//  Step 1. Take an array of inputs
//  Step 2. Compare current gauge status vs current min and max
//  Step 3. If current falls within the limits then go to next gauge
//  Step 4. If any gauge current falls outside of the gauge limits return false
//  Step 5. If all gauges are good return true





//   Chapter 3
//   const checkGaugeStatus = (gauge) => {
//     if (gauge.current <= gauge.max && gauge.current >= gauge.min) { 
//         return true;
//     } 
//     else {
//       return false;
//     }
//   }