
import './StorePage.css'
import NavBar from '../../components/NavBar/NavBar'
import SideBar from '../../components/SideBar/SideBar'
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart'
import { useState } from 'react'


export default function StorePage() {

const [ cart, setCart ] = useState(false);
const handleCart = () => {
    !cart ? setCart(true) : setCart(false)
}


  return (
    <div className='storePageMainBox'>
      <NavBar />

      <div className='storePageSideBarMainBox' >
        <SideBar />
        <h2>checkout</h2>
        <button style={{ width: '100%',}} onClick={handleCart}>
        show cart
      </button>
      </div>

      <div>

      </div>

     
    
     { cart ? <ShoppingCart /> : ''} 
    
    </div>

  )
}
