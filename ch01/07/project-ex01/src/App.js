import React from 'react';
import FoodList from './FoodList';

export default class App extends React.Component {
    render() {
        const message = 'Hello World';
        return (
            <FoodList />
        );        
    }
}