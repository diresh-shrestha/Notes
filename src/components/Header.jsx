import React from 'react';
import clsx from 'clsx';

import NoteAddIcon from '@material-ui/icons/NoteAdd';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CssBaseline from '@material-ui/core/CssBaseline';
import MiniDrawer from './Drawer';

import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hide: {
    display: 'none',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className="header">
          <IconButton
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
            aria-label="menu"
            color="inherit"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <h1 className={classes.title}>
            <NoteAddIcon />
            Notes
          </h1>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <MiniDrawer
        drawerOpen={handleDrawerOpen}
        drawerClose={handleDrawerClose}
        open={open}
      />
    </div>
  );
};

export default Header;
