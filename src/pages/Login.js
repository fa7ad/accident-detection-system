import { useHistory } from 'react-router-dom'
import { Button, Container, makeStyles, TextField, Typography, Paper } from '@material-ui/core'

import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4, 2)
  },
  form: {
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}))

function Login({ setGlobalData }) {
  const history = useHistory()
  const classes = useStyles()

  const handleLogin = e => {
    e.preventDefault()
    setGlobalData(p => ({ ...p, auth: true }))
    history.push('/main')
  }

  return (
    <Container maxWidth='sm'>
      <Paper className={classes.root}>
        <Typography align='center' variant='h4' component='h1'>
          Login
        </Typography>
        <form action='#' className={clsx('mt-4 flex flex-col justify-center', classes.form)} onSubmit={handleLogin}>
          <TextField name='username' label='Username' variant='outlined' />
          <TextField name='password' label='Password' type='password' variant='outlined' />
          <Button variant='contained' color='primary' type='submit' size='large'>
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  )
}

export default Login
