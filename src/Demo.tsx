import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { blue } from '@material-ui/core/colors';
import { inherits } from 'node:util';
import intel from './intel-header-logo.svg'
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import HeaderProfile from './HeaderProfile'
import HeaderSearch from './HeaderSearch'
import { NavLink } from "react-router-dom";
import { SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';


type route = {
    path: string;
    sidebarName: string;
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
    component: () => JSX.Element;
}[]
type prop = {
  routes : route
}

const drawerWidth = 180;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    paper: {
        background: "#3f51b5",
        color: '#FFFF',
      },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    menuButton: {
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth+10,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(7),
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      paddingLeft:100
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    logo:{
        height: 50,
        maxWidth: 100,
        color: 'inherit',
        marginRight:20
    },
    actions:{
      marginLeft:'auto',
      alignItems:'center',
      display:'flex',
    },
    
  }),
);

export default function MiniDrawer(route:prop) {
  const classes = useStyles();
  const routes = route['routes']
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawer = (open: any) => {
    if(open)
    setOpen(false);
    else
     setOpen(true);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => handleDrawer(open)}
            edge="start"
            style={{marginRight:'10px',marginLeft:'-20pxs'}}
          >
            <MenuIcon className={clsx(classes.menuButton,{
                [classes.hide]: open,
              })}/>
            <ChevronLeftIcon  className={clsx(classes.menuButton,{
                [classes.hide]: !open,
              })}/>
          </IconButton>
          <img src={intel} alt="intel-logo" className={classes.logo}/>
          <Typography variant="h6" noWrap>
            AppBar
          </Typography>
          <div className={classes.actions}>
            <HeaderSearch/>
            <HeaderProfile/>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
            [classes.paper]:true,
          }),
          
        }}
      >
        <div className={classes.toolbar}>
          {/* <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton> */}
        </div>
        <Divider />
        <div className={classes.root}>
          <List component="nav" aria-label="main mailbox folders" style={{ width:'100%' }}>
            {routes.map(({ path, sidebarName, ...prop }, index) => {

              return (
                <NavLink to={path} key={`route-${index}}`} style={{ textDecoration: 'none'}}>
                  <ListItem button key={sidebarName}>
                    <ListItemIcon style={{ color: '#fff' }}>
                      <prop.icon style={{ color: '#fff' }}/>
                    </ListItemIcon>
                    <ListItemText primary={sidebarName} style={{ color: '#fff' }} />
                  </ListItem>
                </NavLink>
              );
            })}
          </List>
        </div>
        {/* <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon >{index % 2 === 0 ? <MoveToInboxIcon style={{ color: '#fff' }}/> : <MailIcon style={{ color: '#fff' }}/>}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
        <Divider />
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon style={{ color: '#fff' }}/> : <MailIcon style={{ color: '#fff' }}/>}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      </div>
  );
}
