import React, { Component } from 'react';
import './Modal.css';
import Aux from '../../../hoc/AUX1/Aux1';
import Backdrop from '../Backdrop/Backdrop';
import PropTypes from 'prop-types';
class Modal extends Component {
    shouldComponentUpdate(nextProps,nextState){
        return nextProps.show!==this.props.show || nextProps.children!==this.props.children;
    }
    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div className="Modal"
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div >
            </Aux>
        );
    }
}
Modal.propTypes = {
    show: PropTypes.bool,
    children: PropTypes.array,
    modalClosed: PropTypes.func
};
export default Modal;