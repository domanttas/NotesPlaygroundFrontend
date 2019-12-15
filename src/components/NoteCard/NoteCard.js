import React, { useState } from 'react';

import classes from './NoteCard.module.css';
import Delete from '../../assets/delete.svg';

const NoteCard = (props) => {
    const [clicked, setClicked] = useState(false);

    const onDeleteNote = () => {
        setClicked(true);
        setTimeout(() => {
            props.deleteNote();
        }, 1000);
    };

    let activeClasses = [classes.NoteCard];

    if (props.isLate) {
        activeClasses.push(classes.Late);
    }

    return (
        <div className={activeClasses.join(' ')} style={{ opacity: clicked ? '0' : '1' }}>
            <div className={classes.Wrapper}>
                <h1 className={classes.Name}>{props.name}</h1>
                <img className={classes.ImgWrapper} src={Delete} alt="delete" onClick={onDeleteNote} />
            </div>
            <hr />
            <p align="justify" className={classes.Content}>{props.content}</p>
            <div className={classes.Bottom}>
                <hr />
                <p align="left" className={classes.Content}>Due to: {props.date}</p>
            </div>
        </div>
    );
};

export default NoteCard;