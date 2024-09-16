
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import MediaPage from "./pages/MediaPage/MediaPage"
import StorePage from "./pages/StorePage/StorePage"
import MenuPage from "./pages/MenuPage/MenuPage"


export default function App() {
  return (
  	<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/media" element={<MediaPage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/menu" element={<MenuPage />} />
			</ Routes>
  )
}