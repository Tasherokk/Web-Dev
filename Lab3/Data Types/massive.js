// 1
let fruits = ["Яблоки", "Груша", "Апельсин"];
let shoppingCart = fruits;
shoppingCart.push("Банан");
alert( fruits.length ); // 4

// 2
let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
alert( styles.shift() );
styles.unshift("Рэп", "Регги");

// 3
let arr = ["a", "b"];
arr.push(function() {
    alert( this );
})
arr[2](); // a,b,function(){...}

// 4
function sumInput() {
    let numbers = [];
    while (true) {
        let value = prompt("Введите число", 0);
        if (value === "" || value === null || !isFinite(value)) break;
        numbers.push(+value);
    }
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}
alert( sumInput() );

// 5
function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
    for (let item of arr) {
        partialSum += item;
        maxSum = Math.max(maxSum, partialSum);
        if (partialSum < 0) partialSum = 0;
    }
    return maxSum;
}
alert( getMaxSubSum([-1, 2, 3, -9]) );
alert( getMaxSubSum([-1, 2, 3, -9, 11]) );
alert( getMaxSubSum([-2, -1, 1, 2]) );
alert( getMaxSubSum([100, -9, 2, -3, 5]) );
alert( getMaxSubSum([1, 2, 3]) );
alert( getMaxSubSum([-1, -2, -3]) ); 