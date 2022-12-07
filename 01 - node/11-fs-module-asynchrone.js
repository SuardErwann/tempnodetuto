const {readFile, writeFile} = require('fs');

console.log("start");
readFile('./content/first.txt', 'utf-8', (error, result) => {
    if(error){
        console.log(error);
        return;
    };
    const first = result;
    readFile('./content/first.txt', 'utf-8', (error, result) => {
        if(error){
            console.log(error);
            return;
        };
        const second = result;
        writeFile(
            "./content/SUPERLAST.txt",
            `This is NOT "${first}" NOR "${second}", this is THE SUUUUUPERLAST FILE !!!`,
            (err, res) => {
                if(err) {
                    console.log(err);
                    return;
                }
                console.log("done with this task");
            })
    })
});
console.log("Starting the next one");


