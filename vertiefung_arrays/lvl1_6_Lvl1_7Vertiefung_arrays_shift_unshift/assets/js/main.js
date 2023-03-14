let person = ["Lana", '25', 'Hmü']
let friends = ['friend1', 'firend2', 'friend3']
let favoriteFood = ['Lasagne', 'Aubergine', 'Kartoffeln']

console.log(person);
let firstValue = person.shift()
console.log(person)

console.log(friends);
let secondValue = friends.shift()
console.log(friends);

console.log(favoriteFood);
let thirdValue = favoriteFood.shift()
console.log(favoriteFood);

friends.unshift("NewFriend")
console.log(friends)

favoriteFood.unshift("Tomate", "Gurken")
console.log(favoriteFood)