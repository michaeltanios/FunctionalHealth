/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Science from "./pages/Science";
import Product from "./pages/Product";
import About from "./pages/About";
import Education from "./pages/Education";
import ATPCycle from "./pages/ATPCycle";
import MediaLab from "./pages/MediaLab";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/science" element={<Science />} />
          <Route path="/science/atp-cycle" element={<ATPCycle />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/media-lab" element={<MediaLab />} />
        </Routes>
      </Layout>
    </Router>
  );
}
