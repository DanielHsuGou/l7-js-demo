
//key-value pair

// CRUD - object
// Create
// Read
// Update
// Delete

// dog => object // falsy // any properties, can include another object
const joeyDog = {
  name: "Wong Choi",
  gender: "F",
  age: 6,
  color: 'brown',
  favoriteSnack: ["bread", "tomato", "chocolate"],
  likeSwim: true,
  kid: {
        name: 'Doggy',
        gender: 'M',
        age: 1
    },
  bark: function () {   // function bark() => method
      console.log('Wow')
  }
}


console.log(joeyDog.name) // output "Wong Choi"
console.log(joeyDog['name'])  // output "Wong Choi"
console.log(joeyDog.kid.name) // output "Doggy"
delete joeyDog.name // delete object
console.log(joeyDog.name); // output undefined
joeyDog.bark()


