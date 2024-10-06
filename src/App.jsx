import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import Homepage from "./pages/Homepage";
import { useState } from "react";
import CreatePage from "./pages/CreatePage";
// import CreateResumePage from "./pages/CreateResumePage";

function App() {
  const [search, setSearch] = useState();

  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <Header onSearchInput={(value) => setSearch(value)} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/dashboard"
            element={<Homepage searchInput={search} />}
          />
          <Route path="/content/:id" element={<CreatePage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
