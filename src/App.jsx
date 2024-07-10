import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SearchBar from './components/SearchBar'


function App() {
  return (
    <div className='w-full h-screen bg-gray-200    '>
     
      <Navbar/>
      <SearchBar/>
      {/* <Hero/> */}
    </div>
  )
}

export default App