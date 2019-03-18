import React from 'react';

export const Frags = function () {
    return (
        <>
            {/* Fragments 可以让你聚合一个子元素列表，并且不在DOM中增加额外节点。 */}
            <Child1 />
            <Child2 />
            <Child3 />
            {/* Fragments 看起来像空的 JSX 标签： */}
        </>
    );
};

const Child1 = () => <p>元素1</p>;
const Child2 = () => <p>元素2</p>;
const Child3 = () => <p>元素3</p>;

export class Table extends React.Component {
    render() {
        return (
            <table>
                <tr>
                    <Columns />
                </tr>
            </table>
        );
    }
}

class Columns extends React.Component {
    render() {
        return (
            <React.Fragment>
                <td>Hello</td>
                <td>World</td>
            </React.Fragment>
        );
    }
}

export class FragWithKey extends React.Component {
    render() {
        const data = [
            {
                term: 'A',
                description: 'a'
            },
            {
                term: 'B',
                description: 'b'
            },
            {
                term: 'C',
                description: 'c'
            },
        ]
        return (
            <dl>
                {
                    data.map((item,i) => (
                        <React.Fragment key={i}>
                            {/* <></> 语法不能接受键值或属性。 */}
                            {/* 如果你需要一个带 key 的片段，你可以直接使用 <React.Fragment /> */}
                            {/* 目前，key 是唯一可以传递给 Fragment 的属性 */}
                            <dt>{item.term}</dt>
                            <dd>{item.description}</dd>
                        </React.Fragment>
                    ))
                }
            </dl>
        )
    }
}