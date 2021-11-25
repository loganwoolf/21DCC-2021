const checkGaugeStatus = (gauge) => {
  return gauge.current >= gauge.min 
    ? gauge.current <= gauge.max
    ? true
    : false
    : false
    // thank you chained ternary syntax
  }


const ex1 = {
  current:0.4,
  min:0.1,
  max:0.9
}
const ex2 = {
  current:0.09,
  min:0.1,
  max:0.9
}
const ex3 = {
  current:0.1,
  min:0.1,
  max:0.9
}
const ex4 = {
  current:0.9,
  min:0.1,
  max:0.9
}
const ex5 = {
  current:0.91,
  min:0.1,
  max:0.9
}

console.log('Should be: \ntrue\nfalse\ntrue\ntrue\nfalse\n')
console.log(checkGaugeStatus(ex1))
console.log(checkGaugeStatus(ex2))
console.log(checkGaugeStatus(ex3))
console.log(checkGaugeStatus(ex4))
console.log(checkGaugeStatus(ex5))