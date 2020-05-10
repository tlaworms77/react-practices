import * as path from 'path'; 
import express from 'express';
import cors from 'cors';

var app = express();

app.use(cors());
app.use('/', express.static(path.resolve('.', 'public')));
app.listen(9090, function() {      
  console.log('starts seb server on port 8080');
})