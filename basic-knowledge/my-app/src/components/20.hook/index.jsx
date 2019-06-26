import React from 'react';

import p1 from './images/1.png';
import p2 from './images/2.png';
import p3 from './images/3.png';
import p4 from './images/4.png';
import p5 from './images/5.png';
import p6 from './images/6.png';
import p7 from './images/7.png';
import p8 from './images/8.png';
import p9 from './images/9.png';
import p10 from './images/10.png';
import p11 from './images/11.png';
import p12 from './images/12.png';
import p13 from './images/13.png';
import p14 from './images/14.png';
import p15 from './images/15.png';

export function Hook() {
    return (
        <React.Fragment>
            <div className="box"><h1>✌️1.Hook：</h1>Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。Hook 是一些可以让你在函数组件里“钩入” React state 及生命周期等特性的函数。Hook 不能在 class 组件中使用 —— 这使得你不使用 class 也能使用 React。</div>

            <div className="box"><h1>✌️2.State Hook：</h1>
                <p className="p3"><img src={p1} /></p>
                <ul>
                    <li>useState 唯一的参数就是初始 state</li>
                    <li>你可以在一个组件中多次使用 State Hook</li>
                    <li>setState会merge新老state，而hook中的set函数会直接替换,这就意味着如果state是对象时，每次set应该传入所有属性</li>
                </ul>
            </div>

            <div className="box"><h1>✌️3.Effect Hook：</h1>
                <p style={{ textIndent: '3em' }}>你之前可能已经在 React 组件中执行过数据获取、订阅或者手动修改过 DOM。我们统一把这些操作称为“副作用”，或者简称为“作用”。</p>
                <p style={{ textIndent: '3em' }}>useEffect 就是一个 Effect Hook，给函数组件增加了操作副作用的能力。它跟 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 具有相同的用途，只不过被合并成了一个 API。</p>
                <p className="p3"><img src={p2} /></p>
                <p style={{ textIndent: '3em' }}>3.1)默认情况下，React 会在每次渲染后调用副作用函数 —— 包括第一次渲染的时候。</p>
                <p style={{ textIndent: '3em' }}>3.2)副作用函数可以通过返回一个函数来指定如何“清除”副作用</p>
                <p className="p3"><img src={p3} /></p>
            </div>

            <div className="box"><h1>✌️4.useContext：</h1>接收一个 context 对象（React.createContext 的返回值）并返回该 context 的当前值。当前的 context 值由上层组件中距离当前组件最近的 {'<MyContext.Provider>'} 的 value prop 决定。
                <p className="p3"><img src={p15} /></p>
                <p style={{ textIndent: '3em' }}><b>注意1：</b>如果你在接触 Hook 前已经对 context API 比较熟悉，那应该可以理解，useContext(MyContext) 相当于 class 组件中的 static contextType = MyContext 或者 {'<MyContext.Consumer>'}。</p>
                <p style={{ textIndent: '3em' }}><b>注意2：</b>useContext(MyContext) 只是让你能够读取 context 的值以及订阅 context 的变化。你仍然需要在上层组件树中使用 {'<MyContext.Consumer>'} 来为下层组件提供 context。。</p>
            </div>

            <div className="box"><h1>✌️5.Hook 使用规则：</h1>
                <p style={{ textIndent: '3em' }}>4.1)只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。</p>
                <p style={{ textIndent: '3em' }}>4.2)只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用。（还有一个地方可以调用 Hook —— 就是自定义的 Hook 中，我们稍后会学习到。）</p>
            </div>

            <div className="box"><h1>✌️6.自定义 Hook：</h1>
                <p style={{ textIndent: '3em' }}>5.1)只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。</p>
                <p style={{ textIndent: '3em' }}>5.2)只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用。（还有一个地方可以调用 Hook —— 就是自定义的 Hook 中，我们稍后会学习到。）</p>
                <p style={{ textIndent: '3em' }}>5.3)自定义 Hook 是一个函数，其名称以 “use” 开头，函数内部可以调用其他的 Hook</p>
                <p style={{ textIndent: '3em' }}>5.4)自定义 Hook 不需要具有特殊的标识。我们可以自由的决定它的参数是什么，以及它应该返回什么（如果需要的话）。</p>
            </div>

            <div className="box"><h1>✌️7.useReducer：</h1>
                <p className="p3"><img src={p4} /></p>
                <p style={{ textIndent: '3em' }}>6.1)useState 的替代方案。它接收一个形如 (state, action) => newState 的 reducer，并返回当前的 state 以及与其配套的 dispatch 方法。（如果你熟悉 Redux 的话，就已经知道它如何工作了。）</p>
                <p style={{ textIndent: '3em' }}>6.2)当state 逻辑较复杂且包含多个子值，或者下一个 state 依赖于之前的 state时，可以用useReducer替代useState</p>
                <p style={{ textIndent: '3em' }}>6.3)指定初始 state</p>
                <p style={{ textIndent: '4em' }}>①将初始 state 作为第二个参数传入 useReducer 是最简单的方法：</p>
                <p className="p3"><img src={p5} /></p>
                <p style={{ textIndent: '4em' }}>②惰性初始化：你可以选择惰性地创建初始 state。为此，<b style={{ color: 'red' }}>需要将 init 函数作为 useReducer 的第三个参数传入</b>，这样初始 state 将被设置为 init(initialArg)。你可以选择惰性地创建初始 state。为此，需要将 init 函数作为 useReducer 的第三个参数传入，这样初始 state 将被设置为 init(initialArg)。</p>
                <p className="p3"><img src={p6} /></p>
                <p style={{ textIndent: '4em' }}>③跳过 dispatch： 如果 Reducer Hook 的返回值与当前 state 相同，React 将跳过子组件的渲染及副作用的执行。</p>
            </div>

            <div className="box"><h1>✌️8.useMemo</h1>
                <p className="p3"><img src={p7} /></p>
                <p style={{ textIndent: '3em' }}>理解：相比于直接在render里使用回调函数，使用useMemo，可以有效的避免不必要的再次渲染。把“创建”函数和依赖项数组作为参数传入 useMemo，它仅会在某个依赖项改变时才重新计算 memoized 值。这种优化有助于避免在每次渲染时都进行高开销的计算。</p>
                <p style={{ textIndent: '3em' }}>使用箭头函数</p>
                <p className="p3"><img src={p8} /></p>
                <p style={{ textIndent: '3em' }}>使用bind（）</p>
                <p className="p3"><img src={p9} /></p>
                <p style={{ textIndent: '3em' }}>以上两种方法，相同的效果，但是最终bind是优于箭头函数的，因为，箭头函数会在Foo每次重新渲染时，造成button的重绘。起因是每次render都会有个新的函数被创造。<br /> 但是bind方法只会在constructor时创造。</p>
                <p style={{ textIndent: '3em' }}>同理useMemo方法就如上面两种方法的bind方法一样。</p>
                <p style={{ textIndent: '3em' }}><b>如果没有提供依赖项数组（即useMemo的第二个参数），useMemo 在每次渲染时都会计算新的值。</b></p>
            </div>

            <div className="box"><h1>✌️9.useCallback</h1>
                <p style={{ textIndent: '3em' }}>useCallback(fn, deps) 相当于 useMemo(() => fn, deps)。</p>
                <p style={{ textIndent: '3em' }}><b>同useMemo的区别：</b></p>
                <p style={{ textIndent: '4em' }}>useCallback返回一个 memoized 回调函数。</p>
                <p style={{ textIndent: '4em' }}>useMemo返回一个 memoized 值。（可参考demo12）</p>
            </div>

            <div className="box"><h1>✌️10.useRef</h1>
                <p className="p3"><img src={p10} /></p>
                <p style={{ textIndent: '3em' }}>useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）。返回的 ref 对象在组件的整个生命周期内保持不变。</p>
                <p style={{ textIndent: '3em' }}>9.1)useRef() 比 ref 属性更有用。它可以很方便地保存任何可变值，其类似于在 class 中使用实例字段的方式。</p>
                <p style={{ textIndent: '3em' }}>9.2)当 ref 对象内容发生变化时，useRef 并不会通知你。变更 .current 属性不会引发组件重新渲染。</p>
                <p style={{ textIndent: '3em' }}>9.3)如果想要在 React 绑定或解绑 DOM 节点的 ref 时运行某些代码，则需要使用回调 ref 来实现。</p>
                <p className="p3"><img src={p11} /></p>
                <p style={{ textIndent: '4em' }}>如果你愿意，你可以 把这个逻辑抽取出来作为 一个可复用的 Hook:</p>
                <p className="p3"><img src={p12} /></p>
            </div>

            <div className="box"><h1>✌️11.useImperativeHandle</h1>
                <p className="p3"><img src={p13} /></p>
                <p style={{ textIndent: '3em' }}>useImperativeHandle 可以让你在使用 ref 时自定义暴露给父组件的实例值。在大多数情况下，应当避免使用 ref 这样的命令式代码。useImperativeHandle 应当与 forwardRef 一起使用：</p>
                <p className="p3"><img src={p14} /></p>
            </div>

            <h4>以下是demo</h4>
            <p style={{ color: 'red' }}>Demo：hook执行顺序</p>
            <HookOrder />
            <hr />

            <p style={{ color: 'red' }}>Demo1: 使用useLayoutEffect</p>
            <Demo1 />
            <hr />

            <p style={{ color: 'red' }}>Demo2：使用useLayoutEffect</p>
            <Demo2 />
            <hr />

            <p style={{ color: 'red' }}>Demo3：使用useContext</p>
            <Demo3 />
            <hr />

            <p style={{ color: 'red' }}>Demo4：使用useReducer</p>
            <Demo4 />
            <hr />

            <p style={{ color: 'red' }}>Demo5：useRef()</p>
            <Demo5 />
            <hr />

            <p style={{ color: 'red' }}>Demo6：自定义hook</p>
            <Demo6 />
            <hr />

            <p style={{ color: 'red' }}>Demo7：useState（使用useState改写上述例子）</p>
            <Demo7 />
            <hr />

            <p style={{ color: 'red' }}>Demo8：useState更新:setState会merge新老state，而hook中的set函数会直接替换</p>
            <Demo8 />
            <hr />

            <p style={{ color: 'red' }}>Demo9：使用useReducer实现相同的功能：</p>
            <Demo9 />
            <hr />

            <p style={{ color: 'red' }}>Demo10：使用useCallback：</p>
            <Demo10 />
            <hr />

            <p style={{ color: 'red' }}>Demo11：使用useRef记录一个回调函数</p>
            <Demo11 />
            <hr />

            <p style={{ color: 'red' }}>Demo12：useMemo.（以及useMemo和useCallback的区别）</p>
            <Demo12 />
            <hr />

            <p style={{ color: 'red' }}>Demo13: 为什么我会在我的函数中看到陈旧的 props 和 state ？</p>
            <Demo13 />
            <hr />

            <p style={{ color: 'red' }}>Demo14: 为什么我会在我的函数中看到陈旧的 props 和 state ？</p>
            <Demo14 />
            <hr />

            <p style={{ color: 'red' }}>Demo15: 使用useImperativeHandle()+forwardRef 向父组件：传递ref</p>
            <Demo15 />

            <p style={{ color: 'red' }}>Demo16: 使用useLayoutEffect（可参考第一个demo，了解useLayoutEffect和useEffect执行顺序）</p>
            <Demo16 />

            {/* <p style={{ color: 'red' }}>Demo17: 使用useDebugValue</p> */}
            <p style={{ color: 'red' }}>Demo17: 使用useRef存储上一轮props 或 state的值</p>
            <Demo17 />
        </React.Fragment>

    )

}
// hook执行顺序
function HookOrder() {
    const { useState, useEffect, useLayoutEffect } = React;
    const [s, sets] = useState(0)
    // useEffect(() => {
    //     console.log('渲染顺序：useEffect')

    //     return () => {
    //         console.log('渲染顺序：clear useEffect1')
    //     }
    // })

    // useEffect(() => {
    //     console.log('渲染顺序：useEffect2')

    //     return () => {
    //         console.log('渲染顺序：clear useEffect2')
    //     }
    // })
    // useLayoutEffect(() => {
    //     console.log('渲染顺序：useLayoutEffect');
    //     return () => {
    //         console.log('渲染顺序：clear useLayoutEffect')
    //     }
    // })

    // console.log('渲染顺序：render');

    return <button onClick={() => { console.log('渲染顺序：useState'); sets(s + 1) }}>click=>后台输出渲染顺序</button>
}

