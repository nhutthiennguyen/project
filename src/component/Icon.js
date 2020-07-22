import React from 'react';
import IconHelp from './IconHelp';
import IconUser from './IconUser';
import IconCart from './IconCart';
import { Box } from '@material-ui/core';


const Icon = () =>{
    return (
       <Box display="flex">
            <IconHelp title="Help"/>
            <IconUser title="Sign In"/>
            <IconCart title="Shopping Cart"/>
        </Box>
    );
}
export default Icon;