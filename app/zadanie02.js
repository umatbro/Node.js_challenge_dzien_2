let fs = require('fs');

let dataDir = `${__dirname}/data/zadanie02`;
fs.readdir(dataDir, (err, listOfFiles) => {
   if (err) console.log(`Error reading ${dataDir}`, err);
   else {
       for (let file of listOfFiles) {
           // read file and print its contents
           fs.readFile(`${dataDir}/${file}`, 'utf-8', (err, content) => {
               console.log(`===== ${file} =====`);
               if (err) console.log(`Error reading file ${file}`, err);
               else {
                   console.log(content);
               }
               console.log(`------------------`)
           });
       }
   }
});