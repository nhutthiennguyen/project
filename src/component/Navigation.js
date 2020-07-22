import React from 'react';


import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';

export default function Navigation1() {


  return (
        <Tabs
          variant="scrollable"
          scrollButtons="on"
         
        >
          <Tab label="Home" icon={<PhoneIcon />}  />
          <Tab label="Products" icon={<FavoriteIcon />}  />
          <Tab label="Item Three" icon={<PersonPinIcon />} />
          <Tab label="Item Four" icon={<HelpIcon />}  />
          <Tab label="Item Five" icon={<ShoppingBasket />}  />
        </Tabs>
  );
}

