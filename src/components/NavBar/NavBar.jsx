

import { NavLink } from "react-router-dom"
import './NavBar.css'

export default function NavBar() {
  return (
    <div> 
        
    <div className="NavBarMainBox"> 

<p style={{ width: '100%'}}>
<p className="NavBarTitle">Smash Burger Bros</p>
  <br />
  <div className="NavBarSubBox">
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
