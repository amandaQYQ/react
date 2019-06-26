import React from 'react';

import p1 from './images/1.png';
// import p2 from './images/2.png';

export function Form() {

    return (
        <React.Fragment>
            <div className="box"><h1>1.表单：</h1>在 React 里，HTML 表单元素的工作方式和其他的 DOM 元素有些不同，这是因为表单元素通常会保持一些内部的 state。
                <p className="p3"><img src={p1} /></p>
            </div>

        </React.Fragment>

    )
}