var figlet = require('figlet');
let board = '';
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        (i + j) % 2 ? board += '██' : board += '░░';
    }
    board += '\n'
}
console.log(board)