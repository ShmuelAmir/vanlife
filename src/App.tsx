import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import Van from "./pages/Van";
import Host from "./pages/Host";
import Dashboard from "./pages/Dashboard";
import HostVans from "./pages/HostVans";
import HostVan from "./pages/HostVan";
import Details from "./pages/Details";
import Pricing from "./pages/Pricing";
import Photos from "./pages/Photos";
import Reviews from "./pages/Reviews";
import Income from "./pages/Income";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<Van />} />

          <Route path="host" element={<Host />}>
            <Route index element={<Dashboard />} />
            <Route path="vans" element={<HostVans />} />

            <Route path="vans/:id" element={<HostVan />}>
              <Route index element={<Details />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="photos" element={<Photos />} />
            </Route>

            <Route path="reviews" element={<Reviews />} />
            <Route path="income" element={<Income />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
