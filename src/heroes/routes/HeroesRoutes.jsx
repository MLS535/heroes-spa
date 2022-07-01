import { Route, Routes, Navigate } from "react-router-dom"
import { Navbar } from "../../ui/components/Navbar"
import { MarvelPage, DCPage, HeroPage, SearchPages } from "../pages"

export const HeroesRoutes = () => {
  return (
      <>

  <Navbar/>
  <div className="container">
    <Routes>
          <Route path="marvel" element={<MarvelPage/>} />
          <Route path="dc" element={<DCPage/>} />
          <Route path="search" element={<SearchPages/>} />
          <Route path="hero/:id" element={<HeroPage/>} />
          
          <Route path="/" element={<Navigate to={'marvel'} />} />

    </Routes>
    </div>
      </>
  
  )
}