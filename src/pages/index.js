import React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
 return (
<div style = {{color: `purple`}}> 
<div>
    <h1>Blog do FannPapers</h1>
</div>
<h2>I'm Fernando.</h2>
<p>Wanna know more about? <Link to = "/about/">About</Link></p> 
<p>Need a developer?<Link to="/contact/">Contact</Link></p>
</div>
 )
}

export default IndexPage;
