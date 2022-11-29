const arr = ['межидов', 'fvbhjd', 'aasdasd', 'asdasfdesrg', 'fgfg']

let sum = 0


for (i = 0; i < arr.length; i++)
    if (arr[i].charAt(0) === 'a')
        sum += arr[i]
console.log(sum);