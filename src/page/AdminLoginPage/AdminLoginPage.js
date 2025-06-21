import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'; // ми додамо окремий CSS файл

const AdminLoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const correctUsername = 'admin';
    const correctPassword = '123456';

    const handleLogin = () => {
        if (username === correctUsername && password === correctPassword) {
            localStorage.setItem('admin-auth', 'true');
            navigate('/admin');
        } else {
            alert('Невірний логін або пароль');
        }
    };

    return (
        <div className="admin-login-container">
            <h1 className="admin-login-title">Вхід до адмін-панелі</h1>

            <div className="admin-login-form">
                <input
                    type="text"
                    placeholder="Логін"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="admin-input"
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="admin-input"
                />
                <button className="admin-login-button" onClick={handleLogin}>
                    Увійти
                </button>
            </div>
        </div>
    );
};

export default AdminLoginPage;
