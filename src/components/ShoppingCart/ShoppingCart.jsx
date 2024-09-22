
import './ShoppingCart.css'

export default function ShoppingCart() {
  return (
    <div className='shoppingCartMainBox'>
     
        <div className='shoppingCartCurrentBox'>
        <p style={{ padding: '5%', borderRadius: '2%'}}>
            <h3>
                current items
            </h3>
            <ul >
                <li>item one</li>
                <li>item two</li>
                <li>item three</li>
            </ul>
        </p>
        </div>

        <div className='shoppingCartInfoBox'>
            <p style={{ width: '100%',  background: 'inherit'}}> 
          <h3>information</h3>
            <br />
            name
            <br />
            <input className='shoppingCartInput' type="text" />
            <br />
            address
            <br /> 
            <input className='shoppingCartInput' type="text" />
            <br />
            <input className='shoppingCartInput' type='text'/>
            <br />
            <input className='shoppingCartInput' type="text" />
            </p>
            
        </div>

        <div className='shoppingCartCheckout'>
            
            <p style={{ background: 'inherit'}}>
                <h3>
                    Check Out
                </h3>
                <br />
                total : $100.00
                <br />
                <br />
                <button>
                    checkout
                </button>
            </p>

        </div>
    </div>
  )
}
