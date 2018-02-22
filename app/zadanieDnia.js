let fs = require('fs');
let path = require('path');

let filePath = process.argv[2];

if (filePath === undefined) {
    console.log(`No file path provided. Exiting.`);
    process.exit(1);
}

let file = path.parse(filePath);

fs.readFile(filePath, 'utf-8', (err, data) => {
   if (err) console.log(`Error reading ${filePath}: ${err}`);
   else {
       // change odd letters to uppercase
       let mappedStr = data.split('').map((letter, index) => {  // split string into array and map odd indices to uppercase
           return index % 2 ? letter.toLowerCase() : letter.toUpperCase();
       }).reduce((s, letter) => s + letter); // then fold array of characters back to full string

       // write backup file
       let backupDir = `${file.dir}/${file.name}~${file.ext}`; // add `~` to backup file name
       fs.writeFile(backupDir, data, err => {
           if (err) console.log(err);
           else console.log(`Saved backup file: ${backupDir}`);
       });

       // overwrite old file
       fs.writeFile(filePath, mappedStr, err => {
           if (err) console.log(err);
           else {
               console.log(`File modified successfully.`);
           }
       });
   }
});