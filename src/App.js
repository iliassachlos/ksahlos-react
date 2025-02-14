import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import ContactPage from "./pages/contactPage";
import PricingPage from "./pages/pricingPage";
import NotFoundPage from "./pages/NotFoundPage";
import BlackAndWhitePage from "./pages/fine-art/blackAndWhitePage";
import IllusionPage from "./pages/fine-art/illusionPage";
import LoginPage from "./pages/loginPage";
import AdminPanelPage from "./pages/adminPanelPage";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LocalArtPage from "./pages/local-art/localArtPage"
import MinimalistPage from "./pages/fine-art/minimalistPage";
import MinimalistBwPage from "./pages/fine-art/minimalistBwPage";

function App() {
   useEffect(() => {
      AOS.init();
   }, []);

   return (
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/about" element={<AboutPage />} />
         <Route path="/contact" element={<ContactPage />} />
         <Route path="/pricing" element={<PricingPage />} />

         {/*Admin related*/}
         <Route path="/login" element={<LoginPage />} />
         <Route path="/admin" element={<AdminPanelPage />} />

         {/*Galleries*/}
         {/* old Black And White */}
         <Route path="/fine-art/escape" element={<BlackAndWhitePage />} />

         {/* old Dramatic*/}
         <Route path="/fine-art/minimalist-bw" element={<MinimalistBwPage />} />

         {/* old Illusion, Old Etherial */}
         <Route path="/fine-art/abstract" element={<IllusionPage />} />

        {/* old Essential, New minimalist */}
        <Route path="/fine-art/minimalist" element={<MinimalistPage />} />

         <Route path="/local-art" element={<LocalArtPage/>} errorElement={<NotFoundPage/>}/>
         <Route path="*" element={<NotFoundPage />} />
      </Routes>
   );
}

export default App;
