// >5 <15 $320 // 0
// >15 <30 $450 // 3
// >30 <45 $600 // 5
// >45 $1000 // 10
// var name => camel case (capital letter between)

const speedLimit = 80
let highCars = [80, 120, 123, 41, 124, 64, 133, 6]

// requirements:
// speed check function => check the speed of each car passes through
// condition => if the speed is below limit => do nothing
// condition => if speed exceeds < 15 => "#8 => Panalty: $320; Points deducted: 0"

const checkSpeed = (x, s) => {
    for (let i = 0; i < highCars.length; i++) {
        let exceed = x[i] - s
        if (exceed > 5 && exceed <= 15) {
          console.log(`#${i + 1} => Penalty: $320; Points deducted: 0`);
        } else if (exceed > 15 && exceed <= 30) {
          console.log(`#${i + 1} => Penalty: $450; Points deducted: 3`);
        } else if (exceed > 30 && exceed <= 45) {
          console.log(`#${i + 1} => Penalty: $600; Points deducted: 5`);
        } else if (exceed > 45) {
          console.log(`#${i + 1} => Penalty: $1000; Points deducted: 10`);
        }
    }
}

checkSpeed(highCars, speedLimit)
