import React from 'react';

import p1 from './images/1.png';
import p2 from './images/2.png';
import p3 from './images/3.png';
import p4 from './images/4.png';

export function Optimizing() {
    return (
        <React.Fragment>
            <div className="box"><h1>1.性能优化：</h1>UI 更新需要昂贵的 DOM 操作，而 React 内部使用几种巧妙的技术以便最小化 DOM 操作次数。
                <p style={{ textIndent: '2em' }}><b>1)使用生产版本</b></p>
                <p style={{ textIndent: '2em' }}><b>2)如果你知道在什么情况下你的组件不需要更新，你可以在 shouldComponentUpdate 中返回 false 来跳过整个渲染过程。</b></p>
                <div style={{ textIndent: '2em' }}><b>3)避免可变对象的产生(props 或state)</b>
                    <p style={{ textIndent: '3em' }}>①利用concat</p>
                    <p className="p3"><img src={p1} /></p>
                    <p style={{ textIndent: '3em' }}>②利用扩展运算符</p>
                    <p className="p3"><img src={p2} /></p>
                    <p style={{ textIndent: '3em' }}>③利用 Object.assign </p>
                    <p className="p3"><img src={p3} /></p>
                </div>
                <p style={{ textIndent: '2em' }}><b>4)使用不可变数据结构</b></p>
                <p className="p3"><img src={p4} /></p>


            </div>
        </React.Fragment>

    )
}
