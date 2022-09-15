var fs=require('fs');

fs.writeFile('textfile1.txt',"Writing content",function(err){
    if (err) throw err;
    console.log("Saved");
});