const arr = ['JS','JavaScript','paython','C++','C','Kotlin','','h','l','m ']

let sum = []

for (i = 0; i < arr.length; i++)
    if (arr[i].length > 3)
        sum += arr[i]
console.log(sum);