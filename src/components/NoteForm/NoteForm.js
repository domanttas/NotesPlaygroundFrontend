import React, { Fragment } from 'react';

import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import Datepicker from 'react-datepicker';

import classes from './NoteForm.module.css';

const NoteForm = (props) => {
    let error = props.hasError ? <p className={classes.Error}>{props.error}</p> : null;

    return (
        <Fragment>
            <h1 className={classes.Title}>Your Note</h1>
            <form className={classes.Form} onSubmit={props.onSubmit}>
                <div className={classes.InputWrapper}>
                    <Input type="text"
                        placeHolder="Enter note's title"
                        id="title"
                        value={props.title}
                        onChange={props.changedTitle} />
                </div>
                <div className={classes.InputWrapper}>
                    <Input type="text"
                        placeHolder="Enter note's content"
                        id="content"
                        value={props.content}
                        onChange={props.changedContent} />
                </div>
                <div className={classes.InputWrapper}>
                    <Input type="text"
                        id="date"
                        placeHolder="Enter due date"
                        value={props.date}
                        onChange={props.changedDate} />
                </div>
                {error}
                <div className={classes.ButtonWrapper}>
                    <Button title="Create"
                        clicked={props.onSubmit}
                        isSuccess={props.isSuccess} />
                </div>
            </form>
        </Fragment>
    );
};

export default NoteForm;