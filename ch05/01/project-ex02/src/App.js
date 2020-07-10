import React from 'react';
import {Link} from 'react-router-dom';

import './App.css';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <header>App</header>
                <menu>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/repos">Repos</Link></li>
                    </ul>
                </menu>
                { this.props.children }
            </div>
        );        
    }
}