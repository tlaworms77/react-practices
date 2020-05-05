import React, { Fragment } from 'react';
import Greeter from './Greeter';

export default class App extends React.Component {
    render() {
        return (
            <Fragment>
                <Greeter name='둘리' />
                <Greeter />
                <Greeter name='마이콜' />
            </Fragment>
        );        
    }
}