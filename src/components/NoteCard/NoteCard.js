import React from 'react';

import classes from './NoteCard.module.css';

const NoteCard = (props) => {
    return (
        <div className={classes.NoteCard}>
            <h1 className={classes.Name}>{props.name}</h1>
            <hr />
            <p align="justify" className={classes.Content}>{props.content}</p>
            <div className={classes.Bottom}>
                <hr />
                <p align="left" className={classes.Content}>{props.date}</p>
            </div>
        </div>
    );
};

export default NoteCard;