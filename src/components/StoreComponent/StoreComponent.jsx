

import ShoppingCart from '../../components/ShoppingCart/ShoppingCart'
import Shirts from '../StoreAisles/Shirts/Shirts'
import Sweatshirts from '../StoreAisles/Sweatshirts/Sweatshirts'
import Hats from '../StoreAisles/Hats/Hats'
import Cooksbooks from '../StoreAisles/Cookbooks/Cookbooks'
import Aprons from '../StoreAisles/Aprons/Aprons'
import { useReducer } from 'react'
import './StoreComponent.css'

function reducer(state, action) {
    switch (action.type) {
        case 'incremented_age': {
          return {
            name: state.name,
            age: state.age + 1
          };
        }
        case 'changed_name': {
          return {
            name: action.nextName,
            age: state.age
          };
        } 
        case 'handle_cart': {
        return {
            toggle: true
        }        
        }
        case 'handle_close': {
            return {
                close: true
            }        
            }
      }
      throw Error('Unknown action: ' + action.type);
  }
  

export default function StoreComponent() {

    const [state, dispatch] = useReducer(reducer, {toggle: false, close: true });
   
    const handleClose = () => { dispatch({ type: 'handle_close', close: false, toggle: true})}
    const handleCart = () => { dispatch({ type: 'handle_cart', toggle: true, close: true})}
  

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
                    {   state.close 
                    ?   <button 
                            className='storeComponentSideBarButton' 
                            onClick={handleCart}>
                                show cart
                        </button> 
                    :   <button 
                            style={{ color: 'orange', backgroundColor: 'maroon'}} 
                            className='storeComponentSideBarButton' 
                            onClick={handleClose}>
                                close cart
                        </button>}
                </div>
                
                { state.toggle ? <ShoppingCart  /> : ''} 

                <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
                        {aisles.shirts}
                    </div>
                </div>
        </div>
       
    </div>
  )
}
