
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import NavBar from './component/NavBar';
import Products from './component/Products';
import About from './component/About';
import Login from './component/Login'
import Contact from './component/Contact';
// import CartBtn from './component/CartBtn';
// import Footer from './component/Footer';
// import Register from './component/Register';


 

function App() {
  return (
    <div className="App">
      
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/search' element={<Products></Products>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        {/* <Route path='/register' element={<Register></Register>}></Route> */}
        {/* <Route path='/cartbtn' element={<CartBtn></CartBtn>}></Route> */}
        <Route path='/login' element={<Login></Login>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
