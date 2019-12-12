import React, { useState } from 'react';

import Input from '../UI/Input/Input';
import Form from './Form/Form';

import classes from './Auth.module.css';

const Auth = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onEmailChangeHandler = (event) => {
        setEmail(event.target.value);
    };

    const onPasswordChangeHandler = (event) => {
        setPassword(event.target.value);
    };

    return (
        <div className={classes.Wrapper}>
            <Form email={email} password={password}
                changedEmail={(event) => onEmailChangeHandler(event)}
                changedPassword={(event) => onPasswordChangeHandler(event)}
                title="Sign Up"
                onSubmit={() => {}}
                isSuccess={true} />
        </div>
    );
};

export default Auth;