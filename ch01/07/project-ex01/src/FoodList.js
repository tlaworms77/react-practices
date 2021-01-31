import React from 'react';
import FoodListItem from './FoodListItem';

export default class FoodList extends React.Component {
    render() {
        return (
            <ul>
                <FoodListItem quantity='1' name='Bread' />
                <FoodListItem quantity='10' name='Egg' />
                <FoodListItem quantity='20' name='Milk' />
            </ul>
        );        
    }
}