import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'student',
    agreeTerms: false
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('請填寫所有必填欄位');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('密碼不一致，請確認兩次輸入的密碼相同');
      return;
    }
    if (!formData.agreeTerms) {
      setError('請同意服務條款和隱私政策');
      return;
    }
    // TODO: 實現註冊邏輯
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* 頁面標題 */}
        <div className="text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            加入我們
          </h2>
          <p className="text-gray-600">建立您的帳號，開始探索實習機會</p>
        </div>

        {/* 註冊表單 */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* 姓名 */}
            <div className="relative group">
              <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-blue-500 transition-colors">
                姓名
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 rounded-xl border-gray-200 shadow-sm focus:border-blue-400 focus:ring-blue-400 transition-all duration-300 hover:border-blue-300"
                  placeholder="請輸入姓名"
                />
              </div>
            </div>

            {/* 電子郵件 */}
            <div className="relative group">
              <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-blue-500 transition-colors">
                電子郵件
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 rounded-xl border-gray-200 shadow-sm focus:border-blue-400 focus:ring-blue-400 transition-all duration-300 hover:border-blue-300"
                  placeholder="請輸入電子郵件"
                />
              </div>
            </div>

            {/* 密碼 */}
            <div className="relative group">
              <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-blue-500 transition-colors">
                密碼
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 rounded-xl border-gray-200 shadow-sm focus:border-blue-400 focus:ring-blue-400 transition-all duration-300 hover:border-blue-300"
                  placeholder="請輸入密碼"
                />
              </div>
            </div>

            {/* 確認密碼 */}
            <div className="relative group">
              <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-blue-500 transition-colors">
                確認密碼
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 rounded-xl border-gray-200 shadow-sm focus:border-blue-400 focus:ring-blue-400 transition-all duration-300 hover:border-blue-300"
                  placeholder="請再次輸入密碼"
                />
              </div>
            </div>

            {/* 同意條款 */}
            <div className="flex items-center">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                required
                className="h-4 w-4 text-blue-400 focus:ring-blue-400 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-700">
                我同意
                <Link to="/terms" className="text-blue-500 hover:text-blue-600 transition-colors">服務條款</Link>
                和
                <Link to="/privacy" className="text-blue-500 hover:text-blue-600 transition-colors">隱私政策</Link>
              </label>
            </div>

            {/* 註冊按鈕 */}
            <div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-400 to-purple-400 text-white py-3 px-6 rounded-xl hover:shadow-lg hover:scale-105 transform transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                <span>註冊</span>
              </button>
            </div>
          </form>

          {/* 分隔線 */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">或</span>
              </div>
            </div>
          </div>

          {/* 登入連結 */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              已經有帳號？
              <Link to="/login" className="font-medium text-blue-500 hover:text-blue-600 transition-colors">
                立即登入
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* 錯誤提示 */}
      {error && (
        <div className="fixed top-24 right-4 transform transition-all duration-300">
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded shadow-lg">
            <div className="flex items-center">
              <div className="py-1">
                <i className="fas fa-exclamation-circle mr-2"></i>
              </div>
              <div>
                <p className="font-medium">註冊失敗</p>
                <p className="text-sm">{error}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register; 