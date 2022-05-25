const fs = require('fs');
const path = require('path');

// const filePath = path.resolve(__dirname, 'test123.txt');

// fs.readFile(filePath, (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// const stream = fs.createReadStream(filePath);
// stream.on('data', chunk => {
//     console.log(chunk);
// })
// stream.on('open', fd => console.log('Начали читать fd ' + fd));
// stream.on('end', () => console.log('Закончили читать'));
// stream.on('error', err => console.log(err));

// const filePath = path.resolve(__dirname, 'msg.txt');
// const stream = fs.createWriteStream(filePath);
// for (let i = 0; i < 20; i++) {
//     stream.write(i + '\n');    
// }
// stream.end();

const http = require('http');
const fs = require('fd');
const path = require('path');

http.createServer((req, res) => {
    const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'));

    stream.pipe(res);
});
