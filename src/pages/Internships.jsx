import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Internships = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    type: '',
    location: '',
    remote: ''
  });

  // 模擬職缺數據
  const internships = [
    {
      id: 1,
      company: 'Google',
      title: '軟體工程實習生 - Software Engineering Intern',
      type: '全職實習',
      location: '台北市信義區',
      salary: '月薪 35,000 - 45,000',
      industry: '科技業',
      skills: ['Python', 'JavaScript', 'React'],
      rating: 4.8
    },
    // ... 可以添加更多職缺數據
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-24">
        {/* 頁面標題 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            探索實習機會
          </h1>
          <p className="text-gray-600 text-lg">找到最適合你的實習機會，開啟職涯新篇章</p>
        </div>

        {/* 搜尋與篩選區塊 */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-12 transform transition-all duration-300 hover:shadow-xl">
          <form className="space-y-6">
            {/* 搜尋欄位 */}
            <div className="relative">
              <input
                type="text"
                placeholder="搜尋職位、公司或技能..."
                className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-300 text-gray-700 placeholder-gray-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <i className="fas fa-search absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>

            {/* 篩選選項 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="relative group">
                <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-blue-500 transition-colors">
                  職缺類型
                </label>
                <select
                  name="type"
                  className="w-full rounded-xl border-gray-200 shadow-sm focus:border-blue-400 focus:ring-blue-400 transition-all duration-300 hover:border-blue-300"
                  value={filters.type}
                  onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                >
                  <option value="">全部類型</option>
                  <option value="full-time">全職實習</option>
                  <option value="part-time">兼職實習</option>
                  <option value="project">專案實習</option>
                </select>
              </div>

              <div className="relative group">
                <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-blue-500 transition-colors">
                  地點
                </label>
                <select
                  name="location"
                  className="w-full rounded-xl border-gray-200 shadow-sm focus:border-blue-400 focus:ring-blue-400 transition-all duration-300 hover:border-blue-300"
                  value={filters.location}
                  onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                >
                  <option value="">全部地點</option>
                  <option value="taipei">台北市</option>
                  <option value="new-taipei">新北市</option>
                  <option value="taichung">台中市</option>
                  <option value="kaohsiung">高雄市</option>
                </select>
              </div>

              <div className="relative group">
                <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-blue-500 transition-colors">
                  工作模式
                </label>
                <select
                  name="remote"
                  className="w-full rounded-xl border-gray-200 shadow-sm focus:border-blue-400 focus:ring-blue-400 transition-all duration-300 hover:border-blue-300"
                  value={filters.remote}
                  onChange={(e) => setFilters({ ...filters, remote: e.target.value })}
                >
                  <option value="">全部模式</option>
                  <option value="onsite">現場辦公</option>
                  <option value="remote">遠端工作</option>
                  <option value="hybrid">混合模式</option>
                </select>
              </div>

              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-400 to-purple-400 text-white py-3 px-6 rounded-xl hover:shadow-lg hover:scale-105 transform transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span>搜尋職缺</span>
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* 職缺列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {internships.map((internship) => (
            <div
              key={internship.id}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
            >
              <div className="p-6">
                {/* 公司資訊 */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white font-bold text-xl">
                      {internship.company[0]}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-500 transition-colors">
                        {internship.company}
                      </h3>
                      <div className="flex items-center mt-1">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-gray-600 text-sm ml-2">{internship.rating}</span>
                      </div>
                    </div>
                  </div>
                  <span className="px-4 py-1.5 text-sm rounded-full bg-blue-100 text-blue-600 font-medium">
                    {internship.type}
                  </span>
                </div>

                {/* 職位資訊 */}
                <h4 className="text-lg font-medium text-gray-900 mb-4 group-hover:text-blue-500 transition-colors">
                  {internship.title}
                </h4>

                {/* 職位詳情 */}
                <div className="space-y-3 text-gray-600 mb-6">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{internship.location}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{internship.salary}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span>{internship.industry}</span>
                  </div>
                </div>

                {/* 技能標籤 */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {internship.skills.map((skill, index) => (
                    <span key={index} className="px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-600">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* 查看詳情按鈕 */}
                <Link
                  to={`/internships/${internship.id}`}
                  className="block w-full text-center py-3 px-4 bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-xl hover:shadow-lg hover:scale-105 transform transition-all duration-300"
                >
                  查看詳情
                </Link>
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

export default Internships; 