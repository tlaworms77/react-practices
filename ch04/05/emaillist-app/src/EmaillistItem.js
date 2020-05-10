import React from 'react';
import PropTypes from 'prop-types';

export default class EmaillistItem extends React.Component {
    render() {
        return (
            <li>
                { this.props.fullName }
                <br/>
                { this.props.email }
            </li> 
        )
    }
}

EmaillistItem.propTypes = {
    fullName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
}