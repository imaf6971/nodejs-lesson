// const fs = require('fs');
// const path = require('path');
// const process = require('process');

// console.log('start');

// fs.mkdir(path.resolve(__dirname, 'dir'), (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('done');
// });
// console.log('end');

// fs.rmdir(path.resolve(__dirname, 'dir'), err => {
//     if (err) {
//         throw err;
//     }
// })

// fs.writeFile(path.resolve(__dirname, 'test.txt'), 'asldjkk', err => {
//     if (err) throw err;
// });

// fs.appendFile(path.resolve(__dirname, 'test.txt'), 'asldjkk', err => {
//     if (err) throw err;
// });

// const writeFileAsync = async (path, data) => {
//     return new Promise((resolve, reject) => fs.writeFile(path, data, err => {
//         if (err) return reject(err.message);
//         resolve();
//     }));
// }
// const appendFileAsync = async (path, data) => {
//     return new Promise((resolve, reject) => fs.appendFile(path, data, err => {
//         if (err) return reject(err.message);
//         resolve();
//     }))
// }
// const readFileAsync = async path => {
//     return new Promise((resolve, reject) => fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
//         if (err) return reject(err.message);
//         resolve(data);
//     }));
// }
// const removeFileAsync = async path => {
//     return new Promise((resolve, reject) => fs.rm(path, err => {
//         if (err) return reject(err.message);
//         resolve();
//     }));
// }

// const filePath = path.resolve(__dirname, 'hello.txt');
// writeFileAsync(filePath, 'hello ')
//     .then(() => appendFileAsync(filePath, 'world!'))
//     .then(() => readFileAsync(filePath))
//     .then(val => console.log(val))
//     .catch(err => console.log(err));

// removeFileAsync(filePath)
//     .then(console.log('file removed'));

// const text = process.env.TEXT || '';
// const filePath = path.resolve(__dirname, 'text.txt');
// writeFileAsync(filePath, text)
//     .then(() => readFileAsync(filePath))
//     .then(data => data.split(' ').length)
//     .then(count => writeFileAsync(path.resolve(__dirname, 'count.txt'), `${count}`))
