import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import Logo from './Logo';
import Navigation from './Navigation';
import Search from './Search';
import Icon from './Icon';

const Header = () =>{
    return (
        <header>
            <AppBar >
                <Toolbar color="primary">
                    <Logo/>
                    <Navigation/>
                    <Search />
                    <Icon/>
                </Toolbar>
            </AppBar>
        </header>
    );
};
export default Header;