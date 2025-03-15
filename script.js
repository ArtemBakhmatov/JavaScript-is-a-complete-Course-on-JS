console.log('Внешний файл подключен!');

console.group('Группа логов');
console.log('1');
console.log('2');
console.log('3');
console.groupEnd();

console.error('Это ошибка');
console.warn('Это предупреждение');

console.table({ name: 'Artem Bakhmatov', age: 37 });

const styles = 'background-color: lightseagreen; color: black; padding: 20px';
console.log('%cStart coding, now!', styles);