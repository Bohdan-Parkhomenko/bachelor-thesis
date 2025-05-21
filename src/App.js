import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './index.css';

import HomePage from "./page/HomePage";
import AboutPage from "./page/AboutPage/AboutPage";
import ContactsPage from "./page/ContactsPage/ContactsPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import PostPage from "./page/PostPage/PostPage";
import BlogPage from "./page/BlogPage/BlogPage";

function App() {
    return (
        <Router>
            <Header/>

            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/contacts" element={<ContactsPage/>}/>
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/post/:id" element={<PostPage />} />



            </Routes>

            <Footer/>
        </Router>
    );
}

export default App;
