import React from 'react';
import './index.scss';

import p1 from './images/1.png';
import p2 from './images/2.png';
import p3 from './images/3.png';
import p4 from './images/4.png';
import p5 from './images/5.png';
import p6 from './images/6.png';
import p7 from './images/7.png';
import p8 from './images/8.png';

export function Jsx() {

    return (
        <React.Fragment>
            <div className="box"><b>1.定义：</b>JSX，是一个 JavaScript 的语法扩展：{'<h1>Hello, world!</h1>'}</div>
            <div className="box"><b>2.使用原因：</b>React 认为渲染逻辑本质上与其他 UI 逻辑内在耦合，比如，在 UI 中需要绑定处理事件、在某些时刻状态发生变化时需要通知到 UI，以及需要在 UI 中展示准备好的数据。</div>
            <div className="box"><b>3.在 JSX 中嵌入表达式(JSX也是一个表达式)：</b>使用大括号{"{ }"}</div>
            <div className="box">
                <b>4.JSX 特定属性：</b><br />
                1)通过使用引号，来将属性值指定为字符串字面量<p className="codeFont">{'const element = <div tabIndex="0">;'}</p>
                2)使用大括号，来在属性值中插入一个 JavaScript 表达式<p className="codeFont">{'const element = <img src={user.avatarUrl}></img>;'}</p>
                <p style={{ marginLeft: 10 }} >if 语句以及 for 循环不是 JavaScript 表达式，所以不能在 JSX 中直接使用。但是，你可以用在 JSX 以外的代码中。</p>

                <p className="p3"><img src={p4} /></p>
                <p>3)假如一个标签里面没有内容，你可以使用 /> 来闭合标签，就像 XML 语法一样</p>
                <div>4)JSX 标签里能够包含很多子元素:
                    <p className="codeFont">{'const element = ('}</p>
                    <p style={{ marginLeft: 40 }} className="codeFont">{'< div >'}</p>
                    <p style={{ marginLeft: 80 }} className="codeFont">{'<h1>Hello!</h1>'}</p>
                    <p style={{ marginLeft: 80 }} className="codeFont">{'<h2>Good to see you here.</h2>'}</p>
                    <p style={{ marginLeft: 40 }} className="codeFont">{'</div>'}</p>
                    <p className="codeFont">{');'}</p>
                </div>
                <p>5)JSX 防止注入攻击：React DOM 在渲染所有输入内容之前，默认会进行转义。</p>
                <p>6)JSX 表示对象:Babel 会把 JSX 转译成一个名为 React.createElement() 函数调用。</p>
                <p className="p3"><img src={p1} /></p>
                <p className="p3"><img src={p2} /></p>
                <p className="p3"><img src={p3} /></p>
                <p>7)如果你没给 prop 赋值，它的默认值是 true。以下两个 JSX 表达式是等价的：</p>
                <p className="p3"><img src={p5} /></p>
                <p>8)如果你已经有了一个 props 对象，你可以使用展开运算符 ... 来在 JSX 中传递整个 props 对象。</p>
                <p className="p3"><img src={p6} /></p>
                <p style={{ textIndent: '3em' }}>你还可以选择只保留当前组件需要接收的 props，并使用展开运算符将其他 props 传递下去。</p>
                <p className="p3"><img src={p7} /></p>
                <p>9)React 组件也能够返回存储在数组中的一组元素：</p>
                <p className="p3"><img src={p8} /></p>
                <hr />
                以下是demo：
                <A />
                <hr />
            </div>
        </React.Fragment>

    )
}

function A() {
    return [
        <div key={1}>1</div>,
        <div key={2}>2</div>,
        <p key={3}>3</p>
    ]
}