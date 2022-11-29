const arr = ['appapa', ' JAVA', 'SCRIPT', 'C++', 'JS']

function arraySum(are) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
        if (arr[i].length > 3)
            sum += arr[i]
    console.log(sum);
}
arraySum(arr)