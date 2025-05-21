import React from "react";
import posts from "../../data/posts";
import "./index.css";
import PostCard from "../BlogPage/components/PostCard/PostCard";



export default function AllPost() {
    return (
        <div className="blog-page">
            <section className="blog-hero">
                <h1>Ласкаво просимо до блогу</h1>
                <p>Досліджуйте наші історії та новини про дітей.</p>
            </section>

            <section className="post-grid">
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </section>

        </div>
    );
}
