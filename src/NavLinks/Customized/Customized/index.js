import { Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../../Styles'
const Customized = ({to,text}) => {
    return <div>
        <NavLink to={to} >
            <Button variant="contained" style={styles.buttons}>{text}</Button>
        </NavLink>
    </div>;
}

export default Customized;