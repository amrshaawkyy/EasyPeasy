import React from 'react';
import './Backdrop.css'
import PropTypes from 'prop-types';
const backdrop = (props) => (
    props.show ? <div className="Backdrop" onClick={props.clicked}></div> : null
);
backdrop.propTypes = {
    clicked: PropTypes.func
};
export default backdrop;