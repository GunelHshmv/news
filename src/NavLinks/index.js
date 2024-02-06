import React, {   useState } from 'react';
import Customized from './Customized/Customized';
import {Box, Button} from '@mui/material'
import styles from '../Styles'

const NavLinks = () => {
    const [manual]=useState(['all', "business","sports","world","technology",'entertainment','science','national','hatke','politics',"automobile","miscellaneous","startup"])
   return <Box style={styles.bgImageStyle}>
       <h1 style={styles.h1Styles}>News</h1>
            <Box style={styles.cotegoriesStyles}>
                {
                 manual.map((item,index)=>(
                <Button key={index} >
                <Customized to={`/news/${item}`} text={item.charAt(0).toUpperCase() + item.slice(1)} />
                </Button>
                ))}
         </Box>
        </Box>
}
export default NavLinks;
