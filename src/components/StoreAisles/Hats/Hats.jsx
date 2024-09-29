
import './Hats.css'
import newHat from '../../../images/browser/hat.jpg'

export default function Hats() {

  const images = {
    new: [newHat, newHat, newHat],
    mens: [],
    womens: [],
    clearance: []
  }


  return (
    <div className='shirtsMainBox'>
      <h3 className='shirtsHeading'>Hats</h3>
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
