let message = "wHat Did yoU Eat? foR BreakFast? hey i. abcd";
let result = "";

const changeCase = (x) => {
  result += x[0].toUpperCase();
  for (let i = 1; i < x.length; i++) {
    if (x[i - 2] === "?" || x[i - 2] === "!" || x[i - 2] === ".") {
      result += x[i].toUpperCase();
    } else {
      result += x[i].toLowerCase();
    }
  }
};

changeCase(message);
console.log(result);
