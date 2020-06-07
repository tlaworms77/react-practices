import * as path from 'path';
import fs from 'fs'; 
import express from 'express';
import cors from 'cors';

const PORT = 9090;

express()
  .use(cors())
  .use('/', express.static(path.resolve('.', 'public')))
  .use(express.json())
  .get('/emaillist', (req, resp) => resp.status(200).json(JSON.parse(fs.readFileSync(path.resolve('.', 'json', 'emaillist', 'data.json')).toString())))
  .get('/kanban/cards', (req, resp) => resp.status(200).json(JSON.parse(fs.readFileSync(path.resolve('.', 'json', 'kanban', 'data.json')).toString())))
  .listen(PORT, () => console.log('starts API server on port ' + PORT));