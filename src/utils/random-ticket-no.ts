const fiveDigitNo = () => {

  // min and max
  let min: number = 10000
  let max: number = 90000

  // generate random number of 5 digits
  let randomNum: number = Math.floor(Math.random() * min) + max

  // return the random 5 digit number
  return randomNum
}

export { fiveDigitNo }
