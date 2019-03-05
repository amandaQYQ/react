import React from 'react';
import PropTypes from 'prop-types';

const Inputs = function (props) {
    return <input
        {...props}
    />
}

Inputs.propTypes = {
    // type: React.PropTypes.string.isRequired,
    // value: React.PropTypes.string.isRequired,
    // onChange: React.PropTypes.func.isRequired
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    // onChange: PropTypes.func.isRequired
}

const Buttons = (props) =>
    <button {...props}>
        {props.children}
    </button>

const Uls = (props) => (
    <ul>
        {
            props.data && props.data.length > 0 ?
                props.data.map((d, i) => {
                    return <ol
                        key={i}
                        className={d.isShow ? 'show' : 'hide'}
                        onClick={() => props.onClick(i)} // 1 or 3 or 4
                        // onClick={props.onClick.bind(this, i)} // 2
                    >{d.value}</ol>
                })

                : null
        }
    </ul>
)
export { Inputs, Buttons, Uls };