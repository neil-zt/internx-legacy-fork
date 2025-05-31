import React from 'react';
import { Link } from 'react-router-dom';

const Consulting = () => {
  // 模擬顧問數據
  const consultants = [
    {
      id: 1,
      name: 'John Smith',
      title: '前 Google 資深工程師',
      expertise: ['軟體開發', '職涯規劃', '面試技巧'],
      rating: 4.9,
      consultations: 128
    },
    // ... 可以添加更多顧問數據
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-24">
        {/* 頁面標題區域 */}
        <div className="relative mb-16">
          {/* 背景裝飾 */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-50 blur-3xl"></div>
          </div>
          
          {/* 標題內容 */}
          <div className="relative text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              職涯諮詢
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              與專業顧問一對一交流，為你的職涯規劃提供專業建議
            </p>
          </div>
        </div>

        {/* 諮詢顧問列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {consultants.map((consultant) => (
            <div key={consultant.id} className="group relative">
              {/* 背景裝飾 */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl transform transition-all duration-300 group-hover:scale-105"></div>
              
              {/* 卡片內容 */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="p-6">
                  {/* 顧問資訊 */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white font-bold text-xl">
                        {consultant.name[0]}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{consultant.name}</h3>
                      <p className="text-sm text-gray-500">{consultant.title}</p>
                    </div>
                  </div>

                  {/* 專業領域 */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">專業領域</h4>
                    <div className="flex flex-wrap gap-2">
                      {consultant.expertise.map((skill, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 text-sm rounded-full ${
                            index === 0
                              ? 'bg-blue-50 text-blue-600'
                              : index === 1
                              ? 'bg-purple-50 text-purple-600'
                              : 'bg-pink-50 text-pink-600'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 評價 */}
                  <div className="flex items-center mb-6">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-600 text-sm ml-2">
                      {consultant.rating} ({consultant.consultations} 次諮詢)
                    </span>
                  </div>

                  {/* 預約按鈕 */}
                  <Link
                    to={`/consulting/${consultant.id}`}
                    className="block w-full text-center py-3 px-4 bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-xl hover:shadow-lg hover:scale-105 transform transition-all duration-300"
                  >
                    預約諮詢
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 分頁 */}
        <div className="flex justify-center mt-12">
          <nav className="flex items-center space-x-2">
            <button className="px-4 py-2 text-gray-600 hover:text-blue-500 transition-colors">
              上一頁
            </button>
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`px-4 py-2 rounded-lg ${
                  page === 1
                    ? 'bg-gradient-to-r from-blue-400 to-purple-400 text-white'
                    : 'text-gray-600 hover:text-blue-500'
                } transition-colors`}
              >
                {page}
              </button>
            ))}
            <button className="px-4 py-2 text-gray-600 hover:text-blue-500 transition-colors">
              下一頁
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Consulting; 