// demo1: useState 和 useEffect
function Demo1() {
    const { useState, useEffect } = React;
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `您点击了${count}次`;
    }, [])

    return (
        <>
            <div>您点击了{count}次</div>
            <button onClick={() => setCount(count + 1)}>点击</button>
        </>
    )
}

// demo2: useState 和 useEffect
function Demo2() {
    const { useState, useEffect } = React;

    const [isOnline, setOnline] = useState(null); // 登录状态

    const [account, setAccount] = useState(''); // 账户

    const [password, setPassword] = useState(''); // 密码

    const myref = React.createRef()
    useEffect(() => {

        const but = myref.current;

        if (but) {
            // but.onclick = function() {
            //     setOnline(true);
            // };

            if (account && password) {
                but.addEventListener('click', function () { setOnline(true) }, false);
            }

            return () => {
                // but.onclick = null;
                but.removeEventListener('click', () => setOnline(isOnline => !isOnline), false);
            }
        }

    })
    return (
        <>
            {
                !isOnline ?
                    <>
                        <div>
                            账号：<input type="value" placeholder="请输入账户"
                                value={account} onChange={(e) => setAccount(e.target.value)} />
                        </div>
                        <div>
                            密码：<input type="password" placeholder="请输入密码"
                                value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        {/* <button onClick={() =>setOnline(true)} >登录</button> */}
                        <button ref={myref} id="btn">登录</button>
                    </>
                    :
                    <>
                        <div>用户{account} 欢迎您！</div>
                        <button onClick={() => {
                            setOnline(isOnline => !isOnline);
                            setAccount("");
                            setPassword("");
                        }}>退出</button>
                    </>
            }
        </>
    )
}

