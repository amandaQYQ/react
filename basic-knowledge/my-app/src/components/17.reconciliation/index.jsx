import React from 'react';

import p1 from './images/1.png';

export function Reconciliation() {
    return (
        <React.Fragment>
            <div className="box"><h1>1.内部机制：</h1>在某一时间节点调用 React 的 render() 方法，会创建一棵由 React 元素组成的树。在下一次 state 或 props 更新时，相同的 render() 方法会返回一棵不同的树。React 需要基于这两棵树之间的差别来判断如何有效率的更新 UI 以保证当前 UI 与最新的树保持同步。
                <div style={{ textIndent: '2em',padding: 5 }}><b>1.1)Diffing 算法:</b> 当对比两颗树时，React 首先比较两棵树的根节点。不同类型的根节点元素会有不同的形态。
                    <p><span style={{color: 'orange', paddingRight: 25}}>①比对不同类型的元素:</span> 
                        {'当根节点为不同类型的元素时，React 会拆卸原有的树并且建立起新的树。举个例子，当一个元素从 <a> 变成 <img>，从 <Article> 变成 <Comment>，或从 <Button> 变成 <div> 都会触发一个完整的重建流程。'}

                    </p>
                    <p><span style={{color: 'orange', paddingRight: 25}}>②比对同一类型的元素:</span> 
                        当比对两个相同类型的 React 元素时，React 会保留 DOM 节点，仅比对及更新有改变的属性。比如：className, style, title等属性
                    </p>
                    <p><span style={{color: 'orange', paddingRight: 25}}>③比对同类型的组件元素:</span> 
                        当一个组件更新时，组件实例保持不变，这样 state 在跨越不同的渲染时保持一致。React 将更新该组件实例的 props 以跟最新的元素保持一致，并且调用该实例的 componentWillReceiveProps() 和 componentWillUpdate() 方法。
                    </p>
                    <div><span style={{color: 'orange', paddingRight: 25}}>④对子节点进行递归:</span> 
                        在默认条件下，当递归 DOM 节点的子元素时，React 会同时遍历两个子元素的列表；当产生差异时，生成一个 mutation。在子元素列表末尾新增元素时，更变开销比较小。比如：
                        <p className="p3"><img src={p1} /></p>
                        <p>{'React 会先匹配两个 <li>first</li> 对应的树，然后匹配第二个元素 <li>second</li> 对应的树，最后插入第三个元素的 <li>third</li> 树。反之，在列表头部插入会很影响性能，那么更变开销会比较大。'}</p>
                        <p><b>为了解决以上问题，React 支持 key 属性。当子元素拥有 key 时，React 使用 key 来匹配原有树上的子元素以及最新树上的子元素。以下例子在新增 key 之后使得之前的低效转换变得高效：</b></p>
                    </div>
                </div>

            </div>
        </React.Fragment>

    )
}
