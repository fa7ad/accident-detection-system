import { useHistory } from 'react-router-dom'

import Button from 'components/Button'
import { Input } from 'components/Input'

function Edit({ location = { state: {} } }) {
  const { state = {} } = location
  const { profile, contact } = { profile: true, contact: false, ...state }

  const history = useHistory()

  const handleEdit = e => {
    e.preventDefault()
    history.push('/main')
  }

  return (
    <div className='card-page'>
      <h2 className='text-2xl font-bold'>Edit {profile ? 'Profile' : 'Emergency Contact'}</h2>
      {profile ? (
        <form action='#' className='mt-4 flex flex-col justify-center' onSubmit={handleEdit}>
          <label htmlFor='full_name' className='text-sm text-left'>
            Name
          </label>
          <Input name='full_name' id='full_name' placeholder='Full Name' type='text' defaultValue='John Doe' />
          <label htmlFor='dob' className='text-sm text-left'>
            Date of Birth
          </label>
          <Input name='dob' id='dob' placeholder='Date of birth' type='date' defaultValue='1997-03-26' />
          <label htmlFor='phone' className='text-sm text-left'>
            Phone Number
          </label>
          <Input name='phone' id='phone' placeholder='Phone Number' type='tel' defaultValue='+8801875787789' />
          <label htmlFor='license' className='text-sm text-left'>
            Driving License Number
          </label>
          <Input
            name='license'
            id='license'
            placeholder='Driving License Number'
            type='text'
            defaultValue='9126189361'
          />
          <Button type='submit'>Save</Button>
        </form>
      ) : null}
      {contact ? (
        <form action='#' className='mt-4 flex flex-col justify-center' onSubmit={handleEdit}>
          <label htmlFor='full_name' className='text-sm text-left'>
            Name
          </label>
          <Input name='full_name' placeholder='Full Name' type='text' defaultValue='Jane Doe' />
          <label htmlFor='phone' className='text-sm text-left'>
            Phone Number
          </label>
          <Input name='phone' placeholder='Phone Number' type='tel' defaultValue='+8801701227057' />
          <Button type='submit'>Save</Button>
        </form>
      ) : null}
    </div>
  )
}

export default Edit
