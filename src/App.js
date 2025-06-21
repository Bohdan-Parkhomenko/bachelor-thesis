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
import AllPost from "./page/AllPosts/AllPost";
import AdminLoginPage from "./page/AdminLoginPage/AdminLoginPage";
import AdminPanelPage from "./page/AdminPanelPage/AdminPanelPage";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";


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
                <Route path="/all-posts" element={<AllPost/>} />
                <Route path="/admin/login" element={<AdminLoginPage />} />
                <Route
                    path="/admin"
                    element={
                        <ProtectedRoute>
                            <AdminPanelPage />
                        </ProtectedRoute>
                    }
                />
            </Routes>

            <Footer/>
        </Router>
    );
}

export default App;
