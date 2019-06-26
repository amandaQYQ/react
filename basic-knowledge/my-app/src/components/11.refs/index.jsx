import React from 'react';

import p1 from './images/1.png';
import p2 from './images/2.png';
import p3 from './images/3.png';
import p4 from './images/4.png';
import p5 from './images/5.png';

export function Refs() {

    return (
        <React.Fragment>
            <div className="box"><h1>1.Refs概念：</h1>Refs 提供了一种方式，允许我们访问 DOM 节点或在 render 方法中创建的 React 元素。</div>
            <div className="box"><h1>2.Refs应用：</h1>下面是几个适合使用 refs 的情况：
                <p style={{ textIndent: '2em' }}>2.1）管理焦点，文本选择或媒体播放。</p>
                <p style={{ textIndent: '2em' }}>2.2）触发强制动画。</p>
                <p style={{ textIndent: '2em' }}>2.3）集成第三方 DOM 库。</p>
                <p style={{ textIndent: '1em' }}>避免使用 refs 来做任何可以通过声明式实现来完成的事情。举个例子，避免在 Dialog 组件里暴露 open() 和 close() 方法，最好传递 isOpen 属性。</p>

            </div>
            <div className="box"><h1>3.Refs用法：</h1>
                <p style={{ textIndent: '2em' }}>3.1）创建 Refs <span style={{ color: 'orange' }} >React.createRef()</span></p>
                <p style={{ textIndent: '2em' }}>3.2）访问 Refs <span style={{ color: 'orange' }} >const node = React.createRef().current</span></p>
                <div style={{ textIndent: '2em' }}><b>注意</b>
                    <p style={{ textIndent: '2em' }}>当 ref 属性用于 HTML 元素时，构造函数中使用 React.createRef() 创建的 ref 接收底层 DOM 元素作为其 current 属性。</p>
                    <p style={{ textIndent: '2em' }}>当 ref 属性用于自定义 class 组件时，ref 对象接收组件的挂载实例作为其 current 属性。</p>
                    <p style={{ textIndent: '2em' }}>你不能在函数组件上使用 ref 属性，因为他们没有实例。</p>
                    <p className="p3"><img src={p1} /></p>
                    <p style={{ textIndent: '2em' }}>但是你可以在函数组件内部使用 ref 属性，只要它指向一个 DOM 元素或 class 组件</p>
                    <p className="p3"><img src={p2} /></p>
                </div>
                <div>参考demo：
                    <AddRef color='red'>点击获取焦点</AddRef>
                    <Myclass color='orange'>自动获取焦点</Myclass>
                </div>
            </div>
            <div className="box"><h1>4.Refs转发：</h1>Ref 转发是一项将 ref 自动地通过组件传递到其一子组件的技巧。(子组件也应该有ref来接收的)
                <p style={{ textIndent: '2em' }}>4.1）转发 refs 到 DOM 组件</p>
                <p className="p3"><img src={p3} /></p>
                <div style={{ textIndent: '2em' }}>参考demo：<FancyButton ref={myref}>点击</FancyButton></div>
                <p style={{ textIndent: '2em' }}>4.2）在高阶组件中转发 refs</p>
                <div>参考demo：
                    <App />
                </div>
            </div>
            <div className="box"><h1>5.回调 Refs：</h1>不同于传递 createRef() 创建的 ref 属性，你会传递一个函数。这个函数中接受 React 组件实例或 HTML DOM 元素作为参数，以使它们能在其他地方被存储和访问。
            <p className="p3"><img src={p4} /></p>
                <p>你也可以在组件间传递回调形式的 refs，就像你可以传递通过 React.createRef() 创建的对象 refs 一样。</p>
                <p className="p3"><img src={p5} /></p>

            </div>

        </React.Fragment>

    )
}

