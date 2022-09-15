var fs=require('fs');

fs.appendFile('textfile1.txt',"\nAppend Line",function(err){
    if (err) throw err;
    console.log("Saved!");
});