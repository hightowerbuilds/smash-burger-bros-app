
import happyHomer from '../../images/browser/happyHomer.jpg'
import './Aisle.css'

export default function Aisle(props) {

    const images = {
       shirts: [ 
       <img key={0} src={happyHomer} />, 
       <img key={0} src={happyHomer} />,
       <img key={0} src={happyHomer} />,
       <img key={0} src={happyHomer} />,
       <img key={0} src={happyHomer} />,
       <img key={0} src={happyHomer} />,
       <img key={0} src={happyHomer} />,
        ],
       sweatshirts: [],
       hats: [],
       aprons: [],
       pnwCuisine: [],
       deepGriddle: []
    }

    const handleProps = () => {
        if (props.aisle === true){
            return console.log(images.shirts)
        }
    }

  return (
    <div>
        <h2>{props.heading}</h2>
    {images.shirts.map((image) => (
            <div key={image.key}>{image}</div>
        ))
    }

    {handleProps()}
    </div>
  )
}
