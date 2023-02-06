const checkDogs = function (dogJulia, dogKate) {
    const dogJuliaCorrected = dogJulia.slice();
    dogJuliaCorrected.slice(0, 1);
    dogJuliaCorrected.slice(-2);

    const dogs = dogJuliaCorrected.concat(dogKate);
    console.log(dogs);

    dogs.forEach(function (dog, i) {
        if (dog >= 3) {
            console.log(`Dog number ${i + 1} is an adult, and is ${dog} year old `);
        } else {
            console.log(`Dog number ${i + 1} is still a puppy`);
        }

    })
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);