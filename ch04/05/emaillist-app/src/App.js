import React from 'react';
import EmaillistApp from './EmaillistApp'; 
import data from './data.json';

export default class App extends React.Component {
    constructor() {
        super(...arguments);
        console.log('App::constructor()');
    }

    componentWillMount() {
        console.log('App::componentWillMount()');
    }

    render() {
        console.log('App::render()');
        return <EmaillistApp emails={ data } />
    }

    componentDidMount() {
        console.log('App::componentDidMount()');
    }

    componentWillUnmount() {
        console.log('App::componentWillUnmount()');
    }
}