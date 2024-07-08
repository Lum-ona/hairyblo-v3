// App.js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Destinations from "./pages/destinations/Destinations";
import DestinationDetails from "./pages/destinationDetails/DestinationDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/destinations/:name" element={<Destinations />} />
          <Route
            path="/destinations/:name/:destination"
            element={<DestinationDetails />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
