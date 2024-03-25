import './App.css';
import {Route, Routes} from 'react-router-dom'
import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import ContactPage from "./pages/contactPage";
import PricingPage from "./pages/pricingPage";
import NotFoundPage from "./pages/NotFoundPage";
import BlackAndWhitePage from "./pages/fine-art/blackAndWhitePage";
import DramaticPage from "./pages/fine-art/dramaticPage";
import IllusionPage from "./pages/fine-art/illusionPage";
import LoginPage from "./pages/loginPage";
import AdminPanelPage from "./pages/adminPanelPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/pricing" element={<PricingPage/>}/>

            {/*Admin related*/}
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/admin" element={<AdminPanelPage/>}/>


            {/*Galleries*/}
            <Route path="/fine-art/black-and-white" element={<BlackAndWhitePage/>}/>
            <Route path="/fine-art/dramatic" element={<DramaticPage/>}/>
            <Route path="/fine-art/illusion" element={<IllusionPage/>}/>
            {/*<Route path="/local-art" element={<PricingPage/>} errorElement={<NotFoundPage/>}/>*/}
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    );
}

export default App;
