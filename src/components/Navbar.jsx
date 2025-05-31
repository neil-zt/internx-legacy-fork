import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container mx-auto px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 -ml-3">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="InternX Logo" className="h-12 w-auto" />
          </Link>
        </div>

        {/* 桌面版導航連結 */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/internships"
            className={`nav-link text-gray-700 hover:text-gray-900 ${
              isActive('/internships') ? 'font-medium' : ''
            }`}
          >
            實習機會
          </Link>
          <Link
            to="/consulting"
            className={`nav-link text-gray-700 hover:text-gray-900 ${
              isActive('/consulting') ? 'font-medium' : ''
            }`}
          >
            職涯諮詢
          </Link>
          <Link
            to="/experience"
            className={`nav-link text-gray-700 hover:text-gray-900 ${
              isActive('/experience') ? 'font-medium' : ''
            }`}
          >
            經驗分享
          </Link>          
        </div>

        {/* 登入/註冊按鈕 */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/login"
            className="nav-link text-gray-700 hover:text-gray-900"
          >
            登入
          </Link>
          <Link
            to="/register"
            className="nav-button text-white px-6 py-2 rounded-full"
          >
            註冊
          </Link>
        </div>

        {/* 手機版選單按鈕 */}
        <button
          className="md:hidden text-gray-700 hover:text-gray-900 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* 手機版選單 */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-2xl mt-2 py-4">
          <div className="px-4 space-y-4">
            <Link
              to="/internships"
              className="block text-gray-700 hover:text-gray-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              實習機會
            </Link>
            <Link
              to="/consulting"
              className="block text-gray-700 hover:text-gray-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              職涯諮詢
            </Link>
            <Link
              to="/experience"
              className="block text-gray-700 hover:text-gray-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              經驗分享
            </Link>
            <Link
              to="/interview"
              className="block text-gray-700 hover:text-gray-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              面試準備
            </Link>
            <div className="pt-4 border-t border-gray-200">
              <Link
                to="/login"
                className="block text-gray-700 hover:text-gray-900 mb-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                登入
              </Link>
              <Link
                to="/register"
                className="block w-full text-center bg-gradient-to-r from-blue-400 to-purple-400 text-white px-6 py-2 rounded-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                註冊
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 