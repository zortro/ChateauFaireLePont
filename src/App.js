import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Nav from './components/pages/nav.js'
import Home from './components/pages/home.js'
import WineClub from './components/pages/wineclub.js'
import Restaurant from './components/pages/dining.js'
import Events from './components/pages/events.js'

import './App.css';
import './components/assets/css/main.css'

function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Nav />
          <Routes>
              <Route path='/Home' element={<Home />}/>
              <Route path='/WineClub' element={<WineClub />}/>
              <Route path='/Restaurant' element={<Restaurant />}/>
              <Route path='/Events' element={<Events />}/>
          </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
