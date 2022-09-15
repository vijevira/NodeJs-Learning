var fs=require('fs');

fs.open('textfile2.txt','w',function(err){
    if (err) throw err;
    console.log('Saved!');
});