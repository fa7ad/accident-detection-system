import { useHistory } from 'react-router-dom'

import Input from 'components/Input'
import Button from 'components/Button'

function Register() {
  const history = useHistory()

  const handleRegistration = e => {
    e.preventDefault()
    history.push('/main')
  }

  return (
    <div className='card-page sm:max-w-md'>
      <h2 className='text-2xl font-bold'>Registration</h2>
      <form action='#' className='mt-4 flex flex-col justify-center' onSubmit={handleRegistration}>
        <Input name='full_name' placeholder='Full Name' type='text' />
        <Input name='dob' placeholder='Date of birth' type='date' />
        <Input name='phone' placeholder='Phone Number' type='tel' />
        <hr />

        <Input name='username' placeholder='Username' type='text' />
        <Input name='password' placeholder='Password' type='password' />
        <Input name='confirm_password' placeholder='Confirm Password' type='password' />
        <hr />

        <Input name='nid_number' placeholder='NID Number' type='text' />
        <Input name='driving_license' placeholder='Driving License Number' type='text' />

        <Button type='submit'>Register</Button>
      </form>
    </div>
  )
}

export default Register
