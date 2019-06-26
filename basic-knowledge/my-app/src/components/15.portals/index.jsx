import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import p1 from './images/1.png';
// import p2 from './images/2.png';
// import p3 from './images/3.png';
// import p4 from './images/4.png';

export function Portals() {
    return (
        <React.Fragment>
            <div className="box"><h1>1.Portal：</h1>Portal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案。
                <p className="p3"><img src={p1} /></p>
            </div>
            <hr/>
            <p>以下是demo</p>
            <Father />
        </React.Fragment>

    )
}
// demo
class Father extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false
        }
    }
    handleShow = () => {
        this.setState(state => ({
            isShow: !state.isShow
        }));
    }
    render() {
        const b = new Mask()

        return (
            <>
                <div className="portals" id="portals">
                    <div className="left">
                        <button onClick={this.handleShow}>open</button>

                    </div>

                    <div className="center">
                        <div>content：XXXXXXXXXXXXXXXXXX</div>
                    </div>
                </div>
                <div id="node">
                    {
                        this.state.isShow && this.dom
                    }
                </div>
            </>
        )
    }
    componentDidMount() {
        this.node = document.getElementById('node');
        if (this.node) {
            this.dom = ReactDOM.createPortal(
                <Mask handle={this.handleShow} />,
                this.node
            )
        }
    }
    componentWillUnmount() {
        this.node = null;
        this.dom = null;
    }
}

class Mask extends React.Component {
    a(){
        console.log('a')
    }
    render() {
        return (
            <div className="mask" id="mask">
                <div className="popup">这是一个弹框</div>
                <button onClick={this.props.handle}>close</button>
            </div>
        )
    }
}