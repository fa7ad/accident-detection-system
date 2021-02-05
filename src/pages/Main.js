// import { useHistory } from 'react-router-dom'

import { Fragment, useEffect, useState } from 'react'

import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Paper,
  Select,
  Typography
} from '@material-ui/core'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faPencilAlt } from '@fortawesome/free-solid-svg-icons'

import Alert from 'utils/alert'

import personImg from 'assets/person.png'
import { DMP_BRANCHES } from 'utils/dmpData'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  },
  container: {
    padding: theme.spacing(2, 0)
  },
  select: {
    marginRight: theme.spacing(2)
  },
  infoGrid: {
    margin: theme.spacing(1, -1),
    '& section': {
      height: '100%'
    }
  }
}))

const Main = () => {
  // const history = useHistory()
  const classes = useStyles()
  const [area, setArea] = useState('mohammadpur')

  const policeInfo = DMP_BRANCHES?.[area]
  const phoneNums = policeInfo
    .match(/(?:Cell:[^0-9+]+)([0-9+]+)/g)
    .map(num => num.replace(/[^0-9+]/g, ''))
    .concat('999')

  const showAccidentAlert = createEmergencyAlert(phoneNums)

  const handleKeyPress = e => {
    if (e.key === '+') showAccidentAlert()
  }

  const handleManualReport = e => {
    e.preventDefault()
    showAccidentAlert()
  }

  useEffect(() => {
    document.body.addEventListener('keypress', handleKeyPress)
    return () => {
      document.body.removeEventListener('keypress', handleKeyPress)
    }
  }, [handleKeyPress])

  const areas = Object.keys(DMP_BRANCHES).map(value => ({
    label: value.replace(/^(\w)|\W(\w)/g, (g, w) => g.toUpperCase()),
    value
  }))

  const handleAreaSelect = e => setArea(e)

  return (
    <Container maxWidth='sm' className={classes.container}>
      <Paper className={classes.root}>
        <Typography variant='h5' align='center' component='h1'>
          Welcome to ADRS!
        </Typography>

        <Typography variant='body2' align='center' component='p' className='italic' color='textSecondary'>
          Press <kbd className='kbd'>+</kbd> to demo auto alert!
        </Typography>
        <Grid container fullWidth spacing={2} className={classes.infoGrid}>
          <Grid item xs={6}>
            <section className='profile'>
              <Link to='/edit-profile' className='button section__edit'>
                <FontAwesomeIcon icon={faPencilAlt} />
              </Link>
              <img className='profile__picture' src={personImg} alt='' />
              <p className='profile__name'>
                <b>Name: </b>John Doe
              </p>
              <p className='profile__license'>
                <b>Driving License Number: </b>9126189361
              </p>
            </section>
          </Grid>
          <Grid item xs={6}>
            <section className='emergency'>
              <Link to='/edit-emergency' className='button section__edit'>
                <FontAwesomeIcon icon={faPencilAlt} />
              </Link>
              <p className='text-lg'>Emergency Contact</p>
              <p className='emergency__name'>
                <b>Name: </b>Jane Doe
              </p>
              <p className='emergency__number'>
                <b>Phone Number: </b> +8801701227057
              </p>
            </section>
          </Grid>
        </Grid>

        <section className='flex'>
          <FormControl variant='outlined' fullWidth className={classes.select}>
            <InputLabel id='area-select-label'>Area</InputLabel>
            <Select
              name='area'
              id='area'
              labelId='area-select-label'
              onChange={handleAreaSelect}
              value={area}
              label='Area'>
              {areas.map(({ value, label }) => (
                <MenuItem value={value} key={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button variant='outlined' color='primary' size='large'>
            <FontAwesomeIcon icon={faLocationArrow} />
          </Button>
        </section>
        <section className='police' dangerouslySetInnerHTML={{ __html: policeInfo }} />
        <Button
          variant='contained'
          color='secondary'
          size='large'
          fullWidth
          className='mt-4'
          onClick={handleManualReport}>
          Manually Report Accident!
        </Button>
      </Paper>
    </Container>
  )
}
export default Main

function createEmergencyAlert(phoneNums) {
  return () =>
    Alert.fire({
      timer: 20e3,
      icon: 'warning',
      title: <span className='text-2xl'>Accident detected!</span>,
      html: (
        <>
          <div className='text-md'>
            If this was a mistake, click cancel.
            <br />
            Incident will be atomatically reported if not cancelled.
            <br />
            Your local Police station number is{' '}
            <a href={`tel:${phoneNums[0]}`}>
              <strong>{phoneNums[0]}</strong>
            </a>
          </div>
          <br />
          Other DMP numbers: <br />
          {phoneNums.slice(1).map(num => (
            <Fragment key={num}>
              <a href={`tel:${num}`}>
                <b>{num}</b>
              </a>
              <br />
            </Fragment>
          ))}
          <hr className='my-2' />
          <p className='text-sm'>Call Police</p>
          <section className='reporting -px-1'>
            {phoneNums.map((num, i) => (
              <a key={num} href={`tel:${num}`} className='p-1'>
                <Button variant='contained' color='primary'>
                  Call {num}
                </Button>
              </a>
            ))}
          </section>
          <hr className='my-2' />
          <p className='text-sm'>Emergency Contact</p>
          <section className='reporting'>
            <a href='tel:+8801701227057' className='px-1'>
              <Button variant='contained' color='secondary'>
                Call Emergency Contact
              </Button>
            </a>
            <a href='tel:+8801701227057' className='px-1'>
              <Button variant='contained' color='secondary'>
                Text Emergency Contact
              </Button>
            </a>
          </section>
        </>
      ),

      showCancelButton: true,
      showConfirmButton: false,
      timerProgressBar: true,
      allowOutsideClick: false
    }).then(val => {
      if (val.dismiss === Alert.DismissReason.timer) {
        const els = phoneNums.map(num => `<a href="tel:${num}"><b>${num}</b></a>`).join('<br />')
        const el$ = document.createElement('div')
        el$.innerHTML = els
        const pols = el$.querySelectorAll('a')
        pols[0].click()
        pols.forEach(number => setTimeout(() => number.click(), 15e3))
      }
    })
}
