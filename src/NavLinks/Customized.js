import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { styleContext } from '../ContextData/styleContext';
const Customized = ({to,text}) => {
    const {styles}=useContext(styleContext)
    return <div>
        <NavLink to={to} >
            <Button variant="contained" style={styles.buttons}>{text}</Button>
        </NavLink>
    </div>;
}

export default Customized;