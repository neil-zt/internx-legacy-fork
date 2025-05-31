import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const InterviewDetail = () => {
  const [activeTab, setActiveTab] = useState('preparation');

  // 模擬面試準備詳細內容
  const interviewContent = {
    preparation: {
      title: '面試準備詳解',
      sections: [
        {
          title: '研究公司',
          content: `
            <h3>了解公司背景</h3>
            <ul>
              <li>公司歷史和發展歷程</li>
              <li>企業文化和價值觀</li>
              <li>主要產品和服務</li>
              <li>市場地位和競爭優勢</li>
            </ul>

            <h3>研究職位要求</h3>
            <ul>
              <li>職位描述和職責</li>
              <li>所需技能和經驗</li>
              <li>團隊結構和角色</li>
              <li>發展機會和晉升空間</li>
            </ul>
          `
        },
        {
          title: '準備自我介紹',
          content: `
            <h3>自我介紹結構</h3>
            <ul>
              <li>個人背景和教育經歷</li>
              <li>相關工作經驗和成就</li>
              <li>技能和專長</li>
              <li>職業目標和期望</li>
            </ul>

            <h3>注意事項</h3>
            <ul>
              <li>控制時間在 2-3 分鐘內</li>
              <li>突出與職位相關的經驗</li>
              <li>使用具體數據和案例</li>
              <li>展現個人特色和優勢</li>
            </ul>
          `
        }
      ]
    },
    techniques: {
      title: '面試技巧詳解',
      sections: [
        {
          title: 'STAR 法則應用',
          content: `
            <h3>STAR 法則結構</h3>
            <ul>
              <li>Situation（情境）：描述當時的情況和背景</li>
              <li>Task（任務）：說明你面臨的任務和挑戰</li>
              <li>Action（行動）：解釋你採取的具體行動</li>
              <li>Result（結果）：分享最終的成果和收穫</li>
            </ul>

            <h3>實際案例</h3>
            <p>問題：請分享一個你解決困難問題的經驗</p>
            <ul>
              <li>情境：項目面臨緊急的技術難題</li>
              <li>任務：需要在短時間內找到解決方案</li>
              <li>行動：組織團隊討論，研究相關文獻，進行實驗</li>
              <li>結果：成功解決問題，項目按時完成</li>
            </ul>
          `
        },
        {
          title: '行為面試技巧',
          content: `
            <h3>準備案例</h3>
            <ul>
              <li>選擇具有代表性的案例</li>
              <li>確保案例能展示你的能力</li>
              <li>準備具體的細節和數據</li>
              <li>思考案例的啟示和收穫</li>
            </ul>

            <h3>回答技巧</h3>
            <ul>
              <li>使用清晰的邏輯結構</li>
              <li>突出個人貢獻和影響</li>
              <li>展示解決問題的能力</li>
              <li>強調團隊協作精神</li>
            </ul>
          `
        }
      ]
    },
    cases: {
      title: '面試案例分析',
      sections: [
        {
          title: '技術面試案例',
          content: `
            <h3>系統設計題</h3>
            <p>問題：設計一個高並發的即時通訊系統</p>
            <ul>
              <li>分析需求和限制條件</li>
              <li>設計系統架構和組件</li>
              <li>考慮擴展性和可靠性</li>
              <li>討論可能的優化方案</li>
            </ul>

            <h3>算法題</h3>
            <p>問題：實現一個高效的緩存系統</p>
            <ul>
              <li>分析時間和空間複雜度</li>
              <li>考慮邊界情況和異常處理</li>
              <li>討論優化方案</li>
              <li>展示代碼實現能力</li>
            </ul>
          `
        },
        {
          title: '行為面試案例',
          content: `
            <h3>團隊協作案例</h3>
            <p>問題：請分享一個團隊合作的經驗</p>
            <ul>
              <li>描述團隊背景和目標</li>
              <li>說明你的角色和貢獻</li>
              <li>分享遇到的挑戰和解決方案</li>
              <li>總結經驗和收穫</li>
            </ul>

            <h3>領導力案例</h3>
            <p>問題：請分享一個你領導團隊的經驗</p>
            <ul>
              <li>描述項目背景和目標</li>
              <li>說明團隊管理和決策過程</li>
              <li>分享成功經驗和教訓</li>
              <li>總結領導力提升</li>
            </ul>
          `
        }
      ]
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 頁面標題 */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">詳細面試攻略</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          深入解析面試準備、技巧和案例分析，幫助你全面提升面試表現。
        </p>
      </div>

      {/* 標籤頁 */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-lg border border-gray-200 p-1">
          {Object.keys(interviewContent).map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeTab === tab
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {interviewContent[tab].title}
            </button>
          ))}
        </div>
      </div>

      {/* 內容區域 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        {interviewContent[activeTab].sections.map((section, index) => (
          <div key={index} className="mb-8 last:mb-0">
            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: section.content }}
            />
          </div>
        ))}
      </div>

      {/* 返回按鈕 */}
      <div className="text-center mt-8">
        <Link
          to="/interview/basic"
          className="inline-flex items-center text-blue-600 hover:text-blue-700"
        >
          <i className="fas fa-arrow-left mr-2"></i>
          返回基本面試指南
        </Link>
      </div>
    </div>
  );
};

export default InterviewDetail; 