import React, { Fragment, useState } from 'react';

import NoteCard from '../../components/NoteCard/NoteCard';
import Button from '../../components/UI/Button/Button';
import Modal from '../../components/UI/Modal/Modal';
import NoteForm from '../../components/NoteForm/NoteForm';

import classes from './Dashboard.module.css';

const Dashboard = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onModalOpenedHandler = () => {
        setIsModalOpen(true);
    };

    const onModalClosedHandler = () => {
        setIsModalOpen(false);
    };

    let modal = <Modal show={isModalOpen} backdropClicked={onModalClosedHandler}>
        <NoteForm title={title} content={content} changedTitle={() =>{}} changedContent={() => {}} isSuccess={true} />
    </Modal>;

    return (
        <Fragment>
            <div className={classes.Wrapper}>
                <div className={classes.Dashboard}>
                    <NoteCard name="Get some" content="d fd sdsa sadas dasd sad sadasdsadasdas dsad asda dsad asdasdasd asdasd sad saf" date="2019-11-12" />
                    <NoteCard name="Get some" content="d fd sdsa sadas dasd sad sadasdsadasdas dsad asda dsad asdasdasd asdasd sad saf" date="2019-11-12" />
                    <NoteCard name="Get some" content="d fd sdsa sadas dasd sad sadasdsadasdas dsad asda dsad asdasdasd asdasd sad saf" date="2019-11-12" />
                    <NoteCard name="Get some" content="d fd sdsa sadas dasd sad sadasdsadasdas dsad asda dsad asdasdasd asdasd sad saf" date="2019-11-12" />
                    <NoteCard name="Get some" content="d fd sdsa sadas dasd sad sadasdsadasdas dsad asda dsad asdasdasd asdasd sad saf" date="2019-11-12" />
                    <NoteCard name="Get some" content="d fd sdsa sadas dasd sad sadasdsadasdas dsad asda dsad asdasdasd asdasd sad saf" date="2019-11-12" />
                    <NoteCard name="Get some" content="d fd sdsa sadas dasd sad sadasdsadasdas dsad asda dsad asdasdasd asdasd sad saf" date="2019-11-12" />
                    <NoteCard name="Get some" content="d fd sdsa sadas dasd sad sadasdsadasdas dsad asda dsad asdasdasd asdasd sad saf" date="2019-11-12" />
                    <NoteCard name="Get some" content="d fd sdsa sadas dasd sad sadasdsadasdas dsad asda dsad asdasdasd asdasd sad saf" date="2019-11-12" />
                    <NoteCard name="Get some" content="d fd sdsa sadas dasd sad sadasdsadasdas dsad asda dsad asdasdasd asdasd sad saf" date="2019-11-12" />
                    <NoteCard name="Get some" content="d fd sdsa sadas dasd sad sadasdsadasdas dsad asda dsad asdasdasd asdasd sad saf" date="2019-11-12" />
                    <NoteCard name="Get some" content="d fd sdsa sadas dasd sad sadasdsadasdas dsad asda dsad asdasdasd asdasd sad saf" date="2019-11-12" />
                </div>
                <span style={{ width: '20%' }}>
                    <Button isSuccess={true}
                            title="Create new note!"
                            clicked={onModalOpenedHandler} />
                </span>
            </div>
            {modal}
        </Fragment>
    );
};

export default Dashboard;