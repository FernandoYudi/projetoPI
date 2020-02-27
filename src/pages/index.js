import React from 'react'
import { Link } from 'gatsby'

import Header from '../components/header'
import Footer from '../components/footer'

const IndexPage = () => {
 return (
     <div style = {{color: `purple`}}> 
           <Header />
         <h1>KCH TECH</h1>
           <h2>I'm Fernando.</h2>
             <p>
                 Wanna know more about? <Link to = '/about/'>About</Link>
             </p> 
             <p>
                 Need a developer?<Link to='/contact/'>Contact</Link>
             </p>
             <p>
                 Blog <Link to='/blog/'>Here</Link>
             </p>
             <Footer />
     </div>
     
 )
}

export default IndexPage
