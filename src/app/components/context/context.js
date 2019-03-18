import React from 'react';

let count = 0;
const defaultValue = {
    propertyA: {
        'backgroud': 'red',
        'color': 'yellow'
    },
    methodA: () => {
        console.log(count++);
    }
}
const ThemeContext = React.createContext(defaultValue) // 如果有provider提供值，这里传值与否 都可

export default class ParentsContext extends React.Component {
    render() {
        const values = {
            propertyA: {
                'backgroud': 'blue',
                'color': 'yellow'
            },
            methodA: () => {
                console.log(count--);
            }
        }
        return (
            <ThemeContext.Provider value={values}> 
                {/* 一个 Provider 可以联系到多个 Consumers。Providers 可以被嵌套以覆盖组件树内更深层次的值。 */}
                {/* 从Provider到其后代的Consumers传播不受shouldComponentUpdate方法的约束，因此即使祖先组件退出更新时，后代Consumer也会被更新。 */}
                <Transition />
            </ThemeContext.Provider>

            // or

            // {/* 如果该组件没有provider 那么 value 参数将等于被传递给 createContext() 的 defaultValue 。 */ }
            // <Transition />

        )
    }
}

class Transition extends React.Component {
    render() {
        return (
            <div>
                <p style={{ fontWeight: 'bold' }}>22222</p>
                <Child />
            </div>
        )
    }
}

class Child extends React.Component {
    render() {
        return (
            <ThemeContext.Consumer >
                {/* {d=> { 
                    const { propertyA, methodA } = d

                    return <button {...this.props} 
                        style={{background: propertyA.backgroud, color: propertyA.color}}
                        onClick={methodA}
                    >111</button>
                }} */}
                {({ propertyA, methodA }) => { // 这样写，此处的值，需与传入provider的key相同

                    return <button {...this.props}
                        style={{ background: propertyA.backgroud, color: propertyA.color }}
                        onClick={methodA}
                    >111</button>
                }}
            </ThemeContext.Consumer>
        )
    }
}