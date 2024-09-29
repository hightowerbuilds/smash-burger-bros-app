

import whiteShirt from '../../../images/browser/whiteShirt.jpeg'
import tShrit from '../../../images/browser/t-shirt.jpeg'
import greenShirt from '../../../images/browser/greenShirt.jpg'
import './Shirts.css'

/**
 *  need to find pictures of shirts, 
 *  sweatshirts, hats and aprons to 
 *  fill the image object and arrays below
 *  bring images in from supabase... 
 */

export default function Shirts() {

  const images = {
    newShirts: [tShrit, whiteShirt, greenShirt, tShrit, tShrit,],
    menShirts: [],
    womenShirts: [],
    clearance: []
  }

  return (
    <div className='shirtsMainBox'>
      <h3 className='shirtsHeading'>Shirts</h3>
        <div className='shirtsImageBox'>
            {
              images.newShirts.map( (image) => (
                <img key={0} src={image} />
              ))
            }
        </div>
    </div>
  )
}
