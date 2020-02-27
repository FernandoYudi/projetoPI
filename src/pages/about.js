import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

const AboutPage = () => {
    return (
   <div style={{ color: `teal` }}>
    <Header headerText="About Fer" />
    <p>Want to contact a developer? <Link to ="/contact/">Contact</Link></p>
   </div>
   )
}

export default AboutPage;