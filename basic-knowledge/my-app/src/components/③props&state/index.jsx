import React from 'react';

import p1 from './images/1.png';
import p2 from './images/2.png';
import p3 from './images/3.png';
import p4 from './images/4.png';

export function PS() {

    return (
        <React.Fragment>
            <div className="box"><b>1.props：</b>props 是 React 组件的输入。它们是从父组件向下传递给子组件的数据。
                <p>1) props 是只读的。不应以任何方式修改它们</p>
                <p>2）每个组件都可以获取到 props.children。它包含组件的开始标签和结束标签之间的内容。</p>
                <p>函数组件中，获取props.children, class组件，使用this.props.children</p>
                <p className="p2"><img src={p1} /></p>
                <p className="p2"><img src={p2} /></p>
            </div>

            <div style={{color: 'orange', margin: 10}}>如果你想要修改某些值，以响应用户输入或网络响应，请使用 state 来作为替代。</div>
            <div className="box"><b>2.state：</b>当组件中的一些数据在某些时刻发生变化时，这时就需要使用 state 来跟踪状态。
                <div>2.1 注意：
                    <p>1）不要直接修改state，使用setState()</p>
                    <p>2）state的更新可能是异步的，出于性能考虑，React 可能会把多个 setState() 调用合并成一个调用。</p>
                    <p className="p2"><img src={p3} /></p>
                    <p className="p2"><img src={p4} /></p>
                    <p>3）State 的更新会被合并</p>
                </div>
            </div>
            <div className="box"><b>3.props和state的区别：</b>
                <p >1) props 由父组件传入，而 state 由组件本身管理。组件不能修改 props，但它可以修改 state。</p>
                <p >2) 对于所有变化数据中的每个特定部分，只应该由一个组件在其 state 中“持有”它。不要试图同步来自于两个不同组件的 state。相反，应当将其提升到最近的共同祖先组件中，并将这个 state 作为 props 传递到两个子组件。</p>
            
            </div>

        </React.Fragment>

    )
}