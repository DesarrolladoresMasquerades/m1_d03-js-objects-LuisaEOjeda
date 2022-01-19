// Class code examples

const person1 = {
firstName: "Chee Kean",
weight: 231,
height: 1.7
}

const person2 = {
firstName: "Marco Santo",
weight: 231,
height: 1.7
}

// accsesing a property with the dot notation
console.log (
person1.firstName,
person1.weight
)

//accesing a property with bracket notation (indirect access or dynamic access)
console.log(person1["weight"])


const personKey = ["firstName", "weight", "height"]
for (key of personKey) {
    console.log(`person1 ${key}: `, person1[key])
}
person1.nationality = "Italian"

console.log(person1.favFood)// undifined

person1["favFood"] = "pizza"

const newKey = `favBook`
person1[newKey] = "guide to the galaxy"

console.log(person1["favFood"])

// ways to access the keys
for (key in person1) console.log(person1[key])

// Objects.keys(person1)

const array = Object.keys
for (key of Object.keys(person1)) console.log(person1[key])

console.log ("accesing a number" , person1[123456])

console.log("reading index from keys", Object.keys(person1)[1])
console.log("object length" , person1.length)

const tween1 = {
    name: "Carlos"
}

const tween2 = {
    name: "Carlos",
    age: 24
}

console.log (tween1 ===tween2,
    "Carlos" === "Carlos")
