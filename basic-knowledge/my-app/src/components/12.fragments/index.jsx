import React from 'react';

import p1 from './images/1.png';
import p2 from './images/2.png';

export function Fragments() {

    return (
        <React.Fragment>
            <div className="box"><h1>1.Fragments概念：</h1>React 中的一个常见模式是一个组件返回多个元素。Fragments 允许你将子列表分组，而无需向 DOM 添加额外节点。
                <p className="p3"><img src={p1} /></p>
                <p style={{ textIndent: '2em' }}>你可以使用一种新的，且更简短的语法来声明 Fragments。它看起来像空标签：</p>
                <p className="p3"><img src={p2} /></p>
                <p style={{ textIndent: '2em' }}>key 是目前唯一可以传递给 Fragment 的属性。</p>

            </div>
        </React.Fragment>

    )
}

