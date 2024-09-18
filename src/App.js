// App.js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Activities from "./pages/activities/Activities";
import Destination from "./pages/destination/Destination";
import Location from "./pages/location/Location";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/activities/:name" element={<Activities />} />
          <Route
            path="/activities/:name/:destination"
            element={<Destination />}
          />
          <Route
            path="/activities/:name/:destination/:location"
            element={<Location />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
