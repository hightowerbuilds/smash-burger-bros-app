
import NavBar from '../../components/NavBar/NavBar'
import './HomePage.css'
import Carousel from '../../components/Carousel/Carousel'


export default function HomePage() {
  return (
    <div className="homePageMainBox">

      <NavBar />

        <div className='homePageSectionOuterBox'>
          <div className='homePageSectionSubBox'>
            <Carousel />
          </div>
        </div>
          
        <div className='homePageSectionOuterBox'>
          <div className='homePageDescription'>
            Smash Burger Bros : Description
          </div>
          <div className='homePageSectionSubBox'>
          <Carousel />
          </div>
        </div>

        <div className='homePageSectionOuterBox'>
          <div className='homePageDescription'>
          Smash Burger Bros : Description
          </div>
        </div>
    </div>  
  )
}
