import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => {
    return (
          <Layout >
          <p>Want to contact a developer? <Link to ="/contact/">Contact</Link></p>
          <p>Hello! My name is Fernando Yudi Kikuchi, I am a College Student of computer science, I'm 18 years old currently, and a junior developer, 
             this page at the moment it isn't functioning as it as supposed to, so stay tunned and check out new alterations!!.</p>
          </Layout>
    )
}

export default AboutPage


  /* Metodo tradicional */

// import Header from '../components/header'
// import Footer from '../components/footer'
//    
//      <div>
//    <Header />
//          <p>
//          Want to contact a developer? <Link to ="/contact/">Contact</Link>
//          </p>
//          <p>
//              Hello! My name is Fernando Yudi Kikuchi, I am a College Student of computer science, I'm 18 years old currently, and a junior developer, 
//              this page at the moment it isn't functioning as it as supposed to, so stay tunned and check out new alterations!!.
//          </p>
//         <Footer />
//    </div>
//    )
// }


//style={{ color: `teal` }}
//headerText="About Fer" 
 
