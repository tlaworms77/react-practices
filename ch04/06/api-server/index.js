import * as path from 'path'; 
import express from 'express';
import cors from 'cors';

const PORT = 9090;

express()
  .use(cors())
  .use('/', express.static(path.resolve('.', 'public')))
  .get('/kanban', (req, resp) => {
    return resp
            .sendStatus(200)
            .json({
              result: 'ok'
            });
  })
  .post('/kanban', (req, resp) => {
    return resp
            .sendStatus(200)
            .json({
              result: 'ok'
            });
  })
  .delete('/kanban/:id', (req, resp) => {
    return resp
            .sendStatus(200)
            .json({
              result: 'ok'
            });
  })
  .listen(PORT, () => console.log('starts API server on port ' + PORT));