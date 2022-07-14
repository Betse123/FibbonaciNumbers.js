// function isLeap(input) {
//     if(input % 4 == 0 && input % 100 !== 0 || input % 400 == 0) {
//         return "is leap year"
//     } else {
//         return "is not leap year"
//     }
// }
// console.log(isLeap(1989))
// function fizzBuzz() {
// for (let index = 0; index <= 100; index++) {
//     if(index % 3 == 0 && index % 5 != 0) {
//         console.log("Fizz")
//     } else if(index % 5 == 0 && index % 3 != 0) {
//         console.log("Buzz")
//     } else if(index % 5 == 0 && index % 3 == 0) {
//         console.log("FizzBuzz")
//     }else {
//         console.log(index)
//     }   
//     }
// }
//fizzBuzz()
// let output = []
// let counter = 1
// function fizzBuzz() {
//     if (counter % 3 == 0 && counter % 5 != 0) {
//         output.push("Fizz")
//     } else if (counter % 5 == 0 && counter % 3 != 0) {
//         output.push("Buzz")
//     } else if (counter % 5 == 0 && counter % 3 == 0) {
//         output.push("FizzBuzz")
//     } else {
//         output.push(counter);
//     }
//      counter += 1
//      console.log(output)
// }
// let index = 0
// while (index <= 100) {
//     if(index % 3 == 0 && index % 5 != 0) {
//                 console.log("Fizz")
//             } else if(index % 5 == 0 && index % 3 != 0) {
//                 console.log("Buzz")
//             } else if(index % 5 == 0 && index % 3 == 0) {
//                 console.log("FizzBuzz")
//             }else {
//                 console.log(index)
//             }   
//             index++
// }

// function beer() {
//     let i = 100;
//     while (i > 0) {
//         if (i == 1) {
//             console.log(`${i} bottle of beer on the wall.${i} bottle of beer on the wall.
// Take one down and pass it around, no more bottles of beer on the wall`) 
//         } else {
//             console.log(`${i} bottles of beer on the wall.${i} bottles of beer on the wall.
// Take one down and pass it around, ${i-1} bottles of beer on the wall`) 
//         }   
//         i--
//                     }
// }
            //Fibbonaci numbers generator.
function fibbonaciNumbers(count) {
    let arr = []
    let a = 0;
    let b = 1;
    let temp;
    while (arr.length < count) {
        temp = a
        a = b
        b = temp    
        arr.push(b)
        b = a + b
    }
    console.log(arr.slice(0,count))
}
