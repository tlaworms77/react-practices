import React from 'react';
import PropTypes from 'prop-types';
import TaskList from './TaskList';

export default class Card extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            showDetails: false
        }
    }

    render() {
        let cardDetails;
        if(this.state.showDetails){
            cardDetails = (<div className='Card__Details'>
                { this.props.description }
                <TaskList tasks={ this.props.tasks }/>
            </div>);
        }

        const sideColor = {
            position: 'absolute',
            zIndex: -1,
            top: 0,
            bottom: 0,
            left: 0,
            width: 7,
            backgroundColor: this.props.color
        }

        return (
            <div className='Card'>
                <div style={ sideColor } />
                <div className='Card__Title' onClick={ () => {
                    this.setState({ 
                        showDetails: !this.state.showDetails 
                    });
                } }>{ this.props.title }</div>
                { cardDetails }
            </div>
        );        
    }
}

Card.propTypes = {
    // title: PropTypes.string.isRequired,
    title: (props, propName, componentName) => (!props[propName] || typeof props[propName] !== 'string' || props[propName].length > 50) ? new Error(`${ propName } in ${ componentName } is longer than 50 characters`) : null,
    description: PropTypes.string.isRequired,
    color: PropTypes.string,
    tasks: PropTypes.arrayOf(PropTypes.object)
}