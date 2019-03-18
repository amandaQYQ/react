import React from 'react';
import ReactDOM from 'react-dom';

// components
// import App from './app'; // 涉及到react基础方面的应用

// import Parent from './app/components/ref.js' // 涉及ref的应用

// import ParentsContext from './app/components/context/context.js' // 涉及到context的应用
import Parent from './app/components/context/context2' // 涉及到context的应用2 动态修改context

import {Frags, Table, FragWithKey} from './app/components/fragments/fragments' // 涉及到fragments相关知识: <></>

import Rooter from './app/components/portals/portals' // 涉及到portals的相关知识: ReactDom.createPortal()

ReactDOM.render(
    // <App />,
    // <Parent />,
    // <ParentsContext />,
    // <Parent />,
    // <Frags />,
    <Rooter />,
    document.getElementById('root')
);