import React from 'react';
import './NavigationItems.css';
import active from '../../Images/message.png';
import ContactSupport from '../../Images/ContactSupport.png';
import power from '../../Images/power.png';
import user from '../../Images/user2.png';
import Vector from '../../Images/Vector2.png';
import Button from "../../UI/Button/Button";
import {Link} from "react-router-dom";

const navigationItems = () => {
    const handleClick = () => {
        localStorage.clear();
    }
    return (
        <ul className="NavigationItems">
            <img src={Vector} alt="EasyPeasyLogo"/>
            <img src={ContactSupport} alt="EasyPeasyLogo"/>
            <img className="msgs" src={active} alt="EasyPeasyLogo"/>
            <img className="user" src={user} alt="EasyPeasyLogo"/>
            <Link to='/'><Button className="btn"
                                 btnType="Success" clicked={handleClick}> <img src={power} alt="EasyPeasyLogo"/>
            </Button></Link>

        </ul>
    );
}
export default navigationItems;