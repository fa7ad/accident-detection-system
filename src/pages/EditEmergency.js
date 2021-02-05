import clsx from 'clsx'
import { useHistory } from 'react-router-dom'

import { Button, Container, Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core'

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

function EditEmergency(props) {
  const history = useHistory()
  const classes = useStyles()

  const handleEdit = e => {
    e.preventDefault()
    history.push('/main')
  }

  return (
    <Container maxWidth='sm'>
      <Paper className={classes.root}>
        <Typography align='center' variant='h4' component='h1'>
          Edit Emergency Contact
        </Typography>
        <form action='#' className={clsx('mt-4 flex flex-col justify-center', classes.form)} onSubmit={handleEdit}>
          <Grid container>
            <Grid item xs={12} sm={6} className='pr-2'>
              <TextField name='firstName' variant='outlined' fullWidth label='First Name' autoFocus />
            </Grid>
            <Grid item xs={12} sm={6} className='pl-2'>
              <TextField variant='outlined' fullWidth label='Last Name' name='lastName' />
            </Grid>
          </Grid>

          <TextField variant='outlined' fullWidth name='phone' label='Phone Number' type='tel' />

          <Button variant='contained' color='primary' size='large' type='submit'>
            Save
          </Button>
        </form>
      </Paper>
    </Container>
  )
}

export default EditEmergency
