import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Contact from "./components/Contact/Contact.jsx"
import Header from './components/Contact/Header/Header';
import Home from './components/Home/Home';
import Form from './components/Contact/Contact.jsx';
import Play from './components/Play/Play';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      
      <Header/>
     <Routes>
     <Route path='/play' element={<Play />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/form' element={<Form/>}/>
     </Routes>

     </BrowserRouter>

    </div>
  );
}

export default App;
