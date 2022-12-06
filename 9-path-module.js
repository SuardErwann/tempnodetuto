const path = require('path');

console.log(path.sep);  // Separateur

// Return normalized file path
const filePath = path.join('./content', 'subfolder', 'fichier.txt');
console.log(filePath);

// Return base
const base = path.basename(filePath);
console.log(base);

// Chemin absolu
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);