// demo3: useContext()
const MyContext = React.createContext('orange')
function Demo3() {
    const { useContext } = React;
    const contextValue = useContext(MyContext); // 没有provider时，使用defaultValue
    return (
        <div style={{ color: contextValue }}>使用useContext获取context的值</div>
    )
}

// demo4: useReducer()
const initialState = { count: 0 };

function myReducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            return state;
    }
}

function Demo4() {
    const { useReducer } = React;

    const [state, dispatch] = useReducer(myReducer, initialState);
    let b = null;
    return (
        <div>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <p>count值：{state.count}</p>
        </div>
    )
}

// demo5：useRef()
function Demo5() {
    const { useRef, useState, useEffect } = React;
    const [count, setCount] = useState(0);

    const initialRef = null;
    const myref = useRef(initialRef);

    useEffect(() => {
        myref.current.innerHTML = count;
    })
    return (
        <>
            <button onClick={() => setCount(count + 1)}>click</button>
            <div ref={myref}></div>
        </>
    )
}

// demo6: 自定义hook
let initialData = [
    {
        name: '张三',
        id: 'a1',
        online: false
    },
    {
        name: '李四',
        id: 'a2',
        online: false
    },
    {
        name: '王五',
        id: 'a3',
        online: false
    }
]

function useGetState(d) {
    const [mydata, setMydata] = React.useState(d);

    function update(id) {
        const newData = mydata.map((item) => {
            return {
                ...item,
                online: id === item.id ? !item.online : item.online
            }
        });
        setMydata(newData);
    }

    return [mydata, update]
}

