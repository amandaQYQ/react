import React from 'react';
import PropTypes from 'prop-types';

const {Provider, Consumer} = React.createContext(defaultValue);

export default class ParentsContext extends React.Component {
    // static contextType = {
    //     propertyA: PropTypes.object,
    //     methodA: PropTypes.func
    // }
    // getChildContext() {
    //     return {
    //         PropertyA: {
    //             'backgroud': 'red',
    //             'color': 'yellow'
    //         },
    //         methodA: () => {
    //             let count = 0;
    //             console.log(count++);
    //         }
    //     }
    // }
    // constructor(props, context) {

    // }
    render() {
        return (
            <Provider value={
                PropertyA: {
                    'backgroud': 'red',
                    'color': 'yellow'
                },
                methodA: () => {
                    let count = 0;
                    console.log(count++);
                } 
            }>
            
                <p>这是context提供者</p>
                <Child />
        
            </Provider>
        )
    }
}

class Child extends React.Component {
    static contextType = {
        propertyA: PropTypes.object,
        methodA: PropTypes.func
    }
    render() {
        // const {
        //     propertyA,
        //     methodA
        // } = this.context;
        console.log(this.context)
        return (
            <Consumer>
                {/* <button style={{...propertyA}}
                    onClick={methodA}
                >这是context消费者</button> */}
            </Consumer>
        )
    }
}