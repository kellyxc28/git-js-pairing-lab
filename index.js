//Code your solutions in this file
//Q1 
const fiveToOneHundred = () => {
    for(i=5; i<=100; i++){
        console.log(i);
    }
}
//  fiveToOneHundred();

// Q2 
const multiplesOfThree = () => {
    for(i = 1; i <= 100; i++){
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}
//  multiplesOfThree();

//Q3 
const multiplesOfThreeOrFive = () => {
    for(i = 1; i <= 100; i++){
        if (i % 3 === 0||i % 5=== 0) {
            console.log(i);
        }
    }
}

// multiplesOfThreeOrFive();

//Q4
const untilNum = (num) => {
    for (i = 1; i <= num; i++) {
        console.log(i);
    }
}

// untilNum(10);

// Q5
const multiply=(num1,num2)=> {
    return num1*num2;
}
// console.log(multiply(3, 5));

const add = (num3, num4) => {
    if (num3 === num4) {
        return (num3 + num4) * 3; 
    }
    else {
        return num3 + num4;
    }
}

console.log(add(2, 4)); 
console.log(add(4, 4)); 