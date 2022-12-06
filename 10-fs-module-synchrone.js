// const fs = require ("fs");
const {readFileSync, writeFileSync} = require("fs");

console.log("start");
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');


// Ecrit sur le file
writeFileSync(
    './content/last.txt', 
    `This is NOT "${first}" NOR "${second}", this is THE LAST FILE !!!`
    );

// Append le file
writeFileSync(
    './content/last.txt',
    ` (Rajouté)`,
    {flag: 'a'}, 
);
console.log("Done with this task");
console.log("Starting the next one");