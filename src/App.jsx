import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./global.css";
import Contact from "./pages/contact/contact";
import Dashboard from "./pages/dashboard/dashboard";
import Landing from "./pages/landing/landing";
import Partners from "./pages/partners/partners";
import Pricing from "./pages/pricing/pricing";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
