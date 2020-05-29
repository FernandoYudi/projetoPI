import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'

//import './header.module.scss'

import headerStyles from './header.module.scss'
// import headerStylesIndex from '../styles/index.scss'

const Header = () => {
    const data = useStaticQuery(graphql`
      query{
          site{
            siteMetadata{
                title
            }
          }
      }
    `)
   return (
    <header className={headerStyles.header}>
           <h1>
               <Link className = {headerStyles.title} to='../fertrab/'>
                   {data.site.siteMetadata.title}
                </Link>
               </h1>
           <nav>
               <ul className = {headerStyles.navList}>
                   <li>
                      <Link className ={headerStyles.navItem} activeClassName = {headerStyles.activeNavItem} to ='../fertrab/'>Home</Link>
                   </li>
                   <li>
                       <Link className ={headerStyles.navItem} activeClassName = {headerStyles.activeNavItem} to ='../fertrab/blog/'>Blog</Link>
                   </li>
                   <li>
                      <Link className ={headerStyles.navItem} activeClassName = {headerStyles.activeNavItem} to ='../fertrab/projects/'>Projetos</Link>
                   </li>
                   <li>
                       <Link className ={headerStyles.navItem} activeClassName = {headerStyles.activeNavItem} to='../fertrab/about/'>About</Link>
                   </li>
                   <li>
                      <Link className ={headerStyles.navItem} activeClassName = {headerStyles.activeNavItem} to='../fertrab/contact/'>Contact</Link> 
                   </li>
                   <li>
                      <Link className ={headerStyles.navItem} activeClassName = {headerStyles.activeNavItem} to ='../fertrab/techstack/'>Tech Stack</Link>
                   </li>
               </ul>
           </nav>
       </header>
    //    <header className={headerStyles.header}>
    //        <h1>
    //            <Link className = {headerStyles.title} to='/'>
    //                {data.site.siteMetadata.title}
    //             </Link>
    //            </h1>
    //        <nav>
    //            <ul className = {headerStyles.navList}>
    //                <li>
    //                   <Link className ={headerStyles.navItem} activeClassName = {headerStyles.activeNavItem} to ='/'>Home</Link>
    //                </li>
    //                <li>
    //                    <Link className ={headerStyles.navItem} activeClassName = {headerStyles.activeNavItem} to ='/blog'>Blog</Link>
    //                </li>
    //                <li>
    //                   <Link className ={headerStyles.navItem} activeClassName = {headerStyles.activeNavItem} to ='/projects'>Projetos</Link>
    //                </li>
    //                <li>
    //                    <Link className ={headerStyles.navItem} activeClassName = {headerStyles.activeNavItem} to='/about'>About</Link>
    //                </li>
    //                <li>
    //                   <Link className ={headerStyles.navItem} activeClassName = {headerStyles.activeNavItem} to='/contact'>Contact</Link> 
    //                </li>
    //                <li>
    //                   <Link className ={headerStyles.navItem} activeClassName = {headerStyles.activeNavItem} to ='/techstack'>Tech Stack</Link>
    //                </li>
    //            </ul>
    //        </nav>
    //    </header>
   )
}

export default Header

