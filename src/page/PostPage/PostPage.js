import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.css";
import { fetchNewsById } from "../../data/newsApi";

export default function PostPage() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchNewsById(id)
            .then(data => {
                setPost(data);
                setLoading(false);
            })
            .catch(() => {
                setPost(null);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div className="post-page"><h2>Завантаження...</h2></div>;
    }

    if (!post || !post._id) {
        return <div className="post-page"><h2>Статтю не знайдено</h2></div>;
    }

    return (
        <div className="post-page">
            <div className="post-meta">
                <span className="post-category">{post.category}</span>
                <span>{post.readTime}</span>
            </div>
            <h1 className="post-title">{post.title}</h1>
            <img src={post.image} alt="Post" className="post-image" />
            <div className="post-footer">
                <div><strong>Автор статті</strong><br />{post.author}</div>
                <div><strong>Опубліковано</strong><br />{post.publishedAt}</div>
            </div>
            <div
                className="post-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </div>
    );
}
