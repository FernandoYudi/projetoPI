import React from 'react'

//import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'



const TechPage = () => {
    return (
        <Layout>
          <Head title='TechStack'/>
            <h1>Ferramentas Utilizadas</h1>
              <ol>
                   <li>
                     <h2>Operational System</h2>
                     <p>Windows 10 Pro</p>
                   </li>
                   <li>
                     <h2>Development/Application Platforms</h2>
                     <p>Visual Studio Code</p>
                     <p>JavaScript</p>
                     <p>Html</p>
                     <p>React</p>
                     <p>JSX</p>
                   </li>
                   <li>
                     <h2>Database System</h2>
                     <p>Git Bash</p>
                   </li>
              </ol>
        </Layout>
    )
}

export default TechPage