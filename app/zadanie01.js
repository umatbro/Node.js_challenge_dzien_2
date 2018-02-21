const fs = require('fs');

fs.readFile(`${__dirname}/data/zadanie01/input.json`, 'utf-8', (err, data) => {
   if (err) console.log(`Error reading the file: ${err}`);
   else {
       let numbers = JSON.parse(data);
       let sum = numbers.reduce((acc, num) => acc + num);

       // save sum to file
       fs.writeFile(`${__dirname}/data/zadanie01/sum.txt`, sum, err => {
           if (err) console.log(`Error saving data to file: ${err}`);
           else {
               console.log(`Successfully saved sum to file (sum = ${sum})`);
           }
       })
   }
});