function Demo6() {
    const [newStates, update] = useGetState(initialData);

    return (
        <div>
            {
                initialData.map(d => {
                    return <label key={d.id}><input name="group" type="checkbox" value={d.id} onClick={(e) => {
                        // console.log(e.target.value)
                        // handleClick()
                        // setObj(Object.assign({}, d)) // 点击同一个对象时。强制更新
                        update(d.id) // 点击同一个对象时。强制更新

                    }}
                    />{d.name} </label>

                })
            }
            <ul style={{ margin: 0, padding: 0 }}>
                {

                    newStates && newStates.map(d => {
                        // console.log(newStates, '渲染时', d)
                        return <li key={d.id} style={{ listStyle: 'none' }}>
                            <span style={{
                                display: 'inline-block', width: 10, height: 10, borderRadius: '50%', margin: '0 30px',
                                background: (d.online ? '#8eb9f5' : '#ccc')
                            }}></span>
                            <span style={{ color: d.online ? '#8eb9f5' : '#ccc' }}>{d.name}{d.online ? ' 上线啦' : ' 离线中...'}</span>
                        </li>

                    })

                }
            </ul>
        </div>
    )
}
// demo7 使用useState改写上述例子
let initialData2 = [
    {
        name: '张三',
        id: 'd1',
        online: false
    },
    {
        name: '李四',
        id: 'e2',
        online: false
    },
    {
        name: '王五',
        id: 'f3',
        online: false
    }
]

