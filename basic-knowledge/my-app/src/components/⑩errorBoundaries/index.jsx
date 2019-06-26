import React from 'react';

import p1 from './images/1.png';
import p2 from './images/2.png';
import p3 from './images/3.png';

export function ErrorB() {

    return (
        <React.Fragment>
            <div className="box"><h1>1.错误边界概念：</h1>错误边界是一种 React 组件，这种组件可以捕获并打印发生在其子组件树任何位置的 JavaScript 错误，并且，它会渲染出备用 UI，而不是渲染那些崩溃了的子组件树。错误边界在渲染期间、生命周期方法和整个组件树的构造函数中捕获错误。</div>
            <div className="box"><h1>2.无法捕获的错误：</h1>
                <div><h4>2.1) 事件处理</h4>
                    <p style={{ textIndent: '2em' }}>可以使用{'try{} catch{}'}捕获</p>
                    <p className="p3"><img src={p1} /></p>
                </div>
                <div><h4>2.2) 异步代码（例如 setTimeout 或 requestAnimationFrame 回调函数）</h4></div>
                <div><h4>2.3) 服务端渲染</h4></div>
                <div><h4>2.4) 它自身抛出来的错误（并非它的子组件）</h4></div>
            </div>
            <div className="box"><h1>3.错误边界应用：</h1>
                如果一个 class 组件中定义了 static getDerivedStateFromError() 或 componentDidCatch() 这两个生命周期方法中的任意一个（或两个）时，那么它就变成一个错误边界。
                <p className="p3"><img src={p2} /></p>
                然后你可以将它作为一个常规组件去使用：
                <p className="p3"><img src={p3} /></p>
                <p style={{ color: 'red' }}>只有 <strong >class</strong> 组件才可以成为成错误边界组件</p>
            </div>
            demo：
            <Wrap />
        </React.Fragment>

    )
}

// demo
class ErrCatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    // static getDerivedStateFromError(error) {
    //     console.log(error, typeof error);
    //     return { hasError: true };
    // }
    componentDidCatch(error, info) {
        console.log(error);
        this.setState({ hasError: error })
    }
    render() {
        if (this.state.hasError) {
            return <h1>Error</h1>
        }

        return this.props.children;
    }
}

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counte: 0,
            error: false
        }
    }
    count = () => {
        this.setState({
            counte: this.state.counte + 1
        })
    }
    showError = () => {
        this.setState({
            error: true
        })

    }
    render() {
        if (this.state.error) {
            throw new Error("YOLO");
        }
        return (
            <React.Fragment>
                <button onClick={this.count}>计数</button>
                <button onClick={this.showError}>抛出错误</button>

                <div>{this.state.counte}</div>
            </React.Fragment>
        )
    }
}

function Wrap() {
    return (
        <ErrCatch><Demo /></ErrCatch>
    )
}
