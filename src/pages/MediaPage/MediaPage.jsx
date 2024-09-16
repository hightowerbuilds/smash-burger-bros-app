
import './MediaPage.css'
import Calendar from "../../components/Calendar/Calendar";

import NavBar from "../../components/NavBar/NavBar";
import Todos from '../../components/Todos'

export default function MediaPage() {
  return (
    <div >
     <NavBar />
      <div className="mediaPageSectionOuterBox">

      <div className='mediaPageSectionSubBox'>
        <Calendar />
     
      </div>

      <div className='mediaPageSectionSubBox'>
      <Todos />
      </div>
      
      </div>
    
    </div>
  )
}
