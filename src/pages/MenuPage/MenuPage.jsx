import './MenuPage.css'
import NavBar from "../../components/NavBar/NavBar"

export default function MenuPage() {
  return (
    <div className='menuPageMainBox'>
       <NavBar />
    <div className='menuPageOuterBox'>
    <div className='menuPageInnerBox' >
        <p className='menuPageSmashHeading'>SMASH BURGER BROS.</p>
      
        <p className='menuPageMenuBox'>

        <p className='menuPageSectionTitle'>Burgers</p>

        <ul style={{ margin: '3%'}}>
          <p className="menuPageMenuItem">single patty $5</p>
          <p className="menuPageMenuItem">double patty $10</p>
          <p className="menuPageMenuItem">triple patty $15</p>
          <p className="menuPageMenuItem">million patty $2,000</p>
        </ul>

        <p className='menuPageSectionTitle'>Fries</p>
          <ul style={{ margin: '3%'}}>
            <p className="menuPageMenuItem">fries $10</p>
            <p className="menuPageMenuItem">alotta fries $20</p>
          </ul>

        <p className='menuPageSectionTitle'>Salads</p>
          <ul style={{ margin: '3%'}}>
            <p className="menuPageMenuItem">bacon and eggs $15</p>
            <p className="menuPageMenuItem">tropical paradise $17</p>
          </ul>


        </p>

      </div>
    </div>
    
      
      

   
    </div>
  )
}

