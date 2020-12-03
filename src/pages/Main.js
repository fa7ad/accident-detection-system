// import { useHistory } from 'react-router-dom'

import { useEffect } from 'react'

import Alert from 'utils/alert'
import Button from 'components/Button'

const Main = () => {
  // const history = useHistory()

  const showAccidentAlert = () =>
    Alert.fire({
      timer: 15e3,
      icon: 'warning',
      title: <h2 className='text-2xl'>Accident detected!</h2>,
      html:
        'If this was a mistake, click cancel.<br />' +
        'Incident will be atomatically reported in 15 seconds if not cancelled.',
      showCancelButton: true,
      showConfirmButton: false,
      timerProgressBar: true,
      allowOutsideClick: false
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

  return (
    <div className='card-page'>
      <h2 className='text-2xl'>Welcome to AADS!</h2>
      <p className='text-gray-300 italic'>
        Press <kbd>+</kbd> to demo auto alert!
      </p>
      <Button variant='red' className="mt-4" onClick={handleManualReport}>
        Report Accident!
      </Button>
    </div>
  )
}
export default Main
