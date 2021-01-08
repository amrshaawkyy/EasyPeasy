import React from 'react';
import './Toolbar.css';
import Logo from "../../Logo/Logo";
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const toolbar = (props) => {

    return (
        <header className="Toolbar">
            <DrawerToggle clicked={props.drawerToggleClicked}/>
            <div className="LogoToolBar">
                <Link to='/Home'>
                    <Logo /*height="80%"*/ />
                </Link>
            </div>
            <div className="RightSideItems">
                <nav className="DestopOnly">
                    <NavigationItems/>
                </nav>
                <nav className="MobileOnly">
                </nav>

            </div>
        </header>
    );
}
toolbar.propTypes = {
    drawerToggleClicked: PropTypes.func
};
export default toolbar;  