// 为dom元素添加ref------------------------------------
class AddRef extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.state = {
            value: '请输入...'
        }
    }
    change(e) {
        this.setState({
            value: e.target.value
        });
    }
    myfocus() {
        this.ref.current.focus();
        console.log(this.ref.current);
        // console.log(this.props.ref) // 不能在props里访问ref
    }
    render() {
        return <div style={{ margin: 20 }}>
            <input
                style={{ width: 100, height: 45, color: this.props.color }}
                ref={this.ref}
                value={this.state.value}
                onChange={this.change.bind(this)}
            /><br />
            <button
                onClick={this.myfocus.bind(this)}
                style={{ color: this.props.color }}>{this.props.children}</button>
        </div>
    }
}

// 为class组件添加ref---------------------------------
class Myclass extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }
    componentDidMount() {
        console.log(this.ref.current, '??')
        // this.ref.current.change();
        this.ref.current.myfocus();
    }
    render() {
        return <AddRef ref={this.ref} color={this.props.color}>{this.props.children}</AddRef>
    }
}

// refs转发-------------------------------------------
const myref = React.createRef();
const FancyButton = React.forwardRef((props, ref) => {
    function handle() {
        console.log(props, ref)
    }
    return (
        <button ref={ref} className="FancyButton111" onClick={handle}>
            {props.children}
        </button>
    )
})

// 在高阶组件中转发refs---------------------------------
class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }
    setInputValue(value) {
        this.textInput.current.value = value;
    }
    render() {
        return (<div><input ref={this.textInput} /></div>);
    }
}
function HOCFunc(Component) {
    class HOCComponent extends React.Component {
        componentDidUpdate(prevProps) {
            console.log("old props:", prevProps);
            console.log("new props:", this.props);
        }

        render() {
            const { forwardedRef, ...rest } = this.props;

            // 将自定义的 prop 属性 “forwardedRef” 定义为 ref
            return <Component ref={forwardedRef} {...rest} />;
        }
    }

    // 注意 React.forwardRef 回调的第二个参数 “ref”。
    // 我们可以将其作为常规 prop 属性传递给 HOCComponent，例如 “forwardedRef”
    // 然后它就可以被挂载到被 HOCComponent 包裹的子组件上。
    return React.forwardRef((props, ref) => {
        return <HOCComponent {...props} forwardedRef={ref} />;
    });
}
const NewFancyButton = HOCFunc(TextInput);


const MyButton = React.forwardRef((props, ref) => (
    <button ref={ref} onClick={() => console.log(ref)}>
        {props.children}
    </button>
));

class App extends React.Component {
    constructor(props) {
        super(props);
        // 你可以直接获取 DOM button 的 ref：
        this.ref = React.createRef();
        this.HOCref = React.createRef();
    }
    componentDidMount() {
        setTimeout(() => {
            console.log(this.ref.current.innerText + ' will change to..');
            this.ref.current.innerText = "Refs 转发";
            console.log(this.ref.current.innerText);

        }, 2000);
        console.log(this.ref.current);
        console.log(this.HOCref.current);
        this.HOCref.current.setInputValue('我是父组件设置的值');
    }
    render() {
        return (
            <div>
                <MyButton ref={this.ref}>Click me!</MyButton>
                <NewFancyButton ref={this.HOCref}>高阶函数</NewFancyButton>
            </div>
        );
    }
}
// 回调ref

class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);

        this.textInput = null;

        this.setTextInputRef = element => {
            this.textInput = element;
        };

        this.focusTextInput = () => {
            // 使用原生 DOM API 使 text 输入框获得焦点
            if (this.textInput) this.textInput.focus();
        };
    }

    componentDidMount() {
        // 组件挂载后，让文本框自动获得焦点
        this.focusTextInput();
    }
    render() {
        // 使用 `ref` 的回调函数将 text 输入框 DOM 节点的引用存储到 React
        // 实例上（比如 this.textInput）
        return (
            <div>
                <input
                    type="text"
                    ref={this.setTextInputRef}
                />
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput}
                />
            </div>
        );
    }
}