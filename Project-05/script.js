// let num = 1
// while (num <= 5) {
//     console.log(num)
//     num ++
// }

// let num = +prompt("Enter a number");
// while (num < 1 || num > 10) {
//     num = +prompt("Enter a number");
// }
// console.log(num);

// console.log(Number(7))


// const correctPin = 1234;
// let pin = +prompt('Enter a valid pin');
// let attempt = 1;
// while (attempt <= 3 && pin !== correctPin){
//     pin = +prompt('Enter a valid pin');
//     attempt ++;
// }
// if (pin === correctPin){
//     console.log("GOOd");
// }
// else {
//     console.log("nie Good");
// }

// let attempt = 1, password = 1234;
// while (attempt <= 3) {
//     let uspassword = prompt("Enter your Password");
//     if (uspassword === password){
//         console.log("good");
//         break;
//     }
//
//     console.log("incorrect");
//     attempt++;
// }


//
// let attempt = 1, password = 1234;
// while (attempt <= 3) {
//     let uspassword = prompt("Enter your Password");
//     if (uspassword === password){
//         console.log("good");
//         break;
//     }
//
//
//     attempt++;
//     console.log('incorrect', attempt);
// }

// let menu;
// do{
//     menu = prompt("Do no doo?\n"+
//     "1 - profile\n"+
//     "2 - settings\n"+
//     "0 - exit\n");
//     if (menu === "1"){
//         alert("opening profile")}
//     else if (menu === "2"){
//         alert("opening settings")}
//     else if (menu === "0"){
//         alert("leaving")}
//     else{
//         alert("glupii")
//     }
// }
// while (menu !== 0);
//

// let count = 0, sum = 0;
// while (count < 5) {
//     let curgrade= +prompt(`Grade № ${count+1}`);
//     if (curgrade < 1 || curgrade > 12 || Number.isNaN(curgrade)) {
//         alert("wrong number");
//         continue;
//     }
//     sum += curgrade;
//     count++;
// }
// console.log(sum);
// console.log(sum / 5);

let questionsNum = 1;
let score = 1;
while (questionsNum <= 5) {
    let question = "", answears = "";
    switch (questionsNum) {
        case 1:
            question = "How to create a value?"
            answears = "Let";
            break;
            case 2:
                question = "Which operator makes equality"
                answears = "===";
                break;
                case 3:
                    question = "How to make operator and?"
                    answears = "&&";
                    break;
                    case 4:
                        question = "How to end cycle?";
                        answears = "break";
                        break;
                        case 5:
                            question = "How to write increment?";
                            answears = "++";
                            break;
    }
    let answer = prompt(`Question # ${questionsNum} out of 5\n ${question}`);
    if (answear === "") {
        console.log("Incorect answer");
        continue;
    }
    if (answear === answers) {
        alert("correct")
        score++;
    }
    else {
        alert(`Wrong answer`);
    }
    questionsNum++;

}
if (score === 5){
    alert("perfect")
}
else if (score >= 3) {
    alert("good")
}
else{
    alert("lox")
}