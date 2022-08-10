import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Signin from "./pages/Signin/Signin";
import Register from "./pages/Register/Register";
import CartPage from "./pages/Cart/Cart";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products/:id" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route exact path="/signin" element={<Signin/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/cartpage" element={<CartPage/>} />
      </Routes>
    </>
  );
}

export default App;
