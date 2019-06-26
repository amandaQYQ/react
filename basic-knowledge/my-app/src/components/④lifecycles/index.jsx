import React from 'react';

import p1 from './images/1.png';
import p2 from './images/2.png';

export function Lifecycle() {

    return (
        <React.Fragment>
            <div className="box"><h1>1.定义：</h1>生命周期方法，用于在组件不同阶段执行自定义功能。在组件被创建并插入到 DOM 时（即挂载中阶段（mounting）），组件更新时，组件取消挂载或从 DOM 中删除时，都有可以使用的生命周期方法。如图所示：
                <p className="p3"><img src={p1} /></p>
            </div>
            <div className="box"><h1>2.挂载：</h1>当组件实例被创建并插入 DOM 中时，其生命周期调用顺序如下：
                <div><b>1) constructor()</b>
                    <div style={{ textIndent: '2em' }}><b>1.1) 应用情境：</b><span style={{ color: 'red' }}>①初始化state， ②方法绑定。</span>如果不初始化 state 或不进行方法绑定，则不需要为 React 组件实现构造函数。</div>
                    <div style={{ textIndent: '2em'}}><b>1.2) 注意事项：</b>
                        <p>①在为 React.Component 子类实现构造函数时，应在其他语句之前前调用 super(props)</p>
                        <p>②在 constructor() 函数中不要调用 setState() 方法。</p>
                        <p>③避免将 props 的值复制给 state！你可以通过props直接访问该值。</p>
                    </div>
                    <div style={{ textIndent: '2em' }}>demo: <Father /></div>
                </div>
                <div><b>2) static getDerivedStateFromProps()</b>
                    <p>此方法适用于<span style={{color: 'yellow'}}>罕见的用例（具体参见官网）</span>，即 state 的值在任何时候都取决于 props。</p>
                </div>
                <div><b>3) render()</b>
                    <p style={{ textIndent: '2em' }}>1) render() 方法是 class 组件中唯一必须实现的方法。</p>
                    <p style={{ textIndent: '2em' }}>2) render() 函数应该为纯函数，这意味着在不修改组件 state 的情况下，每次调用时都返回相同的结果，并且它不会直接与浏览器交互。</p>
                </div>
                <div><b>4) componentDidMount()</b>
                    <p style={{ textIndent: '2em' }}>1) componentDidMount() 会在组件挂载后（插入 DOM 树中）立即调用。依赖于 DOM 节点的初始化应该放在这里。如需通过网络请求获取数据，此处是实例化请求的好地方。</p>
                    <p style={{ textIndent: '2em' }}>2) 这个方法是比较适合添加订阅的地方。如果添加了订阅，请不要忘记在 componentWillUnmount() 里取消订阅</p>
                    <p style={{ textIndent: '2em' }}>3) 你可以在 componentDidMount() 里可以直接调用 setState()。它将触发额外渲染，但此渲染会发生在浏览器更新屏幕之前。</p>
                
                </div>

            </div>
        
            <div className="box"><h1>3.更新：</h1>当组件的 props 或 state 发生变化时会触发更新。组件更新的生命周期调用顺序如下：
                <div style={{ textIndent: '2em'}}>1) static getDerivedStateFromProps()</div>
                <div style={{ textIndent: '2em'}}>2) shouldComponentUpdate(nextProps, nextState)
                    <p>此方法仅作为性能优化的方式而存在。不要企图依靠此方法来“阻止”渲染，因为这可能会产生 bug。你应该考虑使用内置的 PureComponent 组件，而不是手动编写 shouldComponentUpdate()。PureComponent 会对 props 和 state 进行浅层比较，并减少了跳过必要更新的可能性。</p>
                    <p>如果你一定要手动编写此函数，可以将 this.props 与 nextProps 以及 this.state 与nextState 进行比较，并返回 false 以告知 React 可以跳过更新。请注意，返回 false 并不会阻止子组件在 state 更改时重新渲染。</p>
                </div>
                <div style={{ textIndent: '2em'}}>3) render()</div>
                <div style={{ textIndent: '2em'}}>4) getSnapshotBeforeUpdate()
                    <p>getSnapshotBeforeUpdate() 在最近一次渲染输出（提交到 DOM 节点）之前调用。它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。此生命周期的任何返回值将作为参数传递给 componentDidUpdate()。</p>
                </div>
                <div style={{ textIndent: '2em'}}>5) componentDidUpdate()
                    <p>componentDidUpdate() 会在更新后会被立即调用。首次渲染不会执行此方法。</p>
                    <p className="p2"><img src={p2} /></p>
                </div>
            </div>

            <div className="box"><h1>4.卸载：</h1>
                <div style={{ textIndent: '2em'}}>1) componentWillUnmount()
                    <p>componentWillUnmount() 会在组件卸载及销毁之前直接调用。在此方法中执行必要的清理操作，例如，清除 timer，取消网络请求或清除在 componentDidMount() 中创建的订阅等。</p>
                    <p>componentWillUnmount() 中不应调用 setState()，因为该组件将永远不会重新渲染。组件实例卸载后，将永远不会再挂载它。</p>
                </div>

            </div>
        </React.Fragment>

    )
}

function Father() {
    const data = '默认值';
    return <Child data={data} />
}

class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            // key: 0
        }
    }
    // state = { data: this.props.data };
    handle = (e) => {
        e.preventDefault();

        this.setState({
            data: '更新后',
        })
    }
    render() {
        return <div style={{ cursor: 'pointer', color: '#ccc', userSelect: 'none' }} onClick={this.handle}>{this.state.data}</div>
    }
}