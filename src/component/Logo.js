import React from 'react';
import logo from '../img/Logo.png';
import { IconButton } from '@material-ui/core';

const Logo = () =>{
 return <IconButton>
     <img src={ logo } alt="Xiaomi" width={46} height= {46} />
  </IconButton>
}

export default Logo;