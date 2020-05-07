'use stict'

let userName = prompt("Как вас зовут?", "Имя");
let userAge = +prompt("Сколько вам лет?");
let userGender = prompt("Какого вы пола?");
let userHobby = confirm("Есть ли у вас хобби?");

if (userHobby == true) {
    var firstUserHobbyYes = prompt("Какое хобби?");
    var secondUserHobbyYes = prompt("А ещё какое хобби?");
};

let userJob = confirm("Вы рабротаете");

if (userJob == true ) {
    var userJobYes = prompt("Кем вы работаете?");
} else {
    var userLearnYes = prompt("Вы учитесь?");
}

var person = {
    user: userName,
    age: userAge,
    gender: userGender,
    hobby: userHobby,
    hobbyName: {},
    job: userJobYes,
    learnYes: userLearnYes
};

person.hobbyName[0] = String("Первое хобби ") + firstUserHobbyYes;
person.hobbyName[1] = String("Второе хобби ") + secondUserHobbyYes;


console.log(person);

if ( userHobby == true  &&  userJob == true ) {
    alert("Вы очень занятой человек!");
}

var qwuest1 = prompt("Хотите расчитать своё свободное время?", "Да");

if ( qwuest1 === "Да" ) {
    var qwuest2 = +prompt("Сколько времени вы работаете?");
    var qwuest3 = +prompt("Сколько времени вы уделяете " + firstUserHobbyYes +"?");
    var qwuest4 = +prompt("Сколько времени вы уделяете " + secondUserHobbyYes +"?");
};


var answer = 16 - Number(qwuest2) - Number(qwuest3) - Number(qwuest4);




if ( Number(answer) < 5 ) {
    var str = " часа свободного времени";
} else {
    var str = " часов свободного времени";
};

alert("У тебя в день выходит " + answer + String(str));

if ( Number(qwuest3) < 2 ) {
    alert("Вы уделяете мало времени " + firstUserHobbyYes);
};
if ( Number(qwuest4) < 2 ) {
    alert("Вы уделяете мало времени " + secondUserHobbyYes);
};