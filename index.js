// EJ 1
// function bucle(){
  //for (i = 1; i <= 100; i++) {
   //   let result = '';
     // if (i % 3 === 0) {
      //  result += 'Fizz';
     // }
      //if (i % 5 === 0) {
       // result += 'Buzz';
     // }
    
    //  console.log(result || i);
  //  }
//}
// module.exports = bucle;

for(let number = 1;number <= 100;number++){
    console.log(number);
}

export function divisiblePor3 () {
    let number1 = 3;
    if(number1 % 3 == 0);
    return ('Fizz');
} 

export function divisiblePor5 () {
    let number2 = 5;
    if(number2 % 5 == 0);
    return ('Buzz');
}

export function divisiblePor3Y5 () {
    let number3 = 15;
    if(number3 % 3 == 0);
    if(number3 % 5 == 0);
    return ('FizzBuzz');
}