import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ExperienceDetail = () => {
  const { id } = useParams();
  
  // 模擬從 API 獲取數據
  const experience = {
    company: "Google",
    position: "Software Engineer Intern",
    interview_date: "2024-03-15",
    location: "台北市",
    language: "中文",
    rating: 4.5,
    result: "錄取",
    difficulty: 4,
    interview_process: `1. 線上申請
2. 電話面試（30分鐘）
3. 技術面試（2小時）
4. 主管面試（1小時）
5. HR面試（30分鐘）`,
    questions_asked: `1. 自我介紹
2. 為什麼選擇Google？
3. 描述一個你解決過的最具挑戰性的技術問題
4. 系統設計題：設計一個即時聊天系統
5. 演算法題：實現一個LRU Cache`,
    atmosphere: `整體面試氛圍非常專業且友善。面試官會給予充分的時間思考和回答問題，並在需要時提供適當的提示。整個過程更像是一場技術討論，而不是考試。`,
    advice: `1. 提前準備演算法和資料結構
2. 熟悉系統設計的基本原則
3. 準備具體的專案經驗案例
4. 練習用英文表達技術概念
5. 保持冷靜，展現解決問題的思維過程`
  };

  return (
    <div className="container mx-auto px-8 py-8">
      <div className="max-w-4xl mx-auto">
        {/* 返回按鈕 */}
        <div className="mb-8">
          <Link to="/experience" className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            返回列表
          </Link>
        </div>

        {/* 主要內容 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
          {/* 標題區 */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <h1 className="text-3xl font-bold text-gray-800">{experience.company}</h1>
              <span className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm">
                {experience.position}
              </span>
            </div>
            
            {/* 基本資訊 */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-600">{experience.interview_date}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-600">{experience.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                <span className="text-gray-600">{experience.language}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-gray-600">{experience.rating}/5</span>
              </div>
            </div>

            {/* 面試結果和難度 */}
            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <span className="text-gray-600">結果：{experience.result}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span className="text-gray-600">難度：{experience.difficulty}/5</span>
              </div>
            </div>
          </div>

          {/* 詳細內容 */}
          <div className="space-y-8">
            {/* 面試流程 */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
                面試流程
              </h2>
              <div className="prose max-w-none">
                <p className="text-gray-600 whitespace-pre-line">{experience.interview_process}</p>
              </div>
            </div>

            {/* 面試問題 */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <svg className="w-6 h-6 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                面試問題
              </h2>
              <div className="prose max-w-none">
                <p className="text-gray-600 whitespace-pre-line">{experience.questions_asked}</p>
              </div>
            </div>

            {/* 面試氛圍 */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                面試氛圍
              </h2>
              <div className="prose max-w-none">
                <p className="text-gray-600 whitespace-pre-line">{experience.atmosphere}</p>
              </div>
            </div>

            {/* 準備建議 */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <svg className="w-6 h-6 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                準備建議
              </h2>
              <div className="prose max-w-none">
                <p className="text-gray-600 whitespace-pre-line">{experience.advice}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetail; 