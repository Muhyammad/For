//Дан массив из объектов:

let people = [{ name: 'Bradly', age: 74 },
{ name: 'Juliya', age: 20 },
{ name: 'Walter', age: 35 },
{ name: 'Kristen', age: 12 },
{ name: 'Sam', age: 2 }];

//• Вывести в консоль все имена
for (i = 0; i < people.length; i++) {
    console.log(people[i].name)
}

//• Вывести в консоль имена всех совершеннолетних людей(от 18 лет)

for (i = 0; i < people.length; i++)
    if (people[i].age > 18)
        console.log(people[i].name)
//• Вывести в консоль имена всех пенсионеров(старше 65 лет)

for (i = 0; i < people.length; i++)
    if (people[i].age > 65)
        console.log(people[i].name)

//• Создайте функцию addPeople(), которая принимает два параметра - имя и возраст - и добавляет в массив people объект с именем и возрастом, которые были переданы в качестве параметров.Например:

function addPeople(lastname, agee) {
    people.push({ name: lastname, age: agee })
}

addPeople('Cirsten', 40); // добавит в массив объект - {name: 'Cirsten', age: 40}
addPeople('Boris', 10); // добавит в массив объект - {name: 'Boris', age: 10}