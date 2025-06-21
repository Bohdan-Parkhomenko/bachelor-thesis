import React, { useEffect, useState } from "react";
import { fetchNews } from "../../data/newsApi";
import "./index.css";
import PostCard from "../BlogPage/components/PostCard/PostCard";

export default function AllPost() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchNews()
            .then(data => {
                setPosts(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    return (
        <div className="blog-page">
            <section className="blog-hero">
                <h1>Ласкаво просимо до блогу</h1>
                <p>Досліджуйте наші історії та новини про дітей.</p>
            </section>

            {loading ? (
                <p style={{ textAlign: "center" }}>Завантаження новин...</p>
            ) : (
                <section className="post-grid">
                    {posts.map((post) => (
                        <PostCard key={post._id} post={post} />
                    ))}
                </section>
            )}
        </div>
    );
}
