//1
if ("0") {
    alert( 'Привет' );
}

//2
let value = prompt('Какое "официальное" название JavaScript?', '');
if (value == 'ECMAScript') {
    alert('Верно!');
} else {
    alert('Не знаете? ECMAScript!');
}

//3
let value = prompt('Введите число', 0);
if (value > 0) {
    alert(1);
} else if (value < 0) {
    alert(-1);
} else {
    alert(0);
}

//4
result = (a + b < 4) ? 'Мало' : 'Много';

//5
let message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' : (login == '') ? 'Нет логина' : '';