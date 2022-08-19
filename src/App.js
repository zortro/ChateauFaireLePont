import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Nav from './components/pages/nav.js'
import Home from './components/pages/home.js'
import Wine from './components/pages/wine.js'
import Restaurant from './components/pages/dining.js'
import Events from './components/pages/events.js'
import Connect from './components/pages/contact.js'
import Shop from './components/pages/shop.js'

import './App.css';
import './components/assets/css/main.css'

//remember to include menu modal!!

function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Nav />
          <Routes>
              <Route path='/Home' element={<Home />}/>
              <Route path='/Wine' element={<Wine />}/>
              <Route path='/Restaurant' element={<Restaurant />}/>
              <Route path='/Events' element={<Events />}/>
              <Route path='/Connect' element={<Connect />}/>
              <Route path='/Shop' element={<Shop />}/>
          </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
