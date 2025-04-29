
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Plants from "./pages/Plants/Plants";
import PlantDetails from "./pages/PlantDetails";
import Evidence from "./pages/Evidence/Evidence";
import NotFound from "./pages/NotFound";
import "./i18n/i18n"; 
import './App.css';

const App = () => (
    <LanguageProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/plants" element={<Plants />} />
            <Route path="/plants/:id" element={<PlantDetails />} />
            <Route path="/evidence" element={<Evidence />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </LanguageProvider>
);

export default App;
