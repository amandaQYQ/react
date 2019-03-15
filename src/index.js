import React from 'react';
import ReactDOM from 'react-dom';

// components
// import App from './app'; // 涉及到react基础方面的应用
// import Parent from './app/components/ref.js' // 涉及ref的应用
import ParentsContext from './app/components/context.js' // 涉及到context的应用

ReactDOM.render(
    // <App />,
    // <Parent />,
    <ParentsContext />,
    document.getElementById('root')
);