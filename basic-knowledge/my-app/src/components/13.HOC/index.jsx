import React from 'react';

import p1 from './images/1.png';

export function HOC() {
    return (
        <React.Fragment>
            <div className="box"><h1>1.HOC概念：</h1>高阶组件（HOC）是 React 中用于复用组件逻辑的一种高级技巧。HOC 自身不是 React API 的一部分，它是一种基于 React 的组合特性而形成的设计模式。
                <p style={{ textIndent: '2em' }}>具体而言，高阶组件是参数为组件，返回值为新组件的函数。</p>
            </div>
            <hr/>
            以下是demo：
            <Render_Content />
            <Render_CommentList />
            <hr/>

            <ul className="box"><h1>2.注意：</h1>
                <li>HOC 不会修改传入的组件，也不会使用继承来复制其行为。相反，HOC 通过将组件包装在容器组件中来组成新组件。HOC 是纯函数，没有副作用。</li>
                <li>不要在 render 方法中使用 HOC</li>
                <li>务必复制静态方法:将 HOC 应用于组件时，原始组件将使用容器组件进行包装。这意味着新组件没有原始组件的任何静态方法。
                    <p>为了解决这个问题，你可以在返回之前把这些方法拷贝到容器组件上：</p>
                    <p className="p3"><img src={p1} /></p>
                </li>
                <li>Refs 不会被传递</li>
            </ul>
        </React.Fragment>

    )
}

// demo
let DataSource = {
    getComments: () => {

        return [
            '评论1', '评论2', '评论3', '评论4', '评论5',
        ];
    },
    getBlogPost: () => {
        return '文章内容：XXXXXXXXXXXX';
    },
    addChangeListener: () => { console.log('监听') },
    removeChangeListener: () => { console.log('清除') }
}

function withSubscription(Component, changeFunction) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: changeFunction(DataSource, props)
            };
        }
        componentDidMount() {
            DataSource.addChangeListener(this.handleChange);
        }
        componentWillUnmount() {
            DataSource.removeChangeListener(this.handleChange);
        }
        handleChange = () => {
            this.setState({
                data: changeFunction(DataSource, this.props)
            })
        }
        render() {
            const style = {
                marginBottom: '30px',
                textIndent: '1em'
            };
            return (
                <div style={style}>
                    <Component data={this.state.data} {...this.props} />
                </div>
            )
        }
    }
}
class Content extends React.Component {
    render() {
        return <div><h4>文章正文：</h4><p>{this.props.data}</p></div>
    }
}
const Render_Content = withSubscription(
    Content,
    (data) => {
        return data.getBlogPost()
    }
)

class CommentList extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <>
                <h4>评论列表：</h4>
                <ol>
                    {
                        data.map((d, i) => {
                            return <li key={i}>{d}</li>
                        })
                    }
                </ol>
            </>
        )
    }
}
const Render_CommentList = withSubscription(
    CommentList,
    (data) => {
        return data.getComments()
    }
)