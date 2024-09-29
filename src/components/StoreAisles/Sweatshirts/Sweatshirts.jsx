

import '../Shirts/Shirts.css'
import Homer from '../../../images/browser/happyCow.jpeg'

export default function Sweatshirts() {

  const images = {
    new: [ Homer, Homer, Homer],
    mens: [],
    womens: [],
    clearance: []
  }

  return (
    <div className='shirtsMainBox'>
      <h3 className='shirtsHeading'>Sweatshirts</h3>
        <div className='shirtsImageBox'>
          {
            images.new.map( (image) => (
              <img key={0} src={image} />
            ))
          }
        </div>
    </div>
  )
}
