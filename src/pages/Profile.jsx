import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');

  // 模擬用戶數據
  const userData = {
    name: '張小明',
    email: 'xiaoming@example.com',
    avatar: 'https://via.placeholder.com/150',
    userType: 'student',
    school: '台灣大學',
    major: '資訊工程學系',
    graduationYear: '2025',
    skills: ['JavaScript', 'React', 'Node.js', 'Python'],
    bio: '熱衷於前端開發，正在尋找實習機會。',
    location: '台北市',
    phone: '0912-345-678'
  };

  // 模擬活動記錄
  const activities = [
    {
      id: 1,
      type: 'application',
      title: '申請 Google 前端實習',
      date: '2024-03-15',
      status: 'pending'
    },
    {
      id: 2,
      type: 'interview',
      title: 'Microsoft 面試',
      date: '2024-03-10',
      status: 'completed'
    },
    {
      id: 3,
      type: 'consultation',
      title: '與王顧問進行職涯諮詢',
      date: '2024-03-05',
      status: 'completed'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* 頁面標題 */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">個人資料</h1>
        </div>

        {/* 標籤頁 */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-200 p-1">
            <button
              className={`px-4 py-2 rounded-md transition-colors ${
                activeTab === 'profile'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('profile')}
            >
              基本資料
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-colors ${
                activeTab === 'activities'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('activities')}
            >
              活動記錄
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-colors ${
                activeTab === 'settings'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('settings')}
            >
              帳號設置
            </button>
          </div>
        </div>

        {/* 內容區域 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          {activeTab === 'profile' && (
            <div className="space-y-6">
              {/* 個人信息 */}
              <div className="flex items-start space-x-6">
                <img
                  src={userData.avatar}
                  alt={userData.name}
                  className="w-24 h-24 rounded-full"
                />
                <div>
                  <h2 className="text-2xl font-bold">{userData.name}</h2>
                  <p className="text-gray-600">{userData.email}</p>
                  <p className="text-gray-600 mt-2">{userData.bio}</p>
                </div>
              </div>

              {/* 詳細信息 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">教育背景</h3>
                  <div className="space-y-2">
                    <p><span className="font-medium">學校：</span>{userData.school}</p>
                    <p><span className="font-medium">科系：</span>{userData.major}</p>
                    <p><span className="font-medium">畢業年份：</span>{userData.graduationYear}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">聯繫方式</h3>
                  <div className="space-y-2">
                    <p><span className="font-medium">地點：</span>{userData.location}</p>
                    <p><span className="font-medium">電話：</span>{userData.phone}</p>
                  </div>
                </div>
              </div>

              {/* 技能 */}
              <div>
                <h3 className="text-lg font-semibold mb-4">技能專長</h3>
                <div className="flex flex-wrap gap-2">
                  {userData.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* 編輯按鈕 */}
              <div className="flex justify-end">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  編輯資料
                </button>
              </div>
            </div>
          )}

          {activeTab === 'activities' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-4">活動記錄</h2>
              <div className="space-y-4">
                {activities.map(activity => (
                  <div
                    key={activity.id}
                    className="border-b pb-4 last:border-b-0 last:pb-0"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{activity.title}</h3>
                        <p className="text-gray-600 text-sm">{activity.date}</p>
                      </div>
                      <span
                        className={`px-2 py-1 rounded-full text-sm ${
                          activity.status === 'completed'
                            ? 'bg-green-100 text-green-600'
                            : 'bg-yellow-100 text-yellow-600'
                        }`}
                      >
                        {activity.status === 'completed' ? '已完成' : '進行中'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-4">帳號設置</h2>
              
              {/* 密碼修改 */}
              <div className="border-b pb-6">
                <h3 className="text-lg font-semibold mb-4">修改密碼</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      當前密碼
                    </label>
                    <input
                      type="password"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      新密碼
                    </label>
                    <input
                      type="password"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      確認新密碼
                    </label>
                    <input
                      type="password"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                  >
                    更新密碼
                  </button>
                </form>
              </div>

              {/* 通知設置 */}
              <div className="border-b pb-6">
                <h3 className="text-lg font-semibold mb-4">通知設置</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">電子郵件通知</p>
                      <p className="text-sm text-gray-600">接收重要更新和提醒</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">簡訊通知</p>
                      <p className="text-sm text-gray-600">接收面試和重要提醒</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>

              {/* 隱私設置 */}
              <div>
                <h3 className="text-lg font-semibold mb-4">隱私設置</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">公開個人資料</p>
                      <p className="text-sm text-gray-600">允許其他用戶查看您的個人資料</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile; 