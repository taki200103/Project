import React, { useState } from 'react';
import './App.css';

function App() {
    const [view, setView] = useState('logout'); // Bắt đầu từ trang Đăng xuất

    const handleLogout = () => {
        setView('login');
    };

    const handleForgotPassword = () => {
        setView('forgotPassword');
    };

    const handleBackToLogin = () => {
        setView('login');
    };

    const handleCreateAccount = () => {
        setView('createAccount');
    };

    const handleChangePassword = () => {
        setView('changePassword');
    };

    const handlePasswordChanged = () => {
        setView('passwordChangedConfirmation');
    };

    return (
        <div className="App">
            {/* Trang Đăng xuất */}
            {view === 'logout' && (
                <div className="logout-container">
                    <div className="logout-message">Bạn có chắc chắn muốn đăng xuất?</div>
                    <button className="logout-button" onClick={handleLogout}>Đăng xuất</button>
                    <a href="#" className="option-link" onClick={handleForgotPassword}>Quên mật khẩu?</a>
                    <a href="#" className="option-link" onClick={handleChangePassword}>Đổi mật khẩu</a> {/* Nút Đổi mật khẩu */}
                    <a href="#" className="option-link" onClick={handleBackToLogin}>Trang chủ</a>
                </div>
            )}

            {/* Trang Đăng nhập */}
            {view === 'login' && (
                <div className="login-container">
                    <input type="text" placeholder="Email hoặc số điện thoại" className="input-field" />
                    <input type="password" placeholder="Mật khẩu" className="input-field" />
                    <button className="login-button" onClick={handleBackToLogin}>Đăng nhập</button>
                    <a href="#" className="forgot-password" onClick={handleForgotPassword}>Quên mật khẩu?</a>
                    <button className="create-account-button" onClick={handleCreateAccount}>Tạo tài khoản mới</button>
                </div>
            )}

            {/* Trang Quên mật khẩu */}
            {view === 'forgotPassword' && (
                <div className="forgot-password-container">
                    <h2>Tìm tài khoản của bạn</h2>
                    <p>Vui lòng nhập email hoặc số di động để tìm kiếm tài khoản của bạn.</p>
                    <input type="text" placeholder="Email hoặc số di động" className="input-field" />
                    <div className="button-group">
                        <button className="cancel-button" onClick={handleBackToLogin}>Hủy</button>
                        <button className="search-button" onClick={() => setView('changePassword')}>Tìm kiếm</button>
                    </div>
                </div>
            )}

            {/* Trang Đổi mật khẩu */}
            {view === 'changePassword' && (
                <div className="change-password-container">
                    <h2>Đổi mật khẩu</h2>
                    <input type="password" placeholder="Mật khẩu mới" className="input-field" />
                    <input type="password" placeholder="Nhập lại mật khẩu mới" className="input-field" />
                    <button className="change-password-button" onClick={handlePasswordChanged}>Xác nhận</button>
                    <button className="cancel-button" onClick={handleBackToLogin}>Hủy</button>
                </div>
            )}

            {/* Trang Xác nhận đổi mật khẩu */}
            {view === 'passwordChangedConfirmation' && (
                <div className="confirmation-container">
                    <h2>Mật khẩu đã được thay đổi thành công</h2>
                    <button className="login-button" onClick={handleBackToLogin}>Quay lại đăng nhập</button>
                </div>
            )}

            {/* Trang Tạo tài khoản mới */}
            {view === 'createAccount' && (
                <div className="create-account-container">
                    <h2>Tạo tài khoản mới</h2>
                    <input type="text" placeholder="Tên đầy đủ" className="input-field" />
                    <input type="text" placeholder="Email hoặc số điện thoại" className="input-field" />
                    <input type="password" placeholder="Mật khẩu mới" className="input-field" />
                    <button className="login-button" onClick={handleBackToLogin}>Đăng ký</button>
                    <button className="cancel-button" onClick={handleBackToLogin}>Hủy</button>
                </div>
            )}
        </div>
    );
}

export default App;