
import Aisle from '../Aisle/Aisle'
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';
import Shirts from '../StoreAisles/Shirts/Shirts';
import Sweatshirts from '../StoreAisles/Sweatshirts/Sweatshirts';
import Hats from '../StoreAisles/Hats/Hats';
import Aprons from '../StoreAisles/Aprons/Aprons';
import PnwCuisine from '../StoreAisles/Cookbooks/PnwCuisine/PnwCuisine';
import DeepGriddle from '../StoreAisles/Cookbooks/DeepGriddle/DeepGriddle'; // Assuming you have this component
import { useReducer } from 'react';
import './StoreComponent.css';

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_CART':
      return { ...state, cartVisible: action.payload };
    case 'TOGGLE_AISLE':
      return { ...state, selectedAisle: action.payload };
  }
  throw Error('Unknown action: ' + action.type);
}

export default function StoreComponent() {
  const [state, dispatch] = useReducer(reducer, { 
    cartVisible: false, 
    selectedAisle: 'shirts', 
  });

  const handleCartToggle = () => { 
    dispatch({ type: 'TOGGLE_CART', payload: !state.cartVisible });
  };

  const handleAisleSelect = (aisleName) => {
    dispatch({ type: 'TOGGLE_AISLE', payload: aisleName }); 
  };

  // ... (Potential handlers for cookbooks, etc.)

  return (
    <div>
      <div className='storeComponentSideBarMainBox'>

        <h2>threads</h2>
        <p>
            <button className='storeComponentSideBarButton' onClick={() => handleAisleSelect('shirts')}>
            shirts 
            </button>
            <button className='storeComponentSideBarButton'  onClick={() => handleAisleSelect('sweatshirts')}>
            sweatshirts
            </button>
            <br />
            <button className='storeComponentSideBarButton'  onClick={() => handleAisleSelect('hats')}>
            hats
            </button>
            <br />
            <button className='storeComponentSideBarButton'  onClick={() => handleAisleSelect('aprons')}>
            aprons
            </button>
            <br />
       
        </p>

        <h2>cook books</h2>
            <p>
            <button className='storeComponentSideBarButton' onClick={() => handleAisleSelect('pnw')}>
                pnw cuisine
            </button>
            <button className='storeComponentSideBarButton' onClick={() => handleAisleSelect('deepGriddle')}>
                deep griddle
            </button>
            </p>

        <h2>checkout</h2>
            <button 
            className='storeComponentSideBarButton' 
            onClick={handleCartToggle}
            >
            {state.cartVisible ? 'Close Cart' : 'Show Cart'} 
            </button>

      </div>

      {state.cartVisible && <ShoppingCart />} 

      <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginLeft: '2%'}}>
            {/* {state.selectedAisle === 'shirts' && <Shirts />}
            {state.selectedAisle === 'sweatshirts' && <Sweatshirts />}
            {state.selectedAisle === 'hats' && <Hats />}
            {state.selectedAisle === 'aprons' && <Aprons />}
            {state.selectedAisle === 'pnw' && <PnwCuisine />}
            {state.selectedAisle === 'deep_griddle' && <DeepGriddle />} */}
            {<Aisle heading={'test'} aisle={true} />}
            </div>
      </div>
    </div>
  );
}