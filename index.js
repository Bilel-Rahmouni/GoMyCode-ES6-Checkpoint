let pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 },
];
const getAge = (pet) => new Date().getFullYear() - pet.bornOn;
let petsWithAge = [];
pets.forEach((ele) => {
  ele.age = getAge(ele);
  petsWithAge.push(ele);
});

console.log(petsWithAge);
let dogs = pets.filter((ele) => ele.type === "dog");
let jasper = pets.find((ele) => ele.name === "Jasper");
console.log(jasper);
console.log(jasper.age);
console.log(`Jasper is ${jasper.age} years old`);
