import { useHistory } from 'react-router-dom'

import Button from 'components/Button'
import { Input } from 'components/Input'

function EditEmergency(props) {
  const history = useHistory()

  const handleEdit = e => {
    e.preventDefault()
    history.push('/main')
  }

  return (
    <div className='card-page'>
      <h2 className='text-2xl font-bold'>Edit Emergency Contact</h2>
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
    </div>
  )
}

export default EditEmergency
