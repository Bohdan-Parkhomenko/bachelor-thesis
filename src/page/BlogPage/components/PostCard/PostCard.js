import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function PostCard({ post }) {
    return (
        <div className="post-card">
            <Link to={`/post/${post.id}`} className="post-image-wrapper">
                <img src={post.image} alt={post.title} className="post-thumb" />
            </Link>
            <div className="post-info">
                <div className="post-meta">
                    <span className="post-category">{post.category}</span>
                    <span className="post-read-time">{post.readTime}</span>
                </div>
                <h3 className="post-title">
                    <Link to={`/post/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="post-description">{post.description}</p>
                <div className="post-footer">
                    <span className="post-author">{post.author}</span>
                    <span className="post-date">{post.publishedAt}</span>
                </div>
            </div>
        </div>
    );
}