// 1
let i = 3;
while (i) {
    alert( i-- );
} // 3 2 1

// 2
let i = 0;
while (++i < 5) alert( i ); //1 .. 4
let i = 0;
while (i++ < 5) alert( i ); //1 .. 5

// 3
let n = 10;
nextPrime:
    for (let i = 2; i <= n; i++) {
        for (let j = 2; j < Math.sqrt(i); j++) {
            if (i % j == 0) continue nextPrime;
        }
        alert(i); // простое число
    }