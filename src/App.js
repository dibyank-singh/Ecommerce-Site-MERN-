import Home from "./Component/Home";
import Products from "./Component/Products/Products";
import Productview from "./Pages/Productview";
import Register from './Pages/Register'
import Login from "./Pages/Login"
import Cart from "./Pages/Cart"

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Routes,
} from 'react-router-dom';

function App() {
  const user=true
  return (
    <div>

      <Router>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
          <Route  path="/products/:category" element={<Products/>} /> 
          <Route  path="/product/:id" element={<Productview/>} /> 
          <Route  path="/cart"  element={<Cart/>} />
          {/* <Route  path="/login" > {user ? <Redirect to="/"/>: <Login/>} </Route>          */}
          <Route  path="/login"  element={<Login/>}/>
          <Route  path="/register"  element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
