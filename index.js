//Code your solutions in this file

//Ethan - Q1: fiveToOneHundred()  
const fiveToOneHundred = () => {
    for(i=5; i<=100; i++){
        console.log(i);
    }
}
fiveToOneHundred();

// Kelly - Q2: multiplesOfThree() 
const multiplesOfThree = () => {
    for(i = 1; i <= 100; i++){
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}
multiplesOfThree();

// Ethan - Q3: multiplesOfThreeOrFive() 
const multiplesOfThreeOrFive = () => {
    for(i = 1; i <= 100; i++){
        if (i % 3 === 0||i % 5=== 0) {
            console.log(i);
        }
    }
}
multiplesOfThreeOrFive();

// Kelly - Q4: untilNum() 
const untilNum = (num) => {
    for (i = 1; i <= num; i++) {
        console.log(i);
    }
}
untilNum(10);

// Ethan - Q5: multiply() 
const multiply=(num1,num2)=> {
    return num1*num2;
}
console.log(multiply(3, 5));

// Kelly - Q6: add() 
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

// Ethan - Q7: isNegative() 
const isNegative=(num5)=> {
    if (Math.sign(num5)=== -1){
        return true;
    }
   else if (Math.sign(num5) === 1){
        return false;
    }
}
console.log(isNegative(4));
console.log(isNegative(-4));

// Kelly - Q8: triangleArea() 
const triangleArea = (height, base) => {
    return (1/2) * (base * height);
}
console.log(triangleArea(3, 4)); 

// Ethan - Q9: betweenTwentyAndFourty() 
const betweenTwentyAndFourty=(num6)=>{
    if(num6>20 && nunm6 < 40){
        return true; 
    }
    else {
        return false;
    }
}
console.log(betweenTwentyAndFourty(5));

// Kelly - Q10: largest() 
const largest = (num7, num8, num9) => {
    if (num7 > num8 && num7 > num9) {
        return num7;
    }
    else if (num8 > num7 && num8 > num9) {
        return num8;
    }
    else if (num9 > num8 && num9 > num7) {
        return num9;
    }
}
console.log(largest(1, 2, 3)); 
console.log(largest(10, 50, 35));  
console.log(largest(22, 47, 9)); 
