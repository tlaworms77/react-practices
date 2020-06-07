import * as path from 'path';
import fs from 'fs'; 
import express from 'express';
import cors from 'cors';

const PORT = 9090;

express()
    .use(cors())
    .use('/', express.static(path.resolve('.', 'public')))
    .use(express.json())
    .get('/kanban/cards', (req, resp) => resp.status(200).json(JSON.parse(fs.readFileSync(path.resolve('.', 'json', 'kanban', 'data.json')).toString())))
    .get('/emaillist', (req, resp) => resp.status(200).json(JSON.parse(fs.readFileSync(path.resolve('.', 'json', 'emaillist', 'data.json')).toString())))
    .post('/kanban/cards/:cardId/tasks', (req, resp) => {
        let task = req.body;

        console.log(`cardId: ${ req.params['cardId'] }에 task name: ${ task.name } 추가`);

        task.id = Date.now();

        resp
            .status(200)
            .json({
                result: 'success',
                message: null,
                data: task
            });
    })
    .listen(PORT, () => console.log('starts API server on port ' + PORT));