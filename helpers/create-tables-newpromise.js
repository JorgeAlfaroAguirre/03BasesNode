const fs = require('fs');

const createFileNewPromise = (base = 5) => {

    return new Promise((resolve, reject)=>{
        
        const tableTitle = `\nTable of ${base}\n\n`;
    
        console.log('====================');
        console.log(tableTitle);
        console.log('====================');
    
        let output = tableTitle;
    
        for (let i = 1; i <= 10; i++) {
            output += `${ base } X ${ i } = ${ base * i}\n`;
        }
    
        console.log(output);
    
        const fileName = `table-${base}.txt`;
    
        fs.writeFileSync( fileName, output );
    
        resolve( fileName );

    })
}


module.exports ={
    createFileNewPromise
}