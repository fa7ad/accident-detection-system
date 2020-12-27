// import { useHistory } from 'react-router-dom'

import { Fragment, useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faPencilAlt } from '@fortawesome/free-solid-svg-icons'

import Alert from 'utils/alert'
import Button from 'components/Button'

import personImg from 'assets/person.png'
import { DMP_BRANCHES } from 'utils/dmpData'
import { Link } from 'react-router-dom'

const Main = () => {
  // const history = useHistory()
  const [area, setArea] = useState('mohammadpur')

  const policeInfo = DMP_BRANCHES?.[area]
  const phoneNums = policeInfo
    .match(/(?:Cell:[^0-9+]+)([0-9+]+)/g)
    .map(num => num.replace(/[^0-9+]/g, ''))
    .concat('999')

  const showAccidentAlert = () =>
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
          <section className='reporting'>
            {phoneNums.map((num, i) => (
              <a key={num} href={`tel:${num}`} className={`button ${['', 'blue', 'indigo', 'red'][i % 4]}`}>
                Call {num}
              </a>
            ))}
          </section>
          <hr className='my-2' />
          <p className='text-sm'>Emergency Contact</p>
          <section className='reporting'>
            <a href='tel:+8801701227057' className='button red'>
              Call Emergency Contact
            </a>
            <a href='tel:+8801701227057' className='button red'>
              Text Emergency Contact
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

  const handleAreaSelect = e => setArea(e.target.value)

  const profileEdit = {
    pathname: '/edit',
    state: {
      profile: true
    }
  }
  const contactEdit = {
    pathname: '/edit',
    state: {
      profile: false,
      contact: true
    }
  }

  return (
    <div className='card-page'>
      <h2 className='text-2xl'>Welcome to AADS!</h2>
      <p className='text-gray-300 italic'>
        Press <kbd className='kbd'>+</kbd> to demo auto alert!
      </p>
      <section className='profile'>
        <Link to={profileEdit} className='button section__edit'>
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
      <section className='emergency'>
        <Link to={contactEdit} className='button section__edit'>
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
      <label htmlFor='area' className='w-100 text-gray-300 text-left mt-2'>
        Select you area
      </label>
      <section className='flex items-center'>
        <select name='area' id='area' className='input-field' onChange={handleAreaSelect} value={area}>
          {areas.map(({ value, label }) => (
            <option value={value} key={value}>
              {label}
            </option>
          ))}
        </select>
        <Button className='ml-2'>
          <FontAwesomeIcon icon={faLocationArrow} />
        </Button>
      </section>
      <section className='police' dangerouslySetInnerHTML={{ __html: policeInfo }} />
      <Button variant='red' className='mt-4' onClick={handleManualReport}>
        Manually Report Accident!
      </Button>
    </div>
  )
}
export default Main
