import React from 'react';

import p1 from './images/1.png';
import p2 from './images/2.png';

export function List() {

    return (
        <React.Fragment>
            <div className="box"><h1>1.列表：</h1>
                <p className="p3"><img src={p1} /></p>
            </div>
            <div className="box"><h1>2.key</h1>key 帮助 React 识别哪些元素改变了，比如被添加或删除。因此你应当给数组中的每一个元素赋予一个确定的标识。
            <p style={{ textIndent: '2em' }}><b>2.1）一个元素的 key 最好是这个元素在列表中拥有的一个独一无二的字符串。但是key 只是在兄弟节点之间必须唯一</b></p>
                <p className="p3"><img src={p2} /></p>
            </div>

        </React.Fragment>

    )
}