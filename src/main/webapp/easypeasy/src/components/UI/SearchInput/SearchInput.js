import React from 'react';
import classes from './SearchInput.css';

const searchInput = (props) => {
    return (
        <div className={classes.main}>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet" />
            <div className={["form-group", classes.has_search].join(' ')} >
                <span className={["fa fa-search", classes.form_control_feedback].join(' ')}></span>
                <input type="text" className={[classes.form_control]} placeholder={props.placeholder} onChange={props.changed} />
            </div>
        </div>
    );
}
export default searchInput;