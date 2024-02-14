// 1
alert( null || 2 || undefined ); // 2

// 2
alert( alert(1) || 2 || alert(3) ); // 1 2

// 3
alert( 1 && null && 2 ); //null

// 4
alert( alert(1) && alert(2) ); // 1 undefined

// 5
alert( null || 2 && 3 || 4 ); // 3

// 6
let value = NaN;
value &&= 10;
value ||= 20;
value &&= 30;
value ||= 40;
alert(value); // 30

// 7
if (age >= 14 && age <= 90) {}

// 8
if (age < 14 || age > 90) {}

// 9
if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' ); // first and third

// 10
let userName = prompt("Кто там?", '');
if (userName === 'Админ') {
    let pass = prompt('Пароль?', '');
    if (pass === 'Я главный') {
        alert( 'Здравствуйте!' );
    } else if (pass === '' || pass === null) {
        alert( 'Отменено' );
    } else {
        alert( 'Неверный пароль' );
    }
} else if (userName === '' || userName === null) {
    alert( 'Отменено' );
} else {
    alert( "Я вас не знаю" );
}