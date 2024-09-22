import './SideBar.css'

export default function SideBar() {
  return (
    <div>
       <div className='storePageSideBarThreads'>
          <h2>
            threads
          </h2>
          <p>
            <button className='storePageSideBarButton'>
              shirts
            </button>
            <br />
            <button className='storePageSideBarButton'>
              sweatshirts
            </button>
            <br />
            <button className='storePageSideBarButton'>
              hats
            </button>
            <br />
            <button className='storePageSideBarButton'>
              aprons
            </button>
            <br />
            <button className='storePageSideBarButton'>
              table cloths
            </button>
          </p>
        </div>

        <div className='storePageSideBarThreads' >
          <h2>
            cook books
          </h2>
          <p>
            <button className='storePageSideBarButton'> 
              bbq
            </button>
            <br />
            <button className='storePageSideBarButton'>
              french
            </button>
            <br />
            <button className='storePageSideBarButton'>
              pnw cuisine
            </button>
          </p>
        </div>

    </div>
  )
}
