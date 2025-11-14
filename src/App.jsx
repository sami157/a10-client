import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <div className='min-h-screen bg-[linear-gradient(80deg,#E0F2FE_0%,#FFFFFF_45%,#CFFAFE_100%)]'>
      <Navbar/>
      <Outlet/>
      <Footer/>
      <Toaster/>
    </div>
  )
}

export default App
