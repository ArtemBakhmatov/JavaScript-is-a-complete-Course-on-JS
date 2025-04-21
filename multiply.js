// debugger;
// в дебаге можно увидеть что функция multiplyBy уже готова к использованию,
// в то время как double и triple еще <value unavailable>

// const channel = "Youtube";


function multiplyBy (factor) {
  return (number) => {
    return number * factor;
  }
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15