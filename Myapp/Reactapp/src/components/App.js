import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './layout/Header.js';

class App extends Component {
    render(){
        <Header/>
    }
}

ReactDOM.render(<App/>,document.getElementById('app'));
