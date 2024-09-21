

import { NavLink } from "react-router-dom"
import smashBurgerLogo from '../../images/browser/smashBurgerBrosSmall.png'
import './NavBar.css'

export default function NavBar() {
  return (
    <div> 
        
    <div className="NavBarMainBox"> 

    <NavLink className='NavBarLogo' to='/'><img src={smashBurgerLogo} /></NavLink>

<p style={{ width: '100%'}}>
  <h1 style={{ width: '100%', display: 'flex', justifyContent: 'center', fontFamily: 'courier'}}>Smash Burger Bros</h1>
  <br />
  <div className="NavBarSubBox">
    <NavLink className='NavBarFontSpecial' to='/'>HOME</NavLink>  
    <NavLink className='NavBarFontSpecial' to='/menu'>MENU</NavLink>
    <NavLink className='NavBarFontSpecial' to='/media'>CALENDAR</NavLink>
    <NavLink className='NavBarFontSpecial' to='/store'>STORE</NavLink>
    <NavLink className='NavBarFontSpecial' to='/'>HOME</NavLink>  
    <NavLink className='NavBarFontSpecial' to='/menu'>MENU</NavLink>
    <NavLink className='NavBarFontSpecial' to='/media'>CALENDAR</NavLink>
    <NavLink className='NavBarFontSpecial' to='/store'>STORE</NavLink>
    </div>
</p>
    
    </div>


    </div>
  )
}
