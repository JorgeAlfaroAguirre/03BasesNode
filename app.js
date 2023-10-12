const colors = require( 'colors' );

const { createFile } = require('./helpers/create-tables');
const { createFileNewPromise } = require('./helpers/create-tables-newpromise');
const { createFileAsync } = require('./helpers/create-tables-async');
const argv = require('./config/yargs')

console.clear();

console.log('Colors'.red)

// createFile(argv.b, argv.l );

// createFileNewPromise( baseNumber )
//     .then( fileName => console.log( fileName, 'Created' ) )
//     .catch( err => console.log(err))

createFileAsync( argv.b, argv.l, argv.n )
    .then( fileName => console.log( fileName, 'Created' ) )
    .catch( err => console.log(err))
