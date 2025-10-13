import { Toaster } from 'react-hot-toast'
import './App.css'
import { ContactForm } from './components'

function App() {
  return (
    <>
      <div className='flex align-items-center min-h-screen bg-gray-400'>
        <ContactForm />
        <Toaster position='bottom-right'></Toaster>
      </div>
    </>
  )
}

export default App
