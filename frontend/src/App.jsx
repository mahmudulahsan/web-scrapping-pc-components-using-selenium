import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Product from './components/Product/Product.jsx'
import PcBuild from './components/PcBuild/PcBuild.jsx'
import { Home } from './pages/Home.jsx'
function App() {

  return (
    <div >
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/techland/:prodId" element={<Product/>}></Route>
            <Route path="/pc-build" element={<PcBuild/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
