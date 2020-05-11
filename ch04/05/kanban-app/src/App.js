import React from 'react';
import KanbanBoard from './KanbanBoard';

export default class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <KanbanBoard />
            </div>
        );        
    }
}