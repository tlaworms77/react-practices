import React from 'react';
import PropTypes from 'prop-types';

export default class Greeter extends React.Component {
    render() {
        return (
            <h1>Hello { this.props.name }</h1>
        );        
    }
}

// Greeter.propTypes = {
//     name: PropTypes.string
// }

Greeter.propTypes = {
    name: PropTypes.string.isRequired
}

// default value
Greeter.defaultProps = {
    name: '둘리의 친구'
}

