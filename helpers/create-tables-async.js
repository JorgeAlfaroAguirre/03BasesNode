const fs = require('fs');
const colors = require( 'colors' );

const createFileAsync = async(base = 3, list=false, n=10) => {

    try {

        const tableTitle = `\nTable of ${base}\n`;

        let output = tableTitle;
    
        for (let i = 1; i <= n; i++) {
            output += `${ base } X ${ i } = ${ base * i}\n`;
        }
    
        const fileName = `table-${base}.txt`;
    
        fs.writeFileSync( "./output/"+fileName, output );
        
        const message = (tableTitle)=>{
            console.log('===================='.red);
            console.log(tableTitle);
            console.log(colors.cyan('===================='));
            console.log(output);
                
        }

        if(list==true){
            message(tableTitle);
        }

        return fileName.rainbow;
        
    } catch (err) {
        throw err;
    }


}

module.exports ={
    createFileAsync
}