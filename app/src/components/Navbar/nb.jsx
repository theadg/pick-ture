import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

// mobile first baby <3
function Navbar() {
  const [state, setState] = React.useState({ right: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <nav className="w-screen px-8 py-5 flex justify-between ">
      <h3 className="font-main uppercase text-2xl">
        <span className="text-primary-blue">Pick</span>ture
      </h3>

      <React.Fragment key="right">
        <Button onClick={toggleDrawer('right', true)}>Tite</Button>
        <Drawer
          anchor={'right'}
          open={state['right']}
          onClose={toggleDrawer('right', false)}
        >
          {/* <List className="bg-secondary-bg">
            <ListItem>
              <ListItemButton>
                <ListItemText className="text-white" primary="Home" />
              </ListItemButton>
            </ListItem>
          </List> */}

          {/* TODO: hover effect */}
          <div className="w-60  bg-secondary-bg h-full p-8">
            <ul>
              <li className=" grid gap-4 font-sans items-center h-full">
                <a className="text-white " href="">
                  Home
                </a>
                <a className="text-white" href="">
                  Photos
                </a>
                <a className="text-white" href="">
                  Explore
                </a>
              </li>
            </ul>

            <button className="mt-5 bg-primary-blue p-2 rounded font-main text-sm w-full">
              Sign Up
            </button>
          </div>
        </Drawer>
      </React.Fragment>
      <div className="hidden" id="navMenu"></div>
    </nav>
  );
}

export default Navbar;
