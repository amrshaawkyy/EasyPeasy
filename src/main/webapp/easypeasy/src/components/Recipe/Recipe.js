import React from 'react';
import './Recipe.css';
import styled from 'styled-components'

const recipe = (props) => {
    function ColorLuminance(hex, lum) {
        hex = String(hex).replace(/[^0-9a-f]/gi, '');
        if (hex.length < 6) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        lum = lum || 0;
        var rgb = "#", c, i;
        for (i = 0; i < 3; i++) {
            c = parseInt(hex.substr(i * 2, 2), 16);
            c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
            rgb += ("00" + c).substr(c.length);
        }
        return rgb;
    }

    const Title = styled.p`
         &:before {
        background: ${'#30BE76'};
        color: ${ColorLuminance('FF0000', -0.5)};
         }
    //     `;
    // const handleClick = (props) => {
    //     const onEditModal = props.onEditModal;
    //     onEditModal();
    // }
    return (
        <div className="Card">
            <Title style={{fontWeight: 'bold'}}
                   data-letters={props.recipe.recipeName.charAt(0)}/>
            <p style={{fontWeight: 'bold'}}>Recipe Name: {props.recipe.recipeName}</p>
            <p>CreatedBy: {props.recipe.createdBy}</p>
            {props.recipe.createdBy == localStorage.getItem("userId") &&
            <button className="buttonEdit" bsStyle="warning" onClick={props.onEditModal}>Edit
            </button>}
        </div>
    );
}
export default recipe;