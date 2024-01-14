import React, { useContext, useState } from 'react';
import Customized from './Customized';
import {Box, Button} from '@mui/material'
import { styleContext } from '../ContextData/styleContext';
const NavLinks = () => {
    const [manual,setManual]=useState(['all', "business","sports","world","technology",'entertainment','science','national','hatke','politics',"automobile","miscellaneous","startup"])
    const {styles}=useContext(styleContext)
    return <Box style={styles.bgImageStyle}>
       <h1 style={styles.h1Styles}>News</h1>
            <Box style={styles.cotegoriesStyles}>
                {
                 manual.map((item)=>(
                <Button >
                <Customized to={`/category/${item}`} text={item.charAt(0).toUpperCase() + item.slice(1)} />
                </Button>
                ))}
         </Box>
        </Box>
   
 
}
export default NavLinks;