import React from 'react';

import p1 from './images/1.png';
import p2 from './images/2.png';
import p3 from './images/3.png';

export function TypeChecking() {
    return (
        <React.Fragment>
            <div className="box"><h1>1.类型检查：</h1>随着你的应用程序不断增长，你可以通过类型检查捕获大量错误。</div>
            <div style={{ textIndent: '2em' }}><b>2.分类</b>
                <p style={{ textIndent: '3em' }}>①你可以使用 Flow 或 TypeScript 等 JavaScript 扩展来对整个应用程序做类型检查。</p>
                <p style={{ textIndent: '3em' }}>②你可以使用React 内置的类型检查的功能propTypes。</p>
            </div>
            <div className="box"><h1>3.propTypes验证器：</h1>
                <p className="p3"><img src={p1} /></p>
            </div>
            <div className="box"><h1>4.默认 Prop 值：</h1>defaultProps 
                <p className="p3"><img src={p2} /></p>
                <p style={{ textIndent: '3em' }}>你也可以在 React 组件类中声明 defaultProps 作为静态属性。</p>
                <p className="p3"><img src={p3} /></p>

            </div>
            {/* <Father /> */}
        </React.Fragment>

    )

}
