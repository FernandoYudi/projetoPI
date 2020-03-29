import React from 'react'

import Layout from '../components/layout'
import Image from "../images/fer.png"
import Image2 from "../images/joao.jpeg"
import Image1 from "../images/lucas.jpeg"

const AboutPage = () => {
    return (
          <Layout>
          <h1>Fernando Yudi</h1>
          <img src={Image} alt="este sou eu"/>
          <p>Hello! My name is Fernando Yudi Kikuchi, I am a College Student of computer science, I'm 19 years old currently live at my parents place, and a junior developer, 
             this page at the moment it isn't functioning as it as supposed to, so stay tunned and check out new alterations!!.</p>
             <h1>Lucas Cattar</h1>
             <img src={Image1} alt="este sou eu1"/>
          <p>Me chamo Lucas Cattar, atualmente estudo na UniFiL no curso de ciência da computação 
            e venho trabalhado em conjunto no desenvolvimento do blog para o Projeto Interdisciplinar.</p>
             <h1>João Vitor Nunes</h1>
             <img src={Image2} alt="este sou eu2"/>
          <p>Olá a todos, a você que está lendo aqui e agora, me chamo João Vitor Nunes sou estudante de ciência da computação UniFiL, já toquei triângulo em um banda de pagóde, 
            é um prazer demonstrar-lhes por meio desta apresentação como funciona nosso blog.</p>
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
 
