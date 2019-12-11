import React from 'react';

import { Link } from 'react-router-dom';

import logo from '../../../assets/note.svg';
import classes from './Toolbar.module.css';

const toolbar = (props) => {
    return (
        <header className={classes.Header}>
            <div className={classes.Title}>
                <img src={logo} alt="Logo" />
                <span className={classes.TitleText}>Note's Manager</span>
            </div>
            <nav>
                <Link to="/" className={classes.NavigationItem}>Dashboard</Link>
                <Link to="/" className={classes.NavigationItem}>Assigned</Link>
                <Link to="/" className={classes.NavigationItem}>Authentication</Link>
            </nav>
        </header>
    );
};

export default toolbar;