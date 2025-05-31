import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError('請填寫所有必填欄位');
      return;
    }
    // TODO: 實現登入邏輯
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
            歡迎回來
          </h2>
          <p className="text-gray-600">登入您的帳號，繼續探索實習機會</p>
        </div>

        {/* 登入表單 */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
          <form className="space-y-6" onSubmit={handleSubmit}>
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

            {/* 記住我 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-400 focus:ring-blue-400 border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-700">
                  記住我
                </label>
              </div>
              <Link to="/forgot-password" className="text-sm text-blue-500 hover:text-blue-600 transition-colors">
                忘記密碼？
              </Link>
            </div>

            {/* 登入按鈕 */}
            <div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-400 to-purple-400 text-white py-3 px-6 rounded-xl hover:shadow-lg hover:scale-105 transform transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                <span>登入</span>
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

          {/* 註冊連結 */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              還沒有帳號？
              <Link to="/register" className="font-medium text-blue-500 hover:text-blue-600 transition-colors">
                立即註冊
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* 錯誤提示 */}
      {error && (
        <div className="fixed top-32 right-4 transform transition-all duration-300">
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded shadow-lg">
            <div className="flex items-center">
              <div className="py-1">
                <i className="fas fa-exclamation-circle mr-2"></i>
              </div>
              <div>
                <p className="font-medium">登入失敗</p>
                <p className="text-sm">{error}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login; 