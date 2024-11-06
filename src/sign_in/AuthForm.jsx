import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const AuthForm = ({ isLogin, setIsLogin }) => {
    const [isActive, setIsActive] = useState(isLogin);
    const navigate = useNavigate(); // Tạo hàm điều hướng

    useEffect(() => {
        setIsActive(isLogin);
    }, [isLogin]);

    const handleRegisterClick = () => {
        setIsLogin(false); // Chuyển sang trạng thái đăng ký
        setIsActive(true); // Kích hoạt form đăng ký
    };

    const handleLoginClick = () => {
        setIsLogin(true); // Chuyển sang trạng thái đăng nhập
        setIsActive(false); // Kích hoạt form đăng nhập
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Thêm logic xác thực đăng nhập tại đây, ví dụ:
        // if (validLogin) {
        navigate('/menu'); // Chuyển hướng đến MenuLayout sau khi đăng nhập thành công
        // }
    };

    return (
        <div className={`container ${isActive ? 'active' : ''}`} id="container">
            <div className="form-container sign-up" style={{ display: isActive ? 'block' : 'none' }}>
                <form>
                    <h1>Create Account</h1>
                    <div className="social-icons">
                        <a href="#" className="icon"><FontAwesomeIcon icon={faGooglePlusG} /></a>
                        <a href="#" className="icon"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="#" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="#" className="icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
            <div className="form-container sign-in" style={{ display: isActive ? 'none' : 'block' }}>
                <form onSubmit={handleSubmit}> {/* Thêm onSubmit */}
                    <h1>Sign In</h1>
                    <div className="social-icons">
                        <a href="#" className="icon"><FontAwesomeIcon icon={faGooglePlusG} /></a>
                        <a href="#" className="icon"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="#" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="#" className="icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    </div>
                    <span>or use your email password</span>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <a href="#">Forget Your Password?</a>
                    <button type="submit">Sign In</button>
                </form>
            </div>
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Welcome Back!</h1>
                        <p>Enter your personal details to use all of site features</p>
                        <button className="hidden" onClick={handleLoginClick}>Sign In</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Hello, Friend!</h1>
                        <p>Register with your personal details to use all of site features</p>
                        <button className="hidden" onClick={handleRegisterClick}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;
