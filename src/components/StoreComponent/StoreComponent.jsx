

import ShoppingCart from '../../components/ShoppingCart/ShoppingCart'
import Shirts from '../StoreAisles/Shirts/Shirts'
import Sweatshirts from '../StoreAisles/Sweatshirts/Sweatshirts'
import Hats from '../StoreAisles/Hats/Hats'
import Cooksbooks from '../StoreAisles/Cookbooks/Cookbooks'
import Aprons from '../StoreAisles/Aprons/Aprons'
import { useState } from 'react'
import './StoreComponent.css'



export default function StoreComponent() {


const [ cart, setCart ] = useState(false);
const handleCart = () => {!cart ? setCart(true) : setCart(false)}
const [ aisle, setAisle ] = useState('')

const aisles = {
    shirts: <Shirts />,
    sweathshirts: <Sweatshirts />,
    hats: <Hats />,
    aprons: <Aprons />,
    cookbooks: <Cooksbooks/>,
  }


  return (
    <div>
        <div>
            <div className='storeComponentSideBarMainBox' >
                <h2>threads</h2>
                    <p>
                    <button className='storeComponentSideBarButton'>
                    shirts 
                    </button>
                    <br />
                    <button className='storeComponentSideBarButton'>
                    sweatshirts
                    </button>
                    <br />
                    <button className='storeComponentSideBarButton'>
                    hats
                    </button>
                    <br />
                    <button className='storeComponentSideBarButton'>
                    aprons
                    </button>
                    <br />
                    <button className='storeComponentSideBarButton'>
                    table cloths
                    </button>
                    </p>
    
                <h2>cook books</h2>
                    <p>
                    <button className='storeComponentSideBarButton'>
                    french
                    </button>
                    <br />
                    <button className='storeComponentSideBarButton'>
                    pnw cuisine
                    </button>
                    </p>

                <h2>checkout</h2>
                    
                    <button className='storeComponentSideBarButton' onClick={handleCart}>
                    show cart
                    </button>
            </div>
                { cart ? <ShoppingCart /> : ''} 
                {aisle}
        </div>
       
    </div>
  )
}
