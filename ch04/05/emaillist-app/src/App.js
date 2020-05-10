import React from 'react';
import EmaillistApp from './EmaillistApp'; 

export default class App extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            data: null
        }
        console.log('App::constructor()');
    }

    componentWillMount() {
        console.log('App::componentWillMount()');
    }

    render() {
        console.log('App::render()');
        return <EmaillistApp emails={ this.state.data } />
    }

    componentDidMount() {
        console.log('App::componentDidMount()');
        fetch('http://localhost:9090/data.json')
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    data: data
                });
            })
            .catch((error) => {
                console.error('Error: fetch abd parsing data', error);
            });
    }

    componentWillUnmount() {
        console.log('App::componentWillUnmount()');
    }
}