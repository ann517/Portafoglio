//print all prime numbers from 2 to 10

function firstPrimeNumbers(NUM) {
  for (let num = 2; num <= NUM; num++) {
    let isprime = true
    for (let previous = 2; previous < num && isprime; previous++)
      if (num % previous === 0) {
        isprime = false
      }
  }
  // if (isprime){
  //     console.
  // }
}
