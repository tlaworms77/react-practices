import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './TaskList.css'

export default class TaskList extends Component {
    onInputKeyPress(event){
        if(event.key === 'Enter') {
            this.props.taskCallbacks.add(this.props.cardId, event.target.value);
            event.target.value = '';
        }
    }
    render(){
        return (
            <div>
                <ul>
                { this.props.tasks.map(e => <li key = { e.id }
                                                className={ styles['TaskList__Task'] }>
                        <input type='checkbox' defaultChecked={ true } /> { e.name }
                        <a href='#' className={ styles['TaskList__Task--remove'] } />
                    </li>) }
                </ul>
                <input 
                    type='text'
                    className = { styles['TaskList--add-task'] }
                    placeholder = '태스크 추가'
                    onKeyPress = { this.onInputKeyPress.bind(this) } />
            </div>
        );        
    }
}

TaskList.proptype = {
    tasks: PropTypes.arrayOf(PropTypes.object)
}