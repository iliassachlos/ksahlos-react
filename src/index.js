import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import Header from "./components/shared/layout/header/header";
import Footer from "./components/shared/layout/footer/footer";
import LeftWhitebar from "./components/shared/layout/borders/leftWhitebar";
import RightWhitebar from "./components/shared/layout/borders/rightWhitebar";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <div className='flex flex-row min-h-screen'>
                <LeftWhitebar/>
                <div className="flex flex-col w-full">
                    <div className="sticky top-0 z-50">
                        <Header/>
                    </div>
                    <div className="flex-grow">
                        <App/>
                    </div>
                </div>
                <RightWhitebar/>
                <div className="fixed bottom-0 z-50 w-full">
                    <Footer/>
                </div>
            </div>
        </BrowserRouter>
    </React.StrictMode>
);

