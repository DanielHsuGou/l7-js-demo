let numArr = []
while (numArr.length < 6) {
    let num = Math.floor(Math.random() * 49) + 1
    if (numArr.indexOf(num) < 0) {
       numArr.push(num) 
    }
}
console.log(numArr)