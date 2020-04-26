import React from 'react';
import TaskList from './TaskList';


[
    ['01', 'A'],
    ['02', 'B']
].map(({ 0:index, 1:title }) => {
    return <h3>Chapter { index } : { title }</h3>;       
});


export default class CardList extends React.Component {
    state = {
    }

    render() {

        return (
            <div className='Card'>
                <div className='Card__Title'>{ this.props.title }</div>
                <div className='Card__Details'>
                    { this.props.description }
                    <TaskList tasks={ this.props.tasks }/>
                </div>
            </div>
        );        
    }

}


const Chapter = ({ index, title }) => {
     return <h3>Chapter { index } : { title }</h3>;       
}