function Demo7() {
    const { useState } = React;
    const [chooseState, setChooseState] = useState(initialData2);

    function changeState(d) {

        chooseState.map(dd => {
            if (dd.id == d.id) {
                dd.online = !d.online
            }
        })

        setChooseState([...chooseState])
    }

    return (
        <div>
            {
                initialData2.map(d => {
                    return <label key={d.id}><input name="group" type="checkbox" value={d.online} onClick={() => changeState(d)} />{d.name} </label>
                })
            }
            <ul style={{ margin: 0, padding: 0 }}>
                {

                    chooseState.map(d => {
                        return <li key={d.id} style={{ listStyle: 'none' }}>
                            <span style={{ display: 'inline-block', background: d.online ? '#8eb9f5' : '#ccc', width: 10, height: 10, borderRadius: '50%', margin: '0 30px' }}></span>
                            <span style={{ color: d.online ? '#8eb9f5' : '#ccc' }}>{d.name}{d.online ? ' 上线啦' : ' 离线中...'}</span>
                        </li>

                    })

                }
            </ul>
        </div>
    )
}

// demo8：useState更新:setState会merge新老state，而hook中的set函数会直接替换
function Demo8() {
    const { useState, useEffect } = React;
    const [count, setCount] = useState({ name: '张三', age: 12 });

    return (
        <>
            <input type="text" onChange={(ee) => {
                let value = ee.target.value
                setCount(prevCount => ({ name: value, age: prevCount.age })) // setState会merge新老state，而hook中的set函数会直接替换
                // 这就意味着如果state是对象时，每次set应该传入所有属性
            }} value={count.name} />
            <div>姓名:{count.name}</div>
        </>
    )
}

// demo9： 使用useReducer实现相同的功能
let initialState9 = [
    {
        name: '张三',
        id: 'd1111',
        online: false
    },
    {
        name: '李四',
        id: 'e21111',
        online: false
    },
    {
        name: '王五',
        id: 'f3111',
        online: false
    }
]

