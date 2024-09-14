import React from 'react';
import Navbar from './components/Navbar';
import { Home, Person, Settings, Help } from '@mui/icons-material'; // Import icons

function App() {
  const navItems = [
    { Icon: Home, label: 'Home' },
    { Icon: Person, label: 'Profile' },
    { Icon: Settings, label: 'Settings' },
    { Icon: Help, label: 'Help' },
  ];

  return (
    <div>
      {/* Horizontal Navbar */}
      <Navbar isVertical={false} className="custom-horizontal-navbar" navItems={navItems} />
      
      {/* Vertical Navbar */}
      <Navbar isVertical={true} className="custom-vertical-navbar" navItems={navItems} />
    </div>
  );
}

export default App;
