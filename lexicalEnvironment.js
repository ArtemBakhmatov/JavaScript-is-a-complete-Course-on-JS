// Lexical environment - Лексическое окружение
// «Лексическое окружение» – это объект // невидимый объект для нас

const greeting = 'Hello!';

const sayHello = (name) => {
  console.log(`${ greeting }, ${ name }`);
}

sayHello('my friends!'); // Hello!, my friends!
