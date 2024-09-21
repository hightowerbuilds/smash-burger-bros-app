

import perfection from '../../images/browser/happyHomer.jpg'
import carCrusher from '../../images/browser/carCrusher.png'
import cheeseburger from '../../images/browser/cheeseburger.png'
import happyCow from '../../images/browser/happyCow.jpeg'
import foodTruck from '../../images/browser/foodTruck.png'
import NavBar from '../../components/NavBar/NavBar'
import './HomePage.css'


export default function HomePage() {
  return (
    <div className="homePageMainBox">

    <NavBar />


    <div className='homePageSectionOuterBox'>
      <div className='homePageSectionSubBox'>
      <img src={cheeseburger} />
      </div>
    </div>
  
<div className='homePageSectionOuterBox'>
  <div className='homePageDescription'>
    <h2 style={{ marginBottom: '1%'}}>Burgers so good you'll literally have a million!</h2>
 
  </div>
 
    <div className='homePageSectionSubBox'>

    </div>
</div>

<div className='homePageSectionOuterBox'>
  <div className='homePageDescription'>
    <h2 style={{ marginBottom: '1%'}}>THEY MAKE YOU SMARTER TOO??? test</h2>

  </div>
    </div>
    </div>  
  )
}