function reducer(state, action) {
    if (action) {

        const newState = state.map(d => {

            return {
                ...d,
                online: d.id == action ? !d.online : d.online
            }
        })

        return newState
    };
}

function init(data) {
    const newState = data.map(d => {
        return {
            ...d,
            online: d.id == 'f3111' ? !d.online : d.online
        }
    })

    return newState
}
function Demo9() {
    const { useReducer } = React;

    const [mystate, mydispatch] = useReducer(reducer, initialState9, init);

    return (
        <div>
            {
                mystate.map(d => {
                    return <label key={d.id}><input name="group" type="checkbox" value={d.id} defaultChecked={d.online}
                        onClick={(e) => {
                            mydispatch(e.target.value);
                        }}
                    />{d.name} </label>

                })
            }
            <ul style={{ margin: 0, padding: 0 }}>
                {

                    mystate && mystate.map(d => {
                        return <li key={d.id} style={{ listStyle: 'none' }}>
                            <span style={{
                                display: 'inline-block', width: 10, height: 10, borderRadius: '50%', margin: '0 30px',
                                background: (d.online ? '#8eb9f5' : '#ccc')
                            }}></span>
                            <span style={{ color: d.online ? '#8eb9f5' : '#ccc' }}>{d.name}{d.online ? ' 上线啦' : ' 离线中...'}</span>
                        </li>

                    })

                }
            </ul>
        </div>
    )
}

// demo10: 使用useCallback：
const { useState, useEffect, useCallback, useRef } = React;
function Demo10() {
    const [text, updateText] = useState('');
    const ref = useRef();

    useEffect(() => {
        ref.current = text;

    })
    const handleSubmit = useCallback(() => {
        console.log(ref.current, 'useCallback');
    }, [ref]);

    return (
        <>
            <input value={text} onChange={e => updateText(e.target.value)} />
            <button onClick={handleSubmit}>click</button>
        </>
    )
}

// demo11: 使用自定义hook
function Expensive(props) {
    // console.log('???')
    return (
        <button onClick={props.handle} >click</button>
    )
}

function Demo11() {
    const [text, updateText] = useState('');
    // 即便 `text` 变了也会被记住:
    const handleSubmit = useEventCallback(() => {
        // console.log(text, 'handleSubmit');
    }, [text]);

    // console.log('demo11: render')
    return (
        <>
            <input value={text} onChange={e => updateText(e.target.value)} />
            <Expensive handle={handleSubmit} />
        </>
    );
}

function useEventCallback(fn, dependencies) { // fn：为传递的第一个函数：() => {console.log(text, '自定义hook');}
    // dependencies：为第二个参数： [text]
    // console.log('自定义hook')
    const ref = useRef(() => {
        // console.log('??')
        throw new Error('Cannot call an event handler while rendering.');
    });
    useEffect(() => {
        ref.current = fn;
        // console.log('自定义hook内的：useEffect')

    }, [fn, ...dependencies]);

    return useCallback(() => {
        const fn = ref.current;
        // console.log('自定义hook内的：useCallback')

        return fn();
    }, [ref]);
}

