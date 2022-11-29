const arr = ['MAGa', 'aNG', 'yoda', 'PDPPD']

function arraySum(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++)
        if (arr[i].charAt(0) === 'a' || arr[i].charAt(0) === 'y')
            sum += arr[i]
    console.log(sum);
}
arraySum(arr);