// 1
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
function sumSalaries(salaries) {
    return Object.values(salaries).reduce((a, b) => a + b, 0) // 650
}
alert( sumSalaries(salaries) );

// 2
let user = {
    name: 'John',
    age: 30
};
function count(obj) {
    return Object.keys(obj).length;
}
alert( count(user) );