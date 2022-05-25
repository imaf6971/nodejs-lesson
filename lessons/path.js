const path = require('path');

console.log('Склеить участки пути', path.join(__dirname, '..', '..'));
const fullPath = path.resolve('first.css');
console.log('Парсинг пути', path.parse(fullPath));

const url = new URL('http://localhost:8080/users?id=4321');
console.log(url);