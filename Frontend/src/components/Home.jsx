import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarouse1 from './CategoryCarouse1'
import LatestJobs from './LatestJobs'
import Footer from './Footer'

export const Home = () => {
  return (
    <div>
    <Navbar/>
    <HeroSection/>
     <CategoryCarouse1/>
    <LatestJobs/> 
    <Footer/> 
    </div>
  )
}
