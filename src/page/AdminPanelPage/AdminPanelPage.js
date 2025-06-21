import React, { useEffect, useState } from 'react';
import {
    fetchNews,
    createNews,
    updateNews,
    deleteNews as deleteNewsApi
} from '../../data/newsApi';
import './index.css';

const AdminPanelPage = () => {
    const [posts, setPosts] = useState([]);
    const [editingPost, setEditingPost] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [isNew, setIsNew] = useState(false);

    useEffect(() => {
        loadPosts();
    }, []);

    const loadPosts = async () => {
        const data = await fetchNews();
        setPosts(data);
    };

    useEffect(() => {
        document.body.style.overflow = showModal ? 'hidden' : 'auto';
        return () => (document.body.style.overflow = 'auto');
    }, [showModal]);

    const handleDelete = async (_id) => {
        if (window.confirm('Ви впевнені, що хочете видалити цю новину?')) {
            await deleteNewsApi(_id);
            loadPosts();
        }
    };

    const handleEdit = (_id) => {
        const postToEdit = posts.find(post => post._id === _id);
        setEditingPost(postToEdit);
        setIsNew(false);
        setShowModal(true);
    };

    const handleCreate = () => {
        const emptyPost = {
            title: '',
            category: '',
            author: '',
            publishedAt: '',
            content: '',
            image: ''
        };
        setEditingPost(emptyPost);
        setIsNew(true);
        setShowModal(true);
    };

    const handleSave = async () => {
        try {
            if (isNew) {
                const { _id, ...dataToSend } = editingPost;
                await createNews(dataToSend);
            } else {
                const { _id, ...dataToUpdate } = editingPost;
                await updateNews(editingPost._id, dataToUpdate);
            }
            setShowModal(false);
            setEditingPost(null);
            setIsNew(false);
            loadPosts();
        } catch (error) {
            console.error("❌ Помилка при збереженні:", error);
            alert("Не вдалося зберегти новину. Деталі в консолі.");
        }
    };


    const handleChange = (field, value) => {
        setEditingPost(prev => ({ ...prev, [field]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setEditingPost(prev => ({ ...prev, image: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="admin-panel">
            <div className="admin-header">
                <h1 className="admin-title">Адмін-панель</h1>
                <button className="add-btn" onClick={handleCreate}>+ Додати новину</button>
            </div>

            <table className="admin-table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Заголовок</th>
                    <th>Категорія</th>
                    <th>Автор</th>
                    <th>Дата</th>
                    <th className="align-right">Дії</th>
                </tr>
                </thead>
                <tbody>
                {posts.map((post, index) => (
                    <tr key={post._id}>
                        <td>{index + 1}</td>
                        <td>{post.title}</td>
                        <td>{post.category}</td>
                        <td>{post.author}</td>
                        <td>{post.publishedAt}</td>
                        <td className="align-right">
                            <button className="edit-btn" onClick={() => handleEdit(post._id)}>✏️</button>
                            <button className="delete-btn" onClick={() => handleDelete(post._id)}>🗑️</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {showModal && editingPost && (
                <div className="modal-overlay">
                    <div className="modal">
                        <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
                        <h2>{isNew ? 'Додати новину' : 'Редагування новини'}</h2>

                        <label>Заголовок</label>
                        <input type="text" value={editingPost.title} onChange={(e) => handleChange('title', e.target.value)} />

                        <label>Категорія</label>
                        <input type="text" value={editingPost.category} onChange={(e) => handleChange('category', e.target.value)} />

                        <label>Автор</label>
                        <input type="text" value={editingPost.author} onChange={(e) => handleChange('author', e.target.value)} />

                        <label>Дата</label>
                        <input type="text" value={editingPost.publishedAt} onChange={(e) => handleChange('publishedAt', e.target.value)} />

                        <label>Контент</label>
                        <textarea rows="6" value={editingPost.content} onChange={(e) => handleChange('content', e.target.value)} />

                        <label>Зображення</label>
                        <input type="file" accept="image/*" onChange={handleImageChange} />
                        {editingPost.image && (
                            <img src={editingPost.image} alt="Preview" style={{ width: '100%', marginTop: '10px', borderRadius: '8px' }} />
                        )}

                        <div className="modal-actions">
                            <button onClick={handleSave}>Зберегти</button>
                            <button onClick={() => setShowModal(false)}>Скасувати</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminPanelPage;
