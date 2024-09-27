import './Shirts.css'
import Homer from '../../../images/browser/happyHomer.jpg'

export default function Shirts() {
  return (
    <div className='shirtsMainBox'>
  
    <h3 className='shirtsHeading'>
      Shirts
    </h3>
    <div className='shirtsImageBox'>
  
    <img src={Homer} className='shirtsImage' />
    <img src={Homer} className='shirtsImage' />
    <img src={Homer} className='shirtsImage' />
    <img src={Homer} className='shirtsImage' />
    <img src={Homer} className='shirtsImage' />
    <img src={Homer} className='shirtsImage' />
    <img src={Homer} className='shirtsImage' />
    <img src={Homer} className='shirtsImage' />
    <img src={Homer} className='shirtsImage' />
  
    </div>
  

    </div>
  )
}
