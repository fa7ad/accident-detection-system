import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import EditIcon from '@material-ui/icons/Edit'
import LockIcon from '@material-ui/icons/Lock'
import HomeIcon from '@material-ui/icons/Home'
import NewUserIcon from '@material-ui/icons/PersonAdd'
import RescueIcon from '@material-ui/icons/SettingsRemote'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  makeStyles,
  List,
  ListItemIcon,
  ListItem,
  ListItemText,
  SwipeableDrawer
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  list: {
    width: 250
  }
}))

const NavList = ({ auth, setGlobalData, toggleDrawer }) => {
  const classes = useStyles()

  return (
    <div className={classes.list} role='presentation' onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      {auth ? (
        <List>
          <ListItem button>
            <ListItemIcon>
              <RescueIcon />
            </ListItemIcon>
            <Link to='/main'>
              <ListItemText primary='ADRS' />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <EditIcon />
            </ListItemIcon>
            <Link to='/edit-profile'>
              <ListItemText primary='Edit Profile' />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <EditIcon />
            </ListItemIcon>
            <Link to='/edit-emergency'>
              <ListItemText primary='Edit Emergency Contact' />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LockIcon />
            </ListItemIcon>
            <Link to='/' onClick={e => setGlobalData(p => ({ ...p, auth: false }))}>
              <ListItemText primary='Logout' />
            </Link>
          </ListItem>
        </List>
      ) : (
        <List>
          <Link to='/'>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary='ADRS' />
            </ListItem>
          </Link>
          <Link to='/register'>
            <ListItem button>
              <ListItemIcon>
                <NewUserIcon />
              </ListItemIcon>
              <ListItemText primary='Register' />
            </ListItem>
          </Link>
          <Link to='/login'>
            <ListItem button>
              <ListItemIcon>
                <LockIcon />
              </ListItemIcon>
              <ListItemText primary='Login' />
            </ListItem>
          </Link>
        </List>
      )}
    </div>
  )
}

const NavBar = ({ auth, title, setGlobalData, globalData }) => {
  const classes = useStyles()
  const history = useHistory()
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const goHome = () => {
    history.push(globalData?.auth ? '/main' : '/')
  }

  const handleMenuAction = key => e => {
    switch (key) {
      case 'edit':
        history.push('/edit-profile')
        break
      case 'emergency':
        history.push('/edit-emergency')
        break
      case 'logout':
        setGlobalData(p => ({ ...p, auth: false }))
        history.push('/')
        break
      default:
        console.log('uncaught menu event', { key })
    }
    handleClose()
  }

  const toggleDrawer = open => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setDrawerOpen(p => (open === 'toggle' ? !p : open))
  }

  return (
    <AppBar position='fixed'>
      <SwipeableDrawer anchor='left' open={drawerOpen} onClose={toggleDrawer(false)} onOper={toggleDrawer(true)}>
        <NavList auth={auth} toggleDrawer={toggleDrawer} setGlobalData={setGlobalData} />
      </SwipeableDrawer>
      <Toolbar>
        <IconButton
          edge='start'
          className={classes.menuButton}
          color='inherit'
          aria-label='menu'
          onClick={toggleDrawer('toggle')}>
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' className={classes.title} onClick={goHome}>
          {title}
        </Typography>
        {auth && (
          <div>
            <IconButton
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleMenu}
              color='inherit'>
              <AccountCircleIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={open}
              onClose={handleClose}>
              <MenuItem onClick={handleMenuAction('edit')}>Edit Profile</MenuItem>
              <MenuItem onClick={handleMenuAction('emergency')}>Emergency Contact</MenuItem>
              <MenuItem onClick={handleMenuAction('logout')}>Logout</MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
