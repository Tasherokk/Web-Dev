// 1
let newStr = str[0].toUpperCase() + str.slice(1);

// 2
function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + '…' : str;
}

// 3
function extractCurrencyValue(str) {
    return +str.slice(1);
}