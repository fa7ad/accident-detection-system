import Button from 'components/Button'
import { useHistory } from 'react-router-dom'

const Home = () => {
  const history = useHistory()

  const handleLogin = () => {
    history.push('/login')
  }

  const handleRegister = () => {
    history.push('/register')
  }

  return (
    <div className='card-page'>
      <h2 className='text-2xl'>Welcome!</h2>
      <h3 className='text-xl'>Please choose an option below.</h3>
      <div className='flex flex-col mt-4'>
        <Button variant='gray' onClick={handleLogin}>
          Login
        </Button>
        <div className='text-gray-300'>or</div>
        <Button variant='purple' onClick={handleRegister}>
          Register
        </Button>
      </div>
    </div>
  )
}
export default Home
