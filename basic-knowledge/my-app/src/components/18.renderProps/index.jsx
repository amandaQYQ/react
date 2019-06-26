import React from 'react';

import p1 from './images/1.png';
import p2 from './images/2.jpg';

export function RenderProps() {
    return (
        <React.Fragment>
            <div className="box"><h1>1.Render Props概念：</h1>术语 “render prop” 是指一种在 React 组件之间使用一个值为函数的 prop 共享代码的简单技术，具有 render prop 的组件接受一个函数，该函数返回一个 React 元素并调用它而不是实现自己的渲染逻辑。
                <p className="p3"><img src={p1} /></p>
                <p style={{ textIndent: '2em' }}>更具体地说，<b>render prop 是一个用于告知组件需要渲染什么内容的函数 prop。</b></p>
            </div>
            <Father />
        </React.Fragment>

    )

}
// demo
class GrandSon extends React.Component {
    render() {
        const { x, y } = this.props.mouse;
        return (
            <>
                <img src={p2} style={{
                    position: 'fixed',
                    left: x, top: y,
                    width: 50,
                    height: 50,
                    opacity: .5
                }} />

            </>
        )
    }
}


class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0
        };
        this.handleMouse = this.handleMouse.bind(this);
    }
    handleMouse(e) {
        // console.log(e)
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
        // console.log(this.state)
    }
    render() {
        const styles = {
            height: '200px', width: "100%", border: '1px solid #ccc', overflow: 'hidden', position: 'fixed',
            textAlign: 'center',
            lineHeight: '200px'
        }
        return (
            <p style={{ ...styles }} onMouseMove={this.handleMouse}>
                {this.props.render(this.state)}
                在此区域内移动鼠标
            </p>
        )
    }

}

class Father extends React.Component {
    render() {
        return (
            <div>
                <Child render={mouse => (
                    <GrandSon mouse={mouse} />
                )} />
            </div>
        );
    }
}