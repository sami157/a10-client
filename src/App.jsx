import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router'
import { Toaster } from 'react-hot-toast'


function App() {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <Outlet />
      <Footer />
      <Toaster />
    </div>
  )
}

export default App
