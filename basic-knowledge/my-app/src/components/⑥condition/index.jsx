import React from 'react';

import p1 from './images/1.png';
import p2 from './images/2.png';
import p3 from './images/3.png';
import p4 from './images/4.png';
// import p5 from './images/5.png';
// import p6 from './images/6.png';

export function Condition() {

    return (
        <React.Fragment>
            <div className="box"><h1>1.条件渲染：</h1>在 React 中，你可以创建不同的组件来封装各种你需要的行为。然后，依据应用的不同状态，你可以只渲染对应状态下的部分内容。以下是条件渲染的3种方式：
                <p style={{ textIndent: '2em' }}><b>1）if</b></p>
                <p className="p3"><img src={p1} /></p>

                <p style={{ textIndent: '2em' }}><b>2）与运算符 {'&&'}</b></p>
                <p className="p3"><img src={p2} /></p>

                <p style={{ textIndent: '2em' }}><b>3）三目运算符</b></p>
                <p className="p3"><img src={p3} /></p>
            </div>
            <div className="box"><h1>2.阻止组件渲染</h1>在极少数情况下，你可能希望能隐藏组件，即使它已经被其他组件渲染。若要完成此操作，你可以让 render 方法直接返回 null，而不进行任何渲染。
                <p className="p3"><img src={p4} /></p>
            </div>

        </React.Fragment>

    )
}