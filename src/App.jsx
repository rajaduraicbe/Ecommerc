import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Chef from './Components/Landingpage/Chef'
import Student from './Components/Landingpage/Student'
import AdvantagesSection from './Components/Landingpage/Advantages'
import HowItWorks from './Components/Landingpage/Howitswork'
import Hero from './Components/Landingpage/Hero'
import Hero from './Components/Landingpage/Hero'
import Benifits from './Components/Landingpage/Benifits'


import Explore from './Components/Landingpage/Explore'

const App = () => {
  return (
    <div>
     <Header />
     <Hero/>
     <Explore />
    <AdvantagesSection />
    <HowItWorks />
    <Chef />
    <Student />
   
     
     
     <Benifits/>
     <Footer />
     
   
    </div>
  )
}

export default App