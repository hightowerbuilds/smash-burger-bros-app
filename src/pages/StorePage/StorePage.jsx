
import './StorePage.css'
import NavBar from '../../components/NavBar/NavBar'
import SideBar from '../../components/SideBar/SideBar'


export default function StorePage() {
  return (
    <div className='storePageMainBox'>
      <NavBar />

      <div className='storePageSideBarMainBox' >

        <SideBar />
      </div>

    </div>
  )
}
