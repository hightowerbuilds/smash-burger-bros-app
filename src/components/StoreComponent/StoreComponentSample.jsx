import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';
import Shirts from '../StoreAisles/Shirts/Shirts';
import Sweatshirts from '../StoreAisles/Sweatshirts/Sweatshirts';
import Hats from '../StoreAisles/Hats/Hats';
import Aprons from '../StoreAisles/Aprons/Aprons';
// import Cookbooks from '../StoreAisles/Cookbooks/Cookbooks'; // Assuming you have this component
import { useReducer } from 'react';
import './StoreComponent.css';

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_CART':
      return { ...state, cartVisible: action.payload };
    case 'TOGGLE_AISLE':
      return { ...state, selectedAisle: action.payload };
    // ... other actions as needed (e.g., for cookbooks)
  }
  throw Error('Unknown action: ' + action.type);
}

export default function StoreComponent() {
  const [state, dispatch] = useReducer(reducer, { 
    cartVisible: false, 
    selectedAisle: null, 
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
          {/* ... buttons for french, pnw cuisine, etc. 
               with appropriate onClick handlers */}
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
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
          {state.selectedAisle === 'shirts' && <Shirts />}
          {state.selectedAisle === 'sweatshirts' && <Sweatshirts />}
          {state.selectedAisle === 'hats' && <Hats />}
          {state.selectedAisle === 'aprons' && <Aprons />}
          {/* ... other aisles based on selectedAisle */}

          {/* ... potential rendering for cookbooks based on state */}
        </div>
      </div>
    </div>
  );
}