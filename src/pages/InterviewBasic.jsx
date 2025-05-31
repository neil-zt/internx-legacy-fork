import React from 'react';
import { Link } from 'react-router-dom';

const InterviewBasic = () => {
  // 模擬面試準備指南數據
  const preparationGuides = [
    {
      id: 1,
      title: '面試前準備',
      items: [
        '研究公司和職位要求',
        '準備自我介紹',
        '複習專業知識',
        '準備問題清單'
      ]
    },
    {
      id: 2,
      title: '面試中注意事項',
      items: [
        '保持專業形象',
        '注意肢體語言',
        '清晰表達想法',
        '展示解決問題能力'
      ]
    },
    {
      id: 3,
      title: '面試後跟進',
      items: [
        '發送感謝信',
        '總結面試經驗',
        '準備後續面試',
        '保持聯繫'
      ]
    }
  ];

  // 模擬常見面試問題
  const commonQuestions = [
    {
      id: 1,
      question: '請介紹一下你自己',
      tips: '重點突出與職位相關的經驗和技能，控制在 2-3 分鐘內'
    },
    {
      id: 2,
      question: '為什麼選擇我們公司？',
      tips: '展示對公司的了解，結合個人職業規劃'
    },
    {
      id: 3,
      question: '你的優缺點是什麼？',
      tips: '優點要與職位相關，缺點要展示改進意願'
    }
  ];

  // 模擬面試技巧
  const interviewTips = [
    {
      id: 1,
      title: 'STAR 法則',
      description: '情境(Situation)、任務(Task)、行動(Action)、結果(Result)',
      icon: 'fa-star'
    },
    {
      id: 2,
      title: '行為面試',
      description: '通過具體案例展示能力和經驗',
      icon: 'fa-user-check'
    },
    {
      id: 3,
      title: '技術面試',
      description: '展示問題解決能力和技術深度',
      icon: 'fa-code'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 頁面標題 */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">面試準備指南</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          幫助你做好面試準備，提升面試成功率。從基礎準備到進階技巧，全方位提升你的面試表現。
        </p>
      </div>

      {/* 面試準備指南 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {preparationGuides.map(guide => (
          <div key={guide.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">{guide.title}</h2>
            <ul className="space-y-3">
              {guide.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* 常見面試問題 */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-12">
        <h2 className="text-2xl font-bold mb-6">常見面試問題</h2>
        <div className="space-y-6">
          {commonQuestions.map(q => (
            <div key={q.id} className="border-b pb-6 last:border-b-0">
              <h3 className="text-lg font-semibold mb-2">{q.question}</h3>
              <p className="text-gray-600">{q.tips}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 面試技巧 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {interviewTips.map(tip => (
          <div key={tip.id} className="bg-white rounded-lg shadow-md p-6 text-center">
            <i className={`fas ${tip.icon} text-4xl text-blue-600 mb-4`}></i>
            <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
            <p className="text-gray-600">{tip.description}</p>
          </div>
        ))}
      </div>

      {/* 行動按鈕 */}
      <div className="text-center">
        <Link
          to="/interview/detail"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          查看詳細面試攻略
          <i className="fas fa-arrow-right ml-2"></i>
        </Link>
      </div>
    </div>
  );
};

export default InterviewBasic; 