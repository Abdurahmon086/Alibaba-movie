import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Populer from './pages/Populer/Populer'
import SimglPage from './pages/Sigl-page/SimglPage'
import Upcoming from './pages/Upcoming/Upcoming'
import TopRated from './pages/TopRated/TopRated'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Populer />} />
        <Route path='/upcoming' element={<Upcoming />} />
        <Route path='/toprated' element={<TopRated />} />
        <Route path="/movie/" element={<SimglPage />} >
          <Route path="/movie/:populerId" element={<SimglPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
