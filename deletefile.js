var fs=require('fs');

fs.unlink('textfile2.txt',function(err){
    if (err) throw err;
    console.log('File Deleted!');
});