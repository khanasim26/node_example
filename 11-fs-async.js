const {readFile,writeFile } = require('fs');
console.log(`start`);
readFile('./content/first.txt',(err,result) => {
    if(err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt',(err,result) =>{
        if(err){
            console.log(err)
            return
        }
        const second = result;

        writeFile('./content/read-async.txt',`Here are the results ${first} , ${second}`,(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log('Writing Done')
        })
    })
   
})

console.log(`start with another task`);