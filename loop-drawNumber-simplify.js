// set array for storing drawn number
let array = []

// create function with how many to drawn & max drawn value
const draw = (quantity, maxValue) => {

    for (let i = 0; i < quantity; i++) {

        let randomNumber = Math.floor(Math.random() * maxValue) + 1

        while (array.indexOf(randomNumber) >= 0) {    // find if randomNumber includes in array (true/false)
            randomNumber = Math.floor(Math.random() * maxValue) + 1
        }

        array.push(randomNumber);

    }

}

draw(6, 7)
let drawnNumbers = array.join(" ")
console.log(`Drawn Numbers are: ${drawnNumbers}`)

