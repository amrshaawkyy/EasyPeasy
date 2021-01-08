import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';
const button = (props) => (
    <button
        disabled={props.disabled}
        className={["Button", props.btnType].join(' ')}
        onClick={props.clicked}>{props.children}
    </button>
);
button.propTypes = {
    disabled: PropTypes.bool,
    btnType: PropTypes.string,
    clicked: PropTypes.func,
    children: PropTypes.array
};
export default button; 