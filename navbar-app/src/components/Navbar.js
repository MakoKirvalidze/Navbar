import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home, Person, Settings, Help } from '@mui/icons-material';

const NavItem = ({ Icon, label }) => (
  <ListItem button>
    <ListItemIcon>
      <Icon />
    </ListItemIcon>
    <ListItemText primary={label} />
  </ListItem>
);

const Navbar = ({ isVertical = false, className = '', navItems = [] }) => {
  const directionStyles = isVertical ? { flexDirection: 'column', width: '200px' } : { flexDirection: 'row' };

  return (
    <List 
      className={className} 
      sx={{ display: 'flex', ...directionStyles, backgroundColor: 'grey.900', color: 'white' }}
    >
      {navItems.map((item, index) => (
        <NavItem key={index} Icon={item.Icon} label={item.label} />
      ))}
    </List>
  );
};

export default Navbar;
