import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';
import Fibonacci from './components/Fibonacci';
import Number from './components/Number';

ReactDOM.render(<Number number="3" />, document.getElementById('app'));