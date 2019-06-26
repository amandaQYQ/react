import React from 'react';
import './index.scss';

import p1 from './images/1.png';
import p2 from './images/2.png';
import p3 from './images/3.png';

export function Comp() {

    return (
        <React.Fragment>
            <div className="box"><b>1.概念：</b>组件，从概念上类似于 JavaScript 函数。它接受任意的入参（即 “props”），并返回用于描述页面展示内容的 React 元素。</div>
            <div className="box"><b>2.类别：</b>
                <p>1) 函数组件</p>
                <p className="p2"><img src={p1} /></p>
                <p>2) class组件</p>
                <p className="p2"><img src={p2} /></p>
                <p>3) 组合组件</p>
                <p className="p2 pB"><img src={p3} /></p>
            </div>
            <div className="box"><b>3.注意：</b>
                <p style={{color: 'red'}}>1) 组件名称必须以大写字母开头。</p>
            
            </div>

        </React.Fragment>

    )
}