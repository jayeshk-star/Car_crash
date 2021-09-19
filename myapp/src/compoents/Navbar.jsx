import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'red'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  link: {
    color: '#fff',
    padding: '0px 10px',
    textDecoration: 'none'
  },
  appbar: {
    backgroundColor: 'black'
  }
}))

const Navbar = () => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.root}>
        <AppBar position='static' className={classes.appbar}>
          <Toolbar>
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='inherit'
              aria-label='menu'
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' className={classes.title}>
              Car crash
            </Typography>
            <Link className={classes.link} to='/'>
              Home
            </Link>
            <Link className={classes.link} to='/contact'>
              Contact
            </Link>
            <Link className={classes.link} to='/about'>
              About
            </Link>
            <Link className={classes.link} to='/login'>
              Login
            </Link>
           
          </Toolbar>
        </AppBar>
      </div>
    </div>
  )
}

export default Navbar
