import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { Link } from 'gatsby'

const AboutPage = () => {
    return (
   <div style={{ color: `teal` }}>
     <Header headerText="About Fer" />
         <p>
         Want to contact a developer? <Link to ="/contact/">Contact</Link>
         </p>
        <Footer />
   </div>
   )
}

export default AboutPage;