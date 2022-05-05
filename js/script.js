console.log("script file wired up and ready to roll!!!")

// 1. allNames:
// Use .forEach to print all persons names in the console.
// data.forEach(allNames => console.log(`${allNames.name}`))

// 2. totalAgeAllPersons:
// Find the total combined age of all persons.
// const totalAgeAllPersons = data.reduce((totalAge, ages) => {
//         return totalAge + ages.age
//     }, 0)
    
//     console.log(totalAgeAllPersons)


// 3. totalAgeAllPets:
// Find the total combined age of all pets.


// const totalAgeAllPets = data.reduce((totalAgePets,agePets) => {
//     for (i = 0; i < agePets.pets.length; i++)
//         totalAgePets += agePets.pets[i].age
//         return totalAgePets
// }, 0)

// console.log(totalAgeAllPets)

// 4. oldEnough:
// Use .filter() to create an array of people old enough to be president.

// const filteredAges = data.filter(num => {
//     return num.age > 50
// })
// console.log(filteredAges)

// 5. sadPeople:
// Use .filter() to create an array of "sad" people (people with no pets).

// const filtered = data.filter(no => no.pets == "")
// console.log(filtered)


// 6. warAndPeace:
// Use.map() to create an array called warAndPeace that has, in each index the string "war" or "peace"
//   * the string "war" if the person at that has BOTH a cat AND a dog.
//   * the string "peace" otherwise.0

// function war(data) {
//     let both = data.war(yes => yes.cat & yes.dog =="yes")
//     return both
//   }
  
//   const war = data.map(both)

// 7. justSpock:
// Create an array of all the pet objects where the pets named is "spock".


// HUNGRY FOR MORE???

// 8. catYears:
// Find the total combined age of all cats (type: "cat").


// 9. combinedAgeOfAllPetsOfDrinkers:
// Find the combined age of all pets belonging to people old enough to legally purchase alcohol


// 10. youngestPets:
// Create an array containing the youngest pet each pet owner has.
// Here's the answer: 
/*
[ { type: 'rock', name: 'herbert', age: 126003219 },
  { type: 'cat', name: 'colby', age: 1 },
  { type: 'guinea pig', name: 'kirk', age: 1 },
  { type: 'dog', name: 'midnight', age: 3 },
  { type: 'dog', name: 'quinn', age: 8 },
  { type: 'dog', name: 'hazel', age: 7 },
  { type: 'monstera', name: 'holey', age: 1 },
  { type: 'goldfish', name: 'betsy', age: 4 },
  { type: 'cat', name: 'rosie', age: 0.005 },
  { type: 'dog', name: 'nacho', age: 1 },
  { type: 'bearded dragon', name: 'ferg', age: 3 },
  { type: 'cockatoo', name: 'spockatoo', age: 33 },
  { type: 'cat', name: 'mija', age: 6 },
  { type: 'cat', name: 'caesar', age: 3 },
  { type: 'cat', name: 'eddie', age: 7 },
  { type: 'cat', name: 'rocky', age: 5 },
  { type: 'snake', name: 'reginald', age: 12 } ]
*/


// 11. petNameString:
// Create a string that is all the pets names separated by spaces (order doesn't matter).
