const checkGaugeStatus = (gauge) => {
    if (gauge.current <= gauge.max && gauge.current >= gauge.min) { 
        return true;
    } else {
      return false;
    }
  }

  const ex1 = {
    current:0.4,
    min:0.1,
    max:0.9
  }
  const ex2 = {
    current:1.4,
    min:0.1,
    max:0.4
  }

console.log(checkGaugeStatus(ex1))
console.log(checkGaugeStatus(ex2))


// let a = 'a'
// let b = 'b'
// if (a < b) { // true
//   console.log(a + ' is less than ' + b)
// } else if (a > b) {
//   console.log(a + ' is greater than ' + b)
// } else {
//   console.log(a + ' and ' + b + ' are equal.')
// }