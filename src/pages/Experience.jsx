import React from 'react';
import { Link } from 'react-router-dom';

const Experience = () => {
  // 模擬經驗分享數據
  const experiences = [
    {
      id: 1,
      company: 'Google',
      position: '軟體工程實習生',
      interview_date: '2024-03-15',
      location: '台北市信義區',
      language: '中文',
      rating: 4.5,
      result: '錄取',
      difficulty: 4,
      interview_process: '面試分為三個階段：技術面試、系統設計和行為面試。技術面試主要考察演算法和資料結構，系統設計則著重於系統架構和擴展性，最後的行為面試則關注團隊合作和解決問題的能力。'
    },
    // ... 可以添加更多經驗分享數據
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
              面試經驗分享
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              查看其他求職者的面試經驗，幫助你更好地準備面試
            </p>
            
            {/* 分享按鈕 */}
            <div className="mt-8">
              <Link
                to="/experience/share"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-xl hover:from-blue-500 hover:to-purple-500 hover:shadow-lg transition-all duration-300"
              >
                <i className="fas fa-plus mr-2"></i>
                分享我的經驗
              </Link>
            </div>
          </div>
        </div>

        {/* 經驗分享列表 */}
        <div className="grid gap-6">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row justify-between gap-6">
                {/* 左側主要資訊 */}
                <div className="flex-1">
                  {/* 公司名稱和職位 */}
                  <div className="flex items-center gap-4 mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">{experience.company}</h2>
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-400/10 to-purple-400/10 text-blue-600 rounded-full text-sm">
                      {experience.position}
                    </span>
                  </div>
                  
                  {/* 面試基本資訊 */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <i className="fas fa-calendar text-gray-400"></i>
                      <span className="text-gray-600">{experience.interview_date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="fas fa-map-marker-alt text-gray-400"></i>
                      <span className="text-gray-600">{experience.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="fas fa-language text-gray-400"></i>
                      <span className="text-gray-600">{experience.language}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="fas fa-star text-yellow-400"></i>
                      <span className="text-gray-600">{experience.rating}/5</span>
                    </div>
                  </div>

                  {/* 面試結果和難度 */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <i className="fas fa-trophy text-gray-400"></i>
                      <span className="text-gray-600">結果：{experience.result}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="fas fa-chart-line text-gray-400"></i>
                      <span className="text-gray-600">難度：{experience.difficulty}/5</span>
                    </div>
                  </div>

                  {/* 面試流程預覽 */}
                  <p className="text-gray-600 line-clamp-2 mb-4">
                    {experience.interview_process}
                  </p>
                </div>

                {/* 右側按鈕 */}
                <div className="flex items-center">
                  <Link
                    to={`/experience/${experience.id}`}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-xl hover:from-blue-500 hover:to-purple-500 hover:shadow-lg transition-all duration-300"
                  >
                    閱讀更多
                    <i className="fas fa-arrow-right ml-2"></i>
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

export default Experience; 