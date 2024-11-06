import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AuthForm from './sign_in/AuthForm'; // Đường dẫn tương ứng với vị trí của tệp AuthForm.jsx
import MenuLayout from './menu/MenuLayout'; // Đường dẫn tương ứng với vị trí của tệp MenuLayout.jsx
import './sign_in/style.css'; // Đảm bảo tệp CSS đã được tạo

function App() {
    const [isLogin, setIsLogin] = useState(false); // Thiết lập mặc định là đăng ký

    return (
        <Router>
            <Routes>
                {/* Route cho AuthForm */}
                <Route path="/" element={<AuthForm isLogin={isLogin} setIsLogin={setIsLogin} />} />
                
                {/* Route cho MenuLayout, chuyển hướng nếu đã đăng nhập */}
                <Route path="/menu" element={isLogin ? <MenuLayout /> : <Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default App;
