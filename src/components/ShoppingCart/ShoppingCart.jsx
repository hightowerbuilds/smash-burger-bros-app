
import './ShoppingCart.css'

export default function ShoppingCart(props) {
  return (
    <div className='shoppingCartMainBox'>
        {props.button}
        <div className='shoppingCartCurrentBox'>
        <p style={{margin: '1%', padding: '1%', }}>
            <h3>current items</h3>
        </p>
        <p style={{padding: '5%', margin: '1%'}}>
                <p>item one</p>
                <p>item two</p>
                <p>item three</p>
        </p>
        </div>

        <div className='shoppingCartInfoBox'>
            <p style={{ width: '100%',  background: 'inherit'}}> 
          <h3 style={{ padding: '1%'}} >information</h3>
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
                    check out
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
