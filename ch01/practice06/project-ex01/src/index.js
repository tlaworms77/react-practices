import React from "react"
import { render } from 'react-dom';
import App from './App';

const app = React.createElement(App, null, null);
render(app, document.getElementById('root'));
