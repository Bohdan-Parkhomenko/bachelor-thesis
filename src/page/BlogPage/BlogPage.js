import React, { useEffect, useState } from "react";
import { fetchNews } from "../../data/newsApi";
import "./index.css";
import PostCard from "./components/PostCard/PostCard";
import { Link } from "react-router-dom";

export default function BlogPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchNews().then(data => setPosts(data));
    }, []);

    // Сортуємо новини від найновіших до найстаріших
    const sortedPosts = [...posts].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

    // Перші 6 для загальної сітки
    const mainPosts = sortedPosts.slice(0, 6);

    // Останні 3 для окремої секції
    const latestPosts = sortedPosts.slice(0, 3);

    return (
        <div className="blog-page">
            <section className="blog-hero">
                <h1>Ласкаво просимо до блогу</h1>
                <p>Досліджуйте наші історії та новини про дітей.</p>
            </section>

            <section className="post-grid">
                {mainPosts.map((post) => (
                    <PostCard key={post._id} post={post} />
                ))}
            </section>

            <div className="view-all-wrapper">
                <Link to="/all-posts" className="view-all-button">
                    Переглянути всі новини
                </Link>
            </div>

            <section className="latest-posts">
                <h2>Останні публікації блогу</h2>
                <p>Досліджуйте наші останні статті та новини</p>
                <div className="latest-grid">
                    {latestPosts.map((post) => (
                        <PostCard key={post._id} post={post} />
                    ))}
                </div>
            </section>
        </div>
    );
}
