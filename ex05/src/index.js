var myPetsArray = [
    { 
        myPets: "type", 
        animalType: [
            "Dog",
            "Cat",
            "Bird"
        ]
},
    { 
        myPets: "name",
        name: [
            "Pujdo",
            "Maca",
            "Tweety"
        ]
    }
];
function myPetsFunction(pets) {
    pets = [...myPetsArray];
    return pets[1].name[1];
}
console.log(myPetsFunction(myPetsArray));
module.exports=myPetsFunction;
module.exports.myPets=myPetsArray;