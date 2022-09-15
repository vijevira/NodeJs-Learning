var fs=require('fs');

fs.rename('textfile1.txt','mytextfile1.txt',function(err){
    if (err) throw err;
    console.log("File Renamed!");

});