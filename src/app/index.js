import React from 'react';
// import ReactDOM from 'react-dom';

import './index.css';

// components
import { Inputs, Buttons, Uls } from './components';
import Parent from './components/test';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            map: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.toggleChange = this.toggleChange.bind(this); // 3
    }
    handleChange(e) {
        e.preventDefault();
        this.setState({
            inputValue: e.target.value,
            // map: this.state.map.push({inputValue: e.target.value}) // push返回的是新数组的长度
            // map: this.state.map.concat({inputValue: e.target.value}) // concat返回的是新数组
            // map: [...map, {value: e.target.value, isShow: true}]
        })

    }
    handleSubmit(e) {
        e.preventDefault();

        let { inputValue, map } = this.state;
        this.setState({
            inputValue: '',
            map: [...map, { value: inputValue, isShow: true }]
            // map: map.concat({value: inputValue, isShow: true})
        })
        console.log(this.state)

    }
    toggleChange = (i, e) => { // 4

        let { map } = this.state;
        map[i].isShow = !map[i].isShow
        this.setState({
            map: map
        })
    }
    // toggleChange(i, e) { // 1 or 2 or 3

    //     let { map } = this.state;
    //     map[i].isShow = !map[i].isShow
    //     this.setState({
    //         map: map
    //     })
    // }
    choseInvert() {
        let { map } = this.state;
        map.forEach(d => d.isShow = !d.isShow);
        this.setState({
            map: map
        })
    }
    showAll() {
        let { map } = this.state;
        map.forEach(d => d.isShow = true);
        this.setState({
            map: map
        })
    }
    hideAll() {
        let { map } = this.state;
        map.forEach(d => d.isShow = false);

        this.setState({
            map: map
        })
    }
    render() {
        const { inputValue, map } = this.state;
        return (
            <div>
                <Inputs
                    type="text"
                    value={inputValue}
                    onChange={this.handleChange}
                />
                <Inputs
                    type="button"
                    value="提交"
                    onClick={this.handleSubmit}
                />

                <Uls
                    data={map}
                    // onClick={(i) => this.toggleChange(i)} // 1
                    // onClick={this.toggleChange.bind(this)} // 2
                    onClick={this.toggleChange} // 3 or 4
                />

                <Buttons onClick={this.choseInvert.bind(this)}>反选</Buttons>
                <Buttons onClick={this.hideAll.bind(this)}>全隐藏</Buttons>
                <Buttons onClick={this.showAll.bind(this)}>全展示</Buttons>

                <Parent />
            </div>
        )

        // return (
        //     <div>
        //         <input
        //             type="text"
        //             value={inputValue}
        //             onChange={this.handleChange}
        //         />
        //         <input
        //             type="button"
        //             value="提交"
        //             onClick={this.handleSubmit}
        //         />
        //         <ul>
        //             {
        //                 map && map.length > 0 ?
        //                     map.map((d, i) => {
        //                         return <ol
        //                             key={i}
        //                             className={d.isShow ? 'show' : 'hide'}
        //                             onClick={this.toggleChange.bind(this, i)}
        //                         >{d.value}</ol>
        //                     })

        //                     : null
        //             }
        //         </ul>

        //         <button onClick={this.choseInvert.bind(this)}>反选</button>
        //         <button onClick={this.hideAll.bind(this)}>全隐藏</button>
        //         <button onClick={this.showAll.bind(this)}>全展示</button>
        //     </div>
        // )
    }
}