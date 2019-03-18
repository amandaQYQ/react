import React from 'react';

const theme = {
    light: {
        background: 'rgb(97, 218, 251)',
        color: '#c5a5c5'
    },
    dark: {
        background: 'yellow',
        color: 'red'
    }
};

const Context = React.createContext(theme);

export default class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            light: {
                background: 'rgb(97, 218, 251)',
                color: '#c5a5c5'
            },
            dark: {
                background: 'yellow',
                color: 'red'
            },
            useLight: true
        }
    }
    changeColor() {
        const { useLight } = this.state
        this.setState({
            useLight: !useLight
        })
    }
    render() {
        const { light, dark } = this.state
        return (
            <div>
                <button onClick={this.changeColor.bind(this)}>点击换色</button> 
                {/* 在 Consumer 中，当一个 Provider 的父节点重新渲染的时候，有一些问题可能触发意外的渲染。 */}
                {/* 为了防止这样, 提升 value 到父节点的 state里 */}
                <Context.Provider value={this.state.useLight ? light : dark}>
                    <Middle />
                </Context.Provider>
            </div>
        )
    }
}

function Middle() {
    return (
        <div>
            <p>这里是转换结果：</p>
            <Child />
        </div>
    )
}

function Child() {
    return (
        <Context.Consumer>
            {
                theme => (
                    <p style={{width: 100, height: 30, background: theme.background, color: theme.color}}>
                        1111
                    </p>
                )
            }
        </Context.Consumer>
    )
}