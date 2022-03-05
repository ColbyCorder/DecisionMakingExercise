// 1a
let randomNum = Math.random();

randomNum *= 5;

randomNum = Math.floor(randomNum);

randomNum++;

console.log(randomNum);

// 1b
if (randomNum >= 4){
    console.log("Greater than or equal to 4");
} else if (randomNum == 2 || randomNum == 3){
    console.log("Equal to 2 or 3");
} else {
    console.log("Equal to 1");
}

// 1c
if (randomNum >= 4 || randomNum <= 2){
    console.log("NOT equal to 3");
}

// 1d
if (randomNum == 4 || randomNum <= 2){
    console.log("NOT equal to 3 AND not equal to 5");
}

// 1e
if (randomNum ==2 || randomNum ==4){
    console.log("Equal to 2 OR equal to 4");
} 

// BONUS
//2
let bonus = (randomNum >= 4) ? "Greater Than or equal to 4" : "Less than 4";

console.log(bonus);

//3
switch (randomNum){
    case 1 :
        console.log("One");
        break;
    case 2 :
        console.log("Two");
        break;
    case 3 :
        console.log("Three");
        break;
    case 4 :
        console.log("Four");
        break;
    case 5 :
        console.log("Five");
        break;
}