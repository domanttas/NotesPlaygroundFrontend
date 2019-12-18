import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Form from '../../components/AuthForm/AuthForm';
import * as actionTypes from '../../store/actions/actionTypes';
import Spinner from '../../components/UI/Spinner/Spinner';
import Modal from '../../components/UI/Modal/Modal';

import classes from './Auth.module.css';

const Auth = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(true);

    const [inputError, setInputError] = useState('');
    const [hasInputError, setHasInputError] = useState(false);

    useEffect(() => {
        setPassword('');
        setEmail('');
    }, [props.error]);

    const onEmailChangeHandler = (event) => {
        setEmail(event.target.value);
    };

    const onPasswordChangeHandler = (event) => {
        setPassword(event.target.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (email.trim() === '' || password.trim() === '') {
            setHasInputError(true);
            setInputError('Please fill out all fields');
            return;
        }

        props.onAuthUser({
            email,
            password
        }, isSignUp);
    };

    const onSwitchModeHandler = (event) => {
        event.preventDefault();
        setIsSignUp(prevState => !prevState);
    };

    let output = (
        <Form email={email} password={password}
            changedEmail={(event) => onEmailChangeHandler(event)}
            changedPassword={(event) => onPasswordChangeHandler(event)}
            title={isSignUp ? 'Sign Up' : 'Sign In'}
            onSubmit={(event) => onSubmitHandler(event)}
            isSuccess={true}
            switchTitle={isSignUp ? 'Switch to Sign In' : 'Switch to Sign Up'}
            onModeSwitch={(event) => {onSwitchModeHandler(event)}}
            error={inputError}
            hasError={hasInputError} />
    );

    if (props.loading) {
        output = <Spinner />;
    }

    let authRedirect = null;

    if (props.isAuthenticated) {
        authRedirect = <Redirect to="/" />;
    }

    let error = <Modal show={props.error}
        backdropClicked={props.onErrorCleared}>{props.error ? props.error : null}</Modal>;

    return (
        <div className={classes.Wrapper}>
            {authRedirect}
            {error}
            {output}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.isAuthenticated
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuthUser: (authData, isSignUp) => dispatch({
            type: actionTypes.AUTH_USER,
            isSignUp: isSignUp,
            authData: authData
        }),
        onErrorCleared: () => dispatch({ type: actionTypes.AUTH_CLEAR_ERROR })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);