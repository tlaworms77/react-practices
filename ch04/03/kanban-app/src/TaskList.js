import React from 'react';
import PropTypes from 'prop-types';

export default class TaskList extends React.Component {
    render(){
        let tasks = [];
        this.props.tasks.forEach(e => {
            tasks.push(<li className='TaskList__Task'>
                <input type='checkbox' defaultChecked={ true } /> { e.name }
                <a href='#' className='TaskList__Task--remove' />
            </li>);
        });

        return (
            <div className='TaskList'>
                <ul>
                    { tasks }
                </ul>
                <input type='text' className='TaskList--add-task' placeholder='태스크 추가' />
            </div>
        );        
    }
}

TaskList.proptype = {
    tasks: PropTypes.arrayOf(PropTypes.object)
}