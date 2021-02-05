import clsx from 'clsx'
import { useHistory } from 'react-router-dom'
import { makeStyles, Button, Container, Typography, Grid, Paper } from '@material-ui/core'

import logo from 'logo.svg'

const useStyles = makeStyles(theme => ({
  logoImage: {
    width: '10em'
  },
  root: {
    padding: theme.spacing(4, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  }
}))

const Home = () => {
  const classes = useStyles()
  const history = useHistory()

  const handleLogin = () => {
    history.push('/login')
  }

  const handleRegister = () => {
    history.push('/register')
  }

  return (
    <Container maxWidth='sm'>
      <Paper className={classes.root}>
        <img src={logo} alt='' className={clsx('mb-4 mx-auto', classes.logoImage)} />

        <Typography component='h1' variant='h2' align='center' color='textPrimary' gutterBottom>
          Welcome
        </Typography>
        <Typography variant='subtitle1' align='center' color='textSecondary' paragraph>
          ADRS is an application that uses your smartphone's sensors and an innovative algorithms to detect, report and
          rescue you from a potentially fatal vehicular accident.
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify='center'>
            <Grid item>
              <Button color='primary' variant='contained' onClick={handleRegister}>
                Register
              </Button>
            </Grid>
            <Grid item>
              <Button color='primary' variant='outlined' onClick={handleLogin}>
                Login
              </Button>
            </Grid>
          </Grid>
        </div>
      </Paper>
    </Container>
  )
}
export default Home
