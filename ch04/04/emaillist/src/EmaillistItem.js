import React from 'react';

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