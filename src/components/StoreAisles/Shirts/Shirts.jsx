

import './Shirts.css'
/**
 *  need to find picture of shirts to fill 
 *  the image object and array below
 * 
 *  bring images in from supabase... 
 */

export default function Shirts() {

  const images = {
    newShirts: [],
    menShirts: [],
    womenShirts: [],
    clearance: []
  }

  return (

    <div className='shirtsMainBox'>
    <h3 className='shirtsHeading'>
      Shirts
    </h3>
    <div className='shirtsImageBox'>
  

  
    </div>
    </div>
  )
}
