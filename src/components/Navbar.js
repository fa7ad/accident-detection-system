import { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography, makeStyles } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

const NavBar = ({ auth, title, setData }) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const history = useHistory()
  const open = Boolean(anchorEl)

  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const goHome = () => {
    history.push('/')
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
        setData(p => ({ ...p, auth: false }))
        history.push('/')
        break
      default:
        console.log('uncaught menu event', { key })
    }
    handleClose()
  }

  return (
    <AppBar position='fixed'>
      <Toolbar>
        <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
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
