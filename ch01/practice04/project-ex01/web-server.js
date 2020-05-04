import * as path from 'path'; 
import express from 'express';

var app = express();

console.log(path.resolve('public'));
app.use('/', express.static(path.resolve('.', 'public')));
app.listen(8080, function() {      
  console.log('starts seb server on port 8080');
})