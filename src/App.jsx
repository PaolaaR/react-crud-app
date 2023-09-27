import { Nav } from "react-bootstrap"

function App() {
  return (
   <>
   <NavbarComponent/>
   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movies" element={<Movies/>}/>
      </Routes>
   </>
  )
}

export default App
