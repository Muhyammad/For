const arr = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6];


// четное 
for (i = 0; i < arr.length; i++)
    if (arr[i] % 2 === 0)
        console.log(arr[i]);


//нечетное
for (i = 0; i < arr.length; i++)
    if (arr[i] % 2 === 1)
        console.log(arr[i]);