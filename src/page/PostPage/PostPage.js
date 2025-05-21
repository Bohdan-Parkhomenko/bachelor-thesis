import React from "react";
import { useParams } from "react-router-dom";
import "./index.css";
import posts from "../../data/posts";


// 1. Тимчасовий масив постів (можеш винести в окремий файл)

export default function PostPage() {
    const { id } = useParams();

    // 2. Знаходимо пост за ID
    const post = posts.find((p) => p.id === id);

    // 3. Якщо не знайдено — показати повідомлення
    if (!post) {
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
