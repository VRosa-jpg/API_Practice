
// to log time
// console.time("myFunction");
// // Your code block
// console.timeEnd("myFunction");

// function walkDog(callback) {
//     setTimeout(() => {
//         console.log("You walked the dog");
//         callback()
//     }, 1500);

//     return new Promise((resolve, reject) => {
         
//     })
// }

// walkDog(() => {
//     cleanKitchen(() => {
//         trashOut(() => console.log("You finished all the chores"))
//     })
// })

// const add = () => { return 2 +3 }
// The outer parentheses () make it clear to JavaScript that you're defining an expression.
// The () at the end calls the function right after defining it.
// console.log((() => { return 2 + 3;})())


// Bro Code -  What are promises
// A Promise is an object that manages asynchronous functions
// Wrap a promise object around {asynchronous code}

// Async/Await => Async = makes a function return a promise
            //   Await = makes an async function wait for a promise
// Await depends on async
// function walkDog() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const dogwalked = true;

//             if(dogwalked){
//                 resolve("You walked the dog");
//             } else {
//                 reject("You did not walk the dog")
//             }
//         }, 1500);
//     })
// }

// function cleanKitchen() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const kitchenCleaned = true;

//             if(kitchenCleaned) {
//                 resolve("You cleaned the kitchen");
//             } else {
//                 reject("You did not clean the kitchen")
//             }
        
//         }, 1500);
//     })
// }

// function trashOut() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const tookTheTrashOut = false;

//             if(tookTheTrashOut) {
//                 resolve("You took the trash out");
//             } else {
//                 reject("You did not take out the trash")
//             }
//         }, 1500);
//     })
// }

// // // Method chaining - not necessary in this example
// // walkDog().then(value => {console.log(value); return cleanKitchen()})
// //          .then(value => {console.log(value); return trashOut()})
// //          .then(value => {console.log(value); console.log("You finished the chores!")})
// //          .catch(error => console.error(error));


// async function doChores() {

//     try {

//         const walkDogResult = await walkDog()
//         console.log(walkDogResult);

//         const cleanKitchenResult = await cleanKitchen()
//         console.log(cleanKitchenResult);

//         const trashOutResult = await trashOut()
//         console.log(trashOutResult);

//         } catch(error) {

//             console.error(error)

//         }
//     }

// doChores()

// https://pokeapi.co/api/v2/pokemon/pikachu
// Even if we cant find a resource our promise will not reject because fetch was designed
// to handle network request so if it reaches the server it is technically resolved

// Part 1: Looking for a repsonse oject, the data from the json file

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     // .then(repsonse => console.log(response)) - to get the data from pikachu file
//     .then(response => response.json())
//     // .json is promised base so you add a then statement to grab data from json method here
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

// Part 2 - using fetch
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     // .then(repsonse => console.log(response)) - to get the data from pikachu file
//     .then(response => {
//         if(!response.ok) {
//             throw new Error("Could not fecth resource")
//         }
//         return response.json()
//     })
//     // .json is promised base so you add a then statement to grab data from json method here
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

const getDataButton = document.querySelector("#fetch-pokemon-button")
const pokemonInput = document.querySelector("#pokemon-name")

getDataButton.addEventListener( 'click', fetchData)

// Part 2 using async/await
async function fetchData() {
    const pokemonName = pokemonInput.value.toLowerCase()
    console.log(pokemonName)
    
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        console.log( response )

        if(!response.ok) {
            throw new Error("Could not fetch resource")
        }

        const data = await response.json()
        // const pokemonSprite = data.sprite.front_default
        // const pokemonSprite =  JSON.stringify(data)
        // const imgElement = document.querySelector("#pokemonSprite");
        // imgElement.src = pokemonSprite
        // imgElement.computedStyleMap.display = "block";
        // console.log(pokemonSprite)
        

    } catch(error) {
        console.error(error)
    }
}

// fetchData()