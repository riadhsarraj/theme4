import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";

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
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
