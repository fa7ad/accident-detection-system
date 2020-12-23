// import { useHistory } from 'react-router-dom'

import { useEffect, useState } from 'react'

import Alert from 'utils/alert'
import Button from 'components/Button'

import personImg from 'assets/person.png'
import { DMP_BRANCHES } from 'utils/dmpData'

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
      timer: 60e3,
      icon: 'warning',
      title: <span className='text-2xl'>Accident detected!</span>,
      html:
        'If this was a mistake, click cancel.<br />' +
        'Incident will be atomatically reported if not cancelled.<br/>' +
        `Your local Police station number is <a href="tel:${phoneNums[0]}"><strong>${phoneNums[0]}</strong></a><br/><br/>` +
        `Other DMP numbers: <br/>` +
        phoneNums
          .slice(1)
          .map(num => `<a href="tel:${num}"><b>${num}</b></a>`)
          .join('<br />'),

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

  return (
    <div className='card-page'>
      <h2 className='text-2xl'>Welcome to AADS!</h2>
      <p className='text-gray-300 italic'>
        Press <kbd className='kbd'>+</kbd> to demo auto alert!
      </p>
      <section className='profile'>
        <img className='profile__picture' src={personImg} alt='' />
        <p className='profile__name'>
          <b>Name:</b> John Doe
        </p>
        <p className='profile__license'>
          <b>Driving License Number:</b> 9126189361
        </p>
      </section>
      <label htmlFor='area' className='w-100 text-gray-300 text-left mt-2'>
        Select you area
      </label>
      <select name='area' id='area' className='input-field' onChange={handleAreaSelect} value={area}>
        {areas.map(({ value, label }) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </select>
      <section className='police' dangerouslySetInnerHTML={{ __html: policeInfo }} />
      <Button variant='red' className='mt-4' onClick={handleManualReport}>
        Manually Report Accident!
      </Button>
    </div>
  )
}
export default Main
