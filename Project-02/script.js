
// console.log(a === b);

// if (умова){
//     код
// }
// ----------------------------------------
// let temp = Number(prompt('Enter a temperature '));
// let result;
// if (temp < 0) {
//     result = "холодно"
// }
// else if (temp >= 25) {
//     result = "жарко"
// //
// //
// //
// // }
// else if (temp > 0 && temp < 24) {
//     result = "нормально"
// }
// alert(result);

//----------------------------------------

// const login = "admin";
// const password = "12345";
//
// let user_login = prompt("Enter your username");
// let user_password = prompt("Enter your password");
//
// if (user_login === login && user_password === password) {
//     alert("Доступ дозволено");
// } else {
//     alert("Доступ заборонено");
// }

let deliveryType = prompt('What is your delivery type?');
let cost = 0;

switch (deliveryType) {
    case 'post':
        cost = 100;
        break;
    case 'courier':
        cost = 200;
        break;
    case 'pickup':
        cost = 0;
        break;
    default:
        cost = "n/a";
}

alert(cost);
