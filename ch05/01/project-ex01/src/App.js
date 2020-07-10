import React from 'react';
import { About } from './About';
import { Repos } from './Repos';
import { Home } from './Home';
import './App.css';

export default class App extends React.Component {
    constructor(){
        super(...arguments);
        this.state = {
            route: window.location.hash.substr(1)
        };
    }
    componentDidMount() {
        window.addEventListener('hashchange', () => {
            this.setState({
                route: window.location.hash.substr(1)
            })
        })
    }

    render() {
        let Child;
        switch(this.state.route) {
            case '/about':
                Child = About;
                break;
            case '/repos':
                Child = Repos;
                break;
            default:
                Child = Home;
                break;
        }

        return (
            <div>
                <header>App</header>
                <menu>
                    <ul>
                        <li><a href="#/about">About</a></li>
                        <li><a href="#/repos">Repos</a></li>
                    </ul>
                </menu>
                <Child />
            </div>
        );        
    }
}