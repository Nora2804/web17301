const dogs = [
    { weight: 22, curFood: 250, owners: ('Alice', 'Bob') },
    { weight: 8, curFood: 200, owners: ('Matilda') },
    { weight: 13, curFood: 275, owners: ('Saral', 'John') },
    { weight: 32, curFood: 340, owners: ('Michael') },
];
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

const dogSaral = dog.find(dog => dog.owners.includes('Saral'));
console.log(dogSaral);
console.log(
    `Saral's dog is eating too ${dogSaral.curFood > dogSaral.recFood ? 'much' : 'little'}`);

const ownersEatTooMuch = dogs
    .filter(dog => dog.curFood > recFood)
    .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
    .filter(dog => dog.curFood < recFood)
    .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

console.log(`${ownersEatTooMuch.join('and')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join('and')}'s dogs eat too little!`);

console.log(dogs.some(dog => dog.curFood === dog.recFood));
// console.log(dogs.some(dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.re))
const checkEatingokay = dog =>
    dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
dog.recFood * 1.1;

console.log(dogs.some(checkEatingokay));

console.log(dogs.filter(checkEatingokay));

const dogsCopy = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogSorted);




