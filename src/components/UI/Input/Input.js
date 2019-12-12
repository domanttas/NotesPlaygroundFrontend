import React, { Fragment, useState } from 'react';

import classes from './Input.module.css';

const Input = (props) => {
    let [labelClasses, setLabelClasses] = useState([classes.Label]);

    return (
        <Fragment>
            <label htmlFor={props.id} className={labelClasses.join(' ')}>{props.placeHolder}</label>
            <input type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                className={classes.Input}
                onFocus={_ => setLabelClasses([classes.Label, classes.Focused])} />
        </Fragment>
    );
};

export default Input;