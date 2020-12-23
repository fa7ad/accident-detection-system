import { useHistory } from 'react-router-dom'

import Button from 'components/Button'
import { Input } from 'components/Input'

function Login() {
  const history = useHistory()

  const handleLogin = e => {
    e.preventDefault()
    history.push('/main')
  }

  return (
    <div className='card-page'>
      <h2 className='text-2xl font-bold'>Login</h2>
      <form action='#' className='mt-4 flex flex-col justify-center' onSubmit={handleLogin}>
        <Input name='username' placeholder='Username' type='text' />
        <Input name='password' placeholder='Password' type='password' />
        <Button type='submit'>Login</Button>
      </form>
    </div>
  )
}

export default Login
