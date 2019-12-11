import React, { Fragment } from 'react';

import classes from './Layout.module.css';
import Toolbar from '../../components/UI/Toolbar/Toolbar';

const layout = (props) => {
    return (
        <Fragment>
            <Toolbar />
            <main className={classes.Content}>
                {props.children}
            </main>
        </Fragment>
    );
};

export default layout;