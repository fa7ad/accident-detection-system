import clsx from 'clsx'
import dayjs from 'dayjs'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { KeyboardDatePicker } from '@material-ui/pickers'
import { Button, Container, Grid, TextField, Paper, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4, 2)
  },
  form: {
    '& > *': {
      margin: theme.spacing(1, 0)
    }
  }
}))

function Register() {
  const history = useHistory()
  const classes = useStyles()

  const [dob, setDob] = useState(dayjs())

  const handleRegistration = e => {
    e.preventDefault()
    history.push('/main')
  }

  return (
    <Container maxWidth='sm'>
      <Paper className={classes.root}>
        <Typography align='center' variant='h4' component='h1'>
          Registration
        </Typography>
        <form
          action='#'
          className={clsx('mt-4 flex flex-col justify-center', classes.form)}
          onSubmit={handleRegistration}>
          <Grid container>
            <Grid item xs={12} sm={6} className='pr-2'>
              <TextField name='firstName' variant='outlined' required fullWidth label='First Name' autoFocus />
            </Grid>
            <Grid item xs={12} sm={6} className='pl-2'>
              <TextField variant='outlined' required fullWidth label='Last Name' name='lastName' />
            </Grid>
          </Grid>

          <KeyboardDatePicker
            autoOk
            required
            disableFuture
            inputVariant="outlined"
            format='DD/MM/YYYY'
            label='Date of Birth'
            views={['year', 'month', 'date']}
            onChange={d => setDob(d)}
            value={dob}
          />
          <TextField variant='outlined' required fullWidth name='phone' label='Phone Number' type='tel' />
          <hr />

          <TextField variant='outlined' required fullWidth label='Username' name='username' />
          <TextField variant='outlined' required fullWidth name='password' label='Password' type='password' />
          <TextField
            variant='outlined'
            required
            fullWidth
            name='confirm_password'
            label='Confirm Password'
            type='password'
          />
          <hr />

          <TextField variant='outlined' required fullWidth name='nid_number' label='NID Number' type='text' />
          <TextField
            variant='outlined'
            required
            fullWidth
            name='driving_license'
            label='Driving License Number'
            type='text'
          />

          <Button variant='contained' color='primary' size='large' type='submit'>
            Register
          </Button>
        </form>
      </Paper>
    </Container>
  )
}

export default Register
