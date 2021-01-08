import React from 'react';
import Logo from "../../Logo/Logo";
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/AUX1/Aux1';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const sideDrawer = (props) => {
    let attachedClasses = ["SideDrawer", "Close"];
    if (props.open) {
        attachedClasses = ["SideDrawer", "Open"]
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className="LogoSide">
                    <Link to='/'>
                        <Logo /*height="80%"*/ />
                    </Link>
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};
sideDrawer.propTypes = {
    open: PropTypes.bool,
    closed: PropTypes.func
};
export default sideDrawer;