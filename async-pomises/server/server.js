const http = require('http');
const { flipCoinAndFetchAdvice } = require('../callback');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    flipCoinAndFetchAdvice();

    res.end('Coin flip initiated, check console for result!');
}).listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});