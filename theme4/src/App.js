import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <Routes>
    <Route
          path="/index"
          element={
            <>
              <Index></Index>
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
            <Cart></Cart>
            </>
          }
        />
        <Route
          path="/categories"
          element={
            <>
            <Categories></Categories>
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
            <Checkout></Checkout>
            </>
          }
        />
         <Route
          path="/contact"
          element={
            <>
            <Contact></Contact>
            </>
          }
        />
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  );
}
export default App;
