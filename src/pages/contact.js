import React from 'react'

import Header from '../components/header'
import Footer from '../components/footer'

const Contact = () => 
{
  return (
   <div>
     <Header />
     <h1>
       Contact
      </h1>
       <p>
         You can contact us by phone or facebook:
       </p>
       <p>
         Phone: (xx)xxxx-xxxx
       </p>
       <p>Facebook: <a href='https://www.facebook.com/Fernando.Yudi0/' target='_blank'>Fernando</a></p>
       <Footer />
   </div>
  )
}

export default Contact
