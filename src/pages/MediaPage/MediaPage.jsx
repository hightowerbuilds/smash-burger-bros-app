
import './MediaPage.css'
import Calendar from "../../components/Calendar/Calendar";
import Gallery from "../../components/Gallery/Gallery";
import NavBar from "../../components/NavBar/NavBar";


export default function MediaPage() {
  return (
    <div >
     <NavBar />
      <div className="mediaPageSectionOuterBox">

      <div className='mediaPageSectionSubBox'>
        <Calendar />
      </div>

      <div className='mediaPageSectionSubBox'>
        <Gallery />
      </div>
      
      </div>
    
    </div>
  )
}
