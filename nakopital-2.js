const arr = [-5, 3, 2, 5, 6];

function arraySum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++)
        if (arr[i] > 0)
            sum += array[i];
    console.log(sum);
}
arraySum(arr);