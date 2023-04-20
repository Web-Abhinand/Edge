import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div style={{width:'100%'}}>
        {/* <Link to="/" style={{marginLeft:'5px',marginRight:'5px'}}>Home</Link> */}
        <Link to="/about" style={{marginLeft:'5px',marginRight:'5px'}}>About</Link>
        <Link to="/contact" style={{marginLeft:'5px',marginRight:'5px'}}>Contact</Link>
        <Link to="/our-programs" style={{marginLeft:'5px',marginRight:'5px'}}>Our Programs</Link>
    </div>
  )
}

export default Header