import { useHistory } from 'react-router-dom'

import Button from 'components/Button'
import { Input } from 'components/Input'

function EditProfile(props) {
  const history = useHistory()

  const handleEdit = e => {
    e.preventDefault()
    history.push('/main')
  }

  return (
    <div className='card-page'>
      <h2 className='text-2xl font-bold'>Edit Profile</h2>
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
        <Input name='license' id='license' placeholder='Driving License Number' type='text' defaultValue='9126189361' />
        <Button type='submit'>Save</Button>
      </form>
    </div>
  )
}

export default EditProfile
