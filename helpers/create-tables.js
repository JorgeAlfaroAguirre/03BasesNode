const fs = require('fs');

const createFile = (base = 5, list = false) => {
    
    const tableTitle = `\nTable of ${base}\n`;
    
    const message = (tableTitle)=>{
        console.log('====================');
        console.log(tableTitle);
        console.log('====================');
    }

    if(list == true){
        message(tableTitle);
    }


    let output = tableTitle;

    for (let i = 1; i <= 10; i++) {
        output += `${ base } X ${ i } = ${ base * i}\n`;
    }

    console.log(output);

    const fileName = `table-${base}.txt`;

    fs.writeFileSync( fileName, output );

    console.log( fileName );
}

module.exports ={
    createFile
}