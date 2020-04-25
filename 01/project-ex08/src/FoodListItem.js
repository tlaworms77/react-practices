import React from 'react'

export default class FoodListItem extends React.Component {
    render() {
        return (
            <li>{ this.props.name } : { this.props.quantity }</li>
        );        
    }
}