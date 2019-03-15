import React from 'react';

// const Child = () => (
//     <div ref="test">
//         <a ref="update">更新</a>
//     </div>
// )
class Child extends React.Component {
    render() {
        return (
            // <button ref="test">
            //     <a ref="update">更新</a>
            // </button>  
            <input type="text" />
        )
    }
}
export default class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.refss = React.createRef();

        this.doSomething = this.doSomething.bind(this);
        // console.log(this)
    }
    componentDidMount() {
        // console.log(this.refs, this.refs.child); // 访问挂载在组件上ref
        // console.log(this.refs.child.refs.update); // 访问挂载在dom元素上的ref
        // console.log(this.refs.child.refs.test); // 访问挂载在dom元素上的ref

        // console.log(this.refss.current.refs.update); // 访问挂载在组件上ref

    }
    doSomething() {
        console.log(this.input)
        // ref = this.refss;
        console.log(this.refss)
        // return React.createRef();
        // let dom = this.refs.child.refs.update;
        // dom.innerHTML('更新后')
    }
    render() {
        return (
            <div className='parent' >
                <Child 
                ref={(a) => this.div = a}
                onChange={this.doSomething}
                />
                {/* <Child ref={this.refss} /> */}
                {/* 111 */}
                {/* <input type="text" ref={a=>this.input = a} onChange={this.doSomething} /> */}
                <div  ref={a=>this.input = a} onClick={this.doSomething} style={{width: 100,height:100,border: '1px solid red' }}/>
            </div>
        )
    }
}