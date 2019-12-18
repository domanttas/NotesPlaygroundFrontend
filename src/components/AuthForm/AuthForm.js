import React, { Fragment } from 'react';

import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

import classes from './AuthForm.module.css';

const Form = (props) => {
    let error = props.hasError ? <p className={classes.Error}>{props.error}</p> : null;

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
                {error}
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