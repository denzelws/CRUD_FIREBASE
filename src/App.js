
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Feed from './pages/Feed/Feed';
import About from './pages/About/About';
import Login from './pages/Login/Login'

function App() {
  return (
    <div className='bg-gray-40'>
       <BrowserRouter>
       <NavBar/>
       <div className="min-h-screen">
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/feed' element={<Feed/>}/>
        <Route path='/about' element={<About/>}/>
       </Routes>
       </div>
       <Footer/>
       </BrowserRouter>
       </div>
  );
}

export default App;
