// recursion
// Рекурсия это когда функция вызывает саму себя
const log = console.log;

// 💎----------Возведение в натуральную степень----------💎

const pow = (x, n) => {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

log(pow(2, 3)); // 8 

const pow1 = (x, n) => {
  if (n === 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
  
}

log(pow1(2, 3)); // 8 

// 💎-------------Сумма чисел--------------💎

const sum = (n) => {
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    sum += i;
  }

  return sum; // 15
}

log(sum(5)); // 1 + 2 + 3 + 4 + 5 = 15

const sum1 = (n) => {
  if (n === 1) return 1;
  return n + sum(n - 1);
}

log(sum1(5)); // 1 + 2 + 3 + 4 + 5 = 15

const sum3 = (n) => {
  return n * (n + 1) / 2;
}

log(sum3(5)); // 1 + 2 + 3 + 4 + 5 = 15

/* 
Факториал — это произведение всех натуральных чисел от 1
до данного числа. Например, факториал числа 5 будет равен
1 × 2 × 3 × 4 × 5 = 120 
*/

const factorial = (n) => {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

log(factorial(5)) // 120