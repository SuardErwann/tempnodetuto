const names = require ("./4-names");
const func = require ("./5-utils");
const data = require("./6-alternative-syntax");
console.log(names);
const {erw,flo} = names;  // Destructuration
func(names.erwann);
func(flo);

console.log(data);