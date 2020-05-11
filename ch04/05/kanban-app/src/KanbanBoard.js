import React from 'react';
import update from 'react-addons-update';
import PropTypes from 'prop-types';
import CardList from './CardList';

import styles from './KanbanBoard.css';

const API_URL = 'http://localhost:9090/kanban';
const API_HEADERS = {
    'Content-Type': 'application/json'
}
export default class KanbanBoard extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            cards: null
        }
    }
    
    callbackDeleteTask(){
    }

    callbackAddTask(cardId, taskName){
        // console.log(cardId + ":" + taskName);
        const cardIndex = this.state.cards.findIndex( card => card.id == cardId );
        console.log(cardIndex);

        let newTask = {
            id: null,
            name: taskName,
            done: false
        };

        fetch(`${API_URL}/cards/${cardId}/tasks`, {
            method: 'post', 
            headers: API_HEADERS,
            body: JSON.stringify(newTask)
        })
        .then((response) => response.json())
        .then((responseJson) => {
            // console.log(responseJson);
            let newCards = update(this.state.cards, {
                [cardIndex] : {
                    tasks: { 
                        $push: [responseJson.data]
                    }
                }
            });

            this.setState({
                cards: newCards
            });
        })
        .catch((error) => {
            console.error('Error: fetch and parsing data', error);
        });                
        





        
    }

    render() {
        return (
            <div className={ styles.KanbanBoard }>
                <CardList
                    key = 'todo'
                    cards = { this.state.cards && this.state.cards.filter( e => e.status === 'todo') }
                    title='To Do' 
                    taskCallbacks = { {
                        delete: this.callbackDeleteTask.bind(this),
                        add: this.callbackAddTask.bind(this)
                    } } />
                
                <CardList
                    key = 'in-Progress'
                    cards = { this.state.cards && this.state.cards.filter( e => e.status === 'in-progress') } 
                    title='In Progress'
                    taskCallbacks = { {
                        delete: this.callbackDeleteTask.bind(this),
                        add: this.callbackAddTask.bind(this)
                    } } />

                <CardList
                    key = 'done'
                    cards = { this.state.cards && this.state.cards.filter( e => e.status === 'done') }
                    title = 'Done'
                    taskCallbacks = { {
                        delete: this.callbackDeleteTask.bind(this),
                        add: this.callbackAddTask.bind(this)
                    } } />
            </div>
        );        
    }

    componentDidMount() {
        fetch(`${API_URL}/cards`, {
            headers: API_HEADERS
        })
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                cards: data
            });
        })
        .catch((error) => {
            console.error('Error: fetch and parsing data', error);
        });
    }    
}

KanbanBoard.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object)
}