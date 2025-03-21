// Logical assignment - логические присваивание 

// ||= присваивает значение в правой части, если значение слева false иначе значение из левой части

let a = null;

a = a || 20;
a ||= 20; // сокращенная запись 

console.log(a); // 20

// &&= присваивает значение из правой части если левое значение truthy

let b = 1;

b = b && 2;
b &&= 2;

console.log(b); // 2 

// ??= присваивает правое значение если слева null или undefined.

let c = undefined;

c = c ?? 10;
c ??= 10;

console.log(c); // 10

c = false;
c ??= 10;

console.log(c); false 

