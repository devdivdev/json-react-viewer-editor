import React, { Component } from 'react';
import './App.css';

import Element from './components/Element';
import Form from './components/Form';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Form />
            </div>
        );
    }
}

export default App;
