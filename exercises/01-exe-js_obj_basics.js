const ironhacker = {
    firstName: 'Tio',
    age: 39,
    favoriteLanguage: 'JavaScript',
    isSatisfied: true,
    worksAt: 'Google',
    isRemote: false
}

// 1: update favoriteLanguage to 'React' 
ironhacker.favoriteLanguage = `React`

// 2: Update ironhacker's age to 29

ironhacker.age = 29

// 3: Remove the 'isRemote' property

delete ironhacker.isRemote

// 4: Add a new property: 'didGraduate' and set it to a valid boolean value

ironhacker.didGraduate = true

console.log("Ironhack",ironhacker)

// 5: list all keys of the ironhacker object
for (key in ironhacker){
    console.log(key)
}

// 6: check if ironhacker has property 'works at'

console.log(ironhacker["worksAt"] , ironhacker.hasOwnProperty("worksAt"), !!ironhacker.worksAt)
