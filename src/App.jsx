import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './views/header/Header';
import Main from './views/main/Main';
import Trajetoria from './views/main/components/Trajetoria';
import Footer from './views/footer/Footer';

function App() {

  return (

    <Router>
      <div>
        <Header />
        
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path='/trajetoria' element={<Trajetoria />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App
