import React from 'react';

import p1 from './images/1.png';
import p2 from './images/2.png';
import p3 from './images/3.png';
import p4 from './images/4.png';
import p5 from './images/5.png';

export function InEs5() {
    return (
        <React.Fragment>
            <div className="box"><h1>1.不使用ES6：</h1>如果你还未使用过 ES6，你可以使用 create-react-class 模块
                <p className="p3"><img src={p1} /></p>
            </div>
            <div className="box"><h1>2.Es5与Es6初始化props、state的异同：</h1>

                <p style={{ textIndent: '2em' }}><b>2.1)defaultProps:</b></p>
                <p style={{ textIndent: '3em' }}>ES6中：</p>
                
                <p className="p3"><img src={p2} /></p>
                <p style={{ textIndent: '3em' }}>ES5中：使用 getDefaultProps() 函数：</p>

                <p className="p3"><img src={p3} /></p>

                <p style={{ textIndent: '2em' }}><b>2.2)state:</b></p>
                <p style={{ textIndent: '3em' }}>ES6中：可以通过给 this.state 赋值的方式来定义组件的初始 state</p>
                <p className="p3"><img src={p4} /></p>
                <p style={{ textIndent: '3em' }}>ES5中：你需要提供一个单独的 getInitialState 方法，让其返回初始 state：</p>
                <p className="p3"><img src={p5} /></p>

            </div>
            <div className="box"><h1>3.自动绑定：</h1>对于使用 ES6 的 class 关键字创建的 React 组件你需要在 constructor 中显式地调用 .bind(this)，而es5则不用
            </div>

        </React.Fragment>

    )
}
