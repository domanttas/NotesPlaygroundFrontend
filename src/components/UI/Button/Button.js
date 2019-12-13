import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
    let buttonClasses = [classes.Button];

    if (props.isSuccess) {
        buttonClasses.push(classes.Success);
    } else {
        buttonClasses.push(classes.Danger);
    }

    return (
        <button className={buttonClasses.join(' ')}
                onClick={props.clicked}>{props.title}
                </button>
    );
};

export default Button;