// demo12：useMemo
function Demo12() {
    const [count, setCount] = useState(0);
    const [wordIndex, setWordIndex] = useState(0);

    const words = ['hey', 'this', 'is', 'cool'];
    const word = words[wordIndex];

    const computeLetterCount = word => {
        let i = 0;
        while (i < 1000000000) i++;
        return word.length;
    };

    const letterCount = React.useMemo(() => {
        return computeLetterCount(word);
    }, [word]);

    // console.log(React.useCallback(() => {  
    //     return computeLetterCount(word)
    // }, [word]))                                 // useCallback返回的是一个回调函数，

    // console.log(React.useMemo(() => {  
    //     return computeLetterCount(word)
    // }, [word]))                                 // useMemo返回的是一个值，

    return (
        <div style={{ padding: '15px' }}>
            <h2>Compute number of letters (slow 🐌)</h2>
            <p>"{word}" has {letterCount} letters</p>
            {/*在这个例子里letterCount只能用useMemo。因为useMemo返回了一个值，而useCallback返回了一个回调函数，但是letterCount的引用，只能是一个值 */}
            <button
                onClick={() => {
                    const next = wordIndex + 1 === words.length ? 0 : wordIndex + 1;
                    setWordIndex(next);
                }}
            >
                Next word
        </button>

            <h2>Increment a counter (fast ⚡️)</h2>
            <p>Counter: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

// demo13: 为什么我会在我的函数中看到陈旧的 props 和 state ？
const Demo13 = () => {
    const [temp, setTemp] = React.useState(5);

    const log = () => {
        setTimeout(() => {
            console.log("3 秒前 temp = 5，现在 temp =", temp);
        }, 3000);
    };

    return (
        <button
            onClick={() => {
                log();
                setTemp(3);
                // 3 秒前 temp = 5，现在 temp = 5
            }}
        >
            click
      </button>
    );
};

function Demo14() {
    const [count, setCount] = React.useState(0);

    function handleAlertClick() {
        setTimeout(() => {
            alert('You clicked on: ' + count);
        }, 3000);
    }

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
        </button>
            <button onClick={handleAlertClick}>
                Show alert
        </button>
        </div>
    );
}

// demo15：使用useImperativeHandle
function FancyInput(props, ref) {
    const inputRef = useRef();
    React.useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        }
    }));
    return <input ref={inputRef} />;

}
FancyInput = React.forwardRef(FancyInput);

class Demo15 extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }
    componentDidMount() {
        this.ref.current.focus();
        // console.log('聚集焦点');
    }
    render() {
        return (
            <FancyInput ref={this.ref} />
        )
    }
}
//demo16：使用useLayoutEffect
function Demo16() {
    const ref = React.useRef();
    const [b, setB] = React.useState(0)
    React.useLayoutEffect(() => {
        console.log('useLayoutEffect')

        const dom = ref.current;
        dom.innerHTML = '使用useLayoutEffect改变dom内容'
    });
    React.useEffect(() => {
        console.log('useEffect')
    })
    const change = React.useCallback(() => {
        console.log('useState')
        setB(b + 1)
    })
    console.log('render')
    return (
        <>
            <div ref={ref}>{b}</div>
            <button onClick={change}>点击触发useState</button>
        </>
    )
}

// demo17 useDefaultValue
// function useA(isShow) {

//     // 在开发者工具中的这个 Hook 旁边显示标签
//     React.useDebugValue(isShow);

//     switch (isShow) {
//         case 0:
//             return <p>在线啦</p>
//             break;
//         case 1:
//             return <p>下线了o(╥﹏╥)o</p>
//         default:
//             return <p>未知</p>
//             break;
//     }
// }

// function Demo17() {
//     const [isShow, setShow] = React.useState('');
//     const isOnline = useA(isShow);

//     return (
//         <div>
//             <div>性别:
// 		        <label><input type="radio" name="isShow" onChange={() => setShow(0)} />在线</label>
//                 <label><input type="radio" name="isShow" onChange={() => setShow(1)} />离线</label>
//             </div>
//             {isOnline}
//         </div>
//     )
// }

// demo17 使用useRef存储上一轮props 或 state的值
function Demo17() {
    const [state, setState] = React.useState(0);
    const ref = React.useRef(0);

    const handle = React.useCallback(() => {
        setState(state + 1)
    }, [state])
    React.useEffect(() => {
        ref.current = state;
    }, [state]);

    return (
        <>
            <div>now: state = {state}, before: state = {ref.current}</div>
            <button onClick={handle}>click</button>
        </>
    )
}