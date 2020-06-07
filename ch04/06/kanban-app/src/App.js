import React, { Component } from 'react';
import KanbanBoard from './KanbanBoard';

export default class App extends Component {
    render() {
        return (
            <div className='App'>
                <KanbanBoard />
            </div>
        );        
    }
}