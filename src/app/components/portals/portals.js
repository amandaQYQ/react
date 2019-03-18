import React from 'react';
import ReactDOM from 'react-dom';
import './portals.css';

const rooter = document.getElementById('root');
const mask = document.getElementById('mask');

class Mask extends React.Component {
    constructor(props) {
        super(props);
        this.newDom = document.createElement('div');
    };
    componentDidMount() {
        mask.appendChild(this.newDom);
    };
    componentWillUnmount() {
        mask.removeChild(this.newDom);
    };
    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.newDom
        );
    };
};

export default class Rooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            maskShow: false
        };
    }
    show() {
        this.setState({
            maskShow: true
        })
    }
    close() {
        this.setState({
            maskShow: false
        })
    }
    render() {
        const maskStyle = {
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, .2)',
            position: 'fixed',
            left: 0,
            top: 0,
            zIndex: 100
        }
        const mask = this.state.maskShow ?
            (
                <Mask>
                    <div style={{...maskStyle}}>
                        <button onClick={this.close.bind(this)} style={{width: 100, height: 30}}>收起</button>
                    </div>
                </Mask>
            ):null;
        
        return (
            <>
                <button onClick={this.show.bind(this)}>弹出</button>
                {mask}
            </>
        )
    }
}