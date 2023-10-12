const { options } = require('yargs');

const argv = require( 'yargs' )
    .options('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Let you select what table are you getting.'
    })
    .options('l', {
        alias: 'list',
        type: 'boolean',
        demandOption: false,
        default:false,
        describe: 'Show you the tables that are in the file.'
    })
    .options('n',{
        alias: 'number',
        type: 'number',
        default:10,
        describe: 'The last number to be multiplied, the default is 10.'
    })
.check( ( argv, options ) =>{
    if( isNaN(argv.b )){
        throw 'The base must be a number.'
    }
    return true
})
    .argv;

module.exports = argv;