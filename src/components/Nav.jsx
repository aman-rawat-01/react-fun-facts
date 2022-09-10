import React from 'react'
import logo from './images/reactjs-icon.png';
const Nav = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" width= '29px' />
        <h1 style={{margin: '0 auto 0 5px',fontWeight: '700',
fontSize: '23px', color:'#61DAFB'}}>ReactFacts</h1>
        <h4 style={{color: '#DEEBF8',fontWeight: '600',
fontSize: '16px'}}>React-project-1</h4>
    </div>
  )
}

export default Nav