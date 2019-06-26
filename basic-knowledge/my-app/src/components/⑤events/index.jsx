import React from 'react';

import p1 from './images/1.png';
import p2 from './images/2.png';
import p3 from './images/3.png';
import p4 from './images/4.png';
import p5 from './images/5.png';
import p6 from './images/6.png';

export function Events() {

    return (
        <React.Fragment>
            <div className="box"><h1>1.React的事件处理：</h1>React 元素的事件处理和 DOM 元素的很相似，但是有一点语法上的不同:
                <p style={{ textIndent: '2em' }}>1）React 事件的命名采用小驼峰式（camelCase），而不是纯小写。</p>
                <p style={{ textIndent: '2em' }}>2）使用 JSX 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串。</p>
                <p className="p2"><img src={p1} /></p>
                <p style={{ textIndent: '2em' }}>3）不能通过返回 false 的方式阻止默认行为。你必须显式的使用 preventDefault</p>
                <p className="p2"><img src={p2} style={{ width: 500, height: 300 }} /></p>
                <div style={{ textIndent: '2em' }}>4）jsx回调函数中的this指向，有三种方法:
                    <p style={{ textIndent: '3em' }}>4.1）使用bind()</p>
                    <p className="p3"><img src={p3} /></p>
                    <p style={{ textIndent: '3em' }}>4.2）使用箭头函数，正确的绑定回调函数</p>
                    <p className="p3"><img src={p4} /></p>
                    <p style={{ textIndent: '3em' }}>4.3）在回调中使用箭头函数：</p>
                    <p className="p3"><img src={p5} /></p>
                </div>

                <div style={{ textIndent: '2em' }}>5）向事件处理程序传递参数
                    <p className="p3"><img src={p6} /></p>
                    demo: <Param />
                    <p>
                        上述两种方式是等价的，分别通过箭头函数和 Function.prototype.bind 来实现。
    
                    </p>
                    <p>
                        在这两种情况下，React 的事件对象 e 会被作为第二个参数传递。如果通过箭头函数的方式，事件对象必须显式的进行传递，而通过 bind 的方式，事件对象以及更多的参数将会被隐式的进行传递。
    
                    </p>
                </div>
            </div>
        </React.Fragment>

    )
}
// demo
class Param extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            conso: "",
            print: ''
        }
    }
    handle = (d, e) => {
        this.setState({
            conso: d
        })
    }
    handle2(d, e) {
        console.log(d, e.currentTarget.valueOf());

        this.setState({
            print: d
        })
    }
    render() {
        const data = [1, 2];
        const { conso, print } = this.state;
        return (
            <React.Fragment>
                <ul>
                    {
                        data.map(d => {
                            return <li key={d} onClick={(e) => this.handle(d, e)}>{d}  输出:{conso && conso == d && conso}</li>
                        })
                    }
                </ul>
                <ul>
                    {
                        data.map(d => {
                            return <li key={d} onClick={this.handle2.bind(this, d)}>{d}</li>
                        })
                    }
                </ul>
                <div>输出：{print}</div>
            </React.Fragment>

        )
    }
}