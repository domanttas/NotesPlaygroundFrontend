import React, { Fragment } from 'react';

import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';

import classes from './Form.module.css';

const Form = (props) => {
    return (
        <Fragment>
            <h1 className={classes.Title}>{props.title}</h1>
            <form className={classes.Form} onSubmit={props.onSubmit}>
                <div className={classes.InputWrapper}>
                    <Input type="email"
                        placeHolder="Enter your email"
                        id="email"
                        value={props.email}
                        onChange={props.changedEmail} />
                </div>
                <div className={classes.InputWrapper}>
                    <Input type="password"
                        placeHolder="Enter your password"
                        id="password"
                        value={props.password}
                        onChange={props.changedPassword} />
                </div>
                <div className={classes.ButtonWrapper}>
                    <Button title={props.title}
                        clicked={props.onSubmit}
                        isSuccess={props.isSuccess} />
                </div>
                <div className={classes.ButtonWrapper}>
                    <Button title={props.switchTitle}
                        clicked={props.onModeSwitch}
                        isSuccess={props.isSuccess}
                        className={classes.ButtonSwitch} />
                </div>
            </form>
        </Fragment>
    );
};

export default Form;