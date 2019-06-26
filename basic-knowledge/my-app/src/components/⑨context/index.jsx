import React from 'react';

import p1 from './images/1.png';
import p2 from './images/2.png';
import p3 from './images/3.png';

export function Context() {

    return (
        <React.Fragment>
            <div className="box"><h1>1.context概念：</h1>Context 提供了一种在组件之间传递数据的方式，而不必显式地通过组件树的逐层传递 props。</div>
            <div className="box"><h1>2.应用情境：</h1>Context 设计目的是为了共享那些对于一个组件树而言是“全局”的数据，例如当前认证的用户、主题或首选语言。</div>
            <div className="box"><h1>3.API：</h1>
                <div><h4>3.1) React.createContext</h4>
                    <p style={{ textIndent: '2em' }}>创建一个context对象: <span style={{ color: 'orange' }} >{'const Mycontext = React.createContext(defaultValue)'}</span></p>
                    <div style={{ textIndent: '2em' }}>①只有当组件所处的树中没有匹配到 Provider 时，其 defaultValue 参数才会生效。这有助于在不使用 Provider 包装组件的情况下对组件进行测试。注意：将 undefined 传递给 Provider 时，消费组件的 defaultValue 不会生效。</div>
                </div>

                <div><h4>3.2) Context.provider</h4>
                    <p style={{ textIndent: '2em' }}>每个 Context 对象都会返回一个 Provider React 组件，它允许消费组件订阅 context 的变化。: <span style={{ color: 'orange' }} >{'<MyContext.Provider value={/* 某个值 */}>'}</span></p>
                    <p style={{ textIndent: '2em' }}>①Provider 接收一个 value 属性，传递给消费组件。一个 Provider 可以和多个消费组件有对应关系。多个 Provider 也可以嵌套使用，里层的会覆盖外层的数据。</p>
                    <p style={{ textIndent: '2em' }}>②当 Provider 的 value 值发生变化时，它内部的所有消费组件都会重新渲染。Provider 及其内部 consumer 组件都不受制于 shouldComponentUpdate 函数，因此当 consumer 组件在其祖先组件退出更新的情况下也能更新。</p>
                </div>

                <div><h4>3.3) Class.contextType</h4>
                    <p style={{ textIndent: '2em' }}>①挂载在 class 上的 contextType 属性会被重赋值为一个由 React.createContext() 创建的 Context 对象。这能让你使用 this.context 来消费最近 Context 上的那个值。你可以在任何生命周期中访问到它，包括 render 函数中。</p>
                    <p className="p3"><img src={p1} /></p>
                    <p style={{ textIndent: '2em' }}>②你可以使用 static 这个类属性来初始化你的 contextType。</p>
                    <p className="p3"><img src={p2} /></p>
                </div>

                <div><h4>3.4) Context.Consumer</h4>
                    <p style={{ textIndent: '2em' }}>这里，React 组件也可以订阅到 context 变更。这能让你在函数式组件中完成订阅 context。</p>
                    <p className="p3"><img src={p3} /></p>
                </div>
            </div>
            <div className="box"><h1>4.demo：</h1>以下是demo</div>
            <A />
            <M mycontext={AA} />
            <N />
            <O />
        </React.Fragment>

    )
}
// 以下为demo

const defaults = {
    name: 'one',
    background: "#61dafb",
    color: 'white',
    change: () => { }
};
const MyContext = React.createContext(defaults);

class A extends React.Component {
    static contextType = MyContext
    constructor(props) {
        super(props);
        this.handlechange = this.handlechange.bind(this);
        this.state = {
            ...defaults,
            change: this.handlechange
        }
    }
    handlechange(name) {
        const one = {
            name: 'one',
            background: "#61dafb",
            color: 'white',
        }
        const two = {
            name: 'two',
            background: "white",
            color: '#ccc',
        }

        this.setState(() => (
            name === 'one' ? { ...two } : { ...one }
        ))



    }
    render() {
        return (
            <MyContext.Provider
                value={this.state} // 此处不传就报错
            >
                <B />
            </MyContext.Provider>
        )
    }
}

class B extends React.Component {
    render() {
        return (
            <React.Fragment>
                <C />
                <D />
                <E />
            </React.Fragment>
        )
    }
}

class E extends React.Component {
    render() {
        return (

            <MyContext.Consumer>
                {
                    ({ background, color }) => {
                        return <div style={{
                            background: background,
                            color: color,
                            width: 300,
                            height: 50,
                            fontSize: 20,
                            lineHeight: '50px',
                            textAlign: 'center'
                        }}>这是内容</div>
                    }

                }

            </MyContext.Consumer>
        )
    }
}

class D extends React.Component {
    render() {
        return (
            <MyContext.Consumer>
                {
                    (d) => <div>当前是主题{d.name}</div>
                }
            </MyContext.Consumer>
        )
    }
}

class C extends React.Component {
    render() {
        return (
            <MyContext.Consumer>
                {
                    ({ change, name }) => <button style={{ width: 100, height: 30 }}
                        onClick={() => change(name)}>切换主题</button>

                }
            </MyContext.Consumer>
        )
    }
}

// demo: Provider不传值时，获取defaultValue
const AA = React.createContext('red');

class M extends React.Component {
    render() {
        const BB = this.props.mycontext;
        return (
            <div>
                <BB.Consumer>
                    {
                        value => <span style={{ color: value }} >M:没有Provider时，defaultValue生效</span>
                    }
                </BB.Consumer>
            </div>
        )
    }
}

// demo2：Provider不传值时，获取defaultValue
class N extends React.Component {
    render() {

        return (
            <div>
                <AA.Consumer>
                    {
                        value => <span style={{ color: value }} >N:没有Provider时，defaultValue生效</span>
                    }
                </AA.Consumer>
            </div>
        )
    }
}

// demo2：Provider不传值时，获取defaultValue
class O extends React.Component {
    // static contextType = AA; // or
    static contextType = React.createContext('red'); // 使用static初始化contextType以后，this.context访问到的是defaultValue,这里是red，并不能访问到AA.Provider或者AA.Consumer
    render() {
        console.log(this.context); // 生命周期+ 方法内都能访问到this.context的值red
        return (

            <div>
                <span style={{ color: this.context }}>O:没有Provider时，defaultValue生效</span>
            </div>
        )
    }
}

