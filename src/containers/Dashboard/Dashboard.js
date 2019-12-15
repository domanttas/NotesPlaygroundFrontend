import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';

import NoteCard from '../../components/NoteCard/NoteCard';
import Button from '../../components/UI/Button/Button';
import Modal from '../../components/UI/Modal/Modal';
import NoteForm from '../../components/NoteForm/NoteForm';

import * as actionTypes from '../../store/actions/actionTypes';

import classes from './Dashboard.module.css';
import Spinner from '../../components/UI/Spinner/Spinner';
import moment from 'moment';

const Dashboard = (props) => {
    useEffect(() => {
        props.onFetchNotes();
    }, []);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState('');

    const onModalOpenedHandler = () => {
        setIsModalOpen(true);
    };

    const onModalClosedHandler = () => {
        setIsModalOpen(false);
    };

    const onTitleChangedHandler = (event) => {
        setTitle(event.target.value);
    };

    const onContentChangedHandler = (event) => {
        setContent(event.target.value);
    };

    const onDateChangedHandler = (event) => {
        setDate(event.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        props.onAddNote({
            title: title,
            content: content,
            date: date.toString()
        });

        setTitle('');
        setContent('');
        setDate('');

        setIsModalOpen(false);
    };

    const calculateProgress = (date) => {
        if (moment(date).isAfter(moment())) {
            return false;
        }

        return true;
    };

    const deleteNoteHandler = (note) => {
        props.onDeleteNote(note._id);
    };

    let modalOutput = (
        <NoteForm title={title}
            content={content}
            date={date}
            onSubmit={event => onFormSubmit(event)}
            changedTitle={event => onTitleChangedHandler(event)}
            changedContent={event => onContentChangedHandler(event)}
            changedDate={event => onDateChangedHandler(event)}
            isSuccess={true} />
    );

    if (props.loading) {
        modalOutput = <Spinner />;
    }

    let modal = <Modal show={isModalOpen} backdropClicked={onModalClosedHandler}>
        {modalOutput}
    </Modal>;

    let errorModal = <Modal show={props.error} backdropClicked={props.onClearError}>{props.error ? props.error.message : null}</Modal>

    return (
        <Fragment>
            <div className={classes.Wrapper}>
                <div className={classes.Dashboard}>
                    {props.notes.map(note => {
                        return <NoteCard key={note._id}
                            name={note.title}
                            content={note.content}
                            date={note.date}
                            deleteNote={() => deleteNoteHandler(note)}
                            isLate={calculateProgress(note.date)} />
                    })}
                </div>
                <span style={{ width: '20%' }}>
                    <Button isSuccess={true}
                        title="Create new note!"
                        clicked={onModalOpenedHandler} />
                </span>
            </div>
            {modal}
            {errorModal}
        </Fragment>
    );
};

const mapStateToProps = state => {
    return {
        notes: state.note.notes,
        error: state.note.error,
        loading: state.note.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddNote: (note) => dispatch({ type: actionTypes.ADD_NOTE, note: note }),
        onFetchNotes: () => dispatch({ type: actionTypes.FETCH_NOTES }),
        onClearError: () => dispatch({ type: actionTypes.NOTE_CLEAR_ERROR }),
        onDeleteNote: (id) => dispatch({ type: actionTypes.NOTE_REMOVE_SAGA, id: id })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);