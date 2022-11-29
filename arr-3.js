let num1 = [10, -12, 231, 1, -32, -0.001, 75];
let novi = [];

function getPositiveArr(array) {
    for (i = 0; i < array.lenght; i++) {
        if (array[i] > 0) {
            novi.push(array[i])
        }
    }
}
getPositiveArr(num1);
console.log(novi);
novi = [];

