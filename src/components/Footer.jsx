import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 關於我們 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">InternX</h3>
            <p className="text-gray-400 mb-4">
              實習不迷路，職涯有出路
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://line.me/ti/g2/jYgS-7nytcXt_T_ejgNiN98p6dqrmowfdKxRoA?utm_source=invitation&utm_medium=link_copy&utm_campaign=default" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fab fa-line"></i>
              </a>
              <a 
                href="https://www.instagram.com/internx.me/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61576179510890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a 
                href="mailto:internx.me@gmail.com" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          {/* 快速連結 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">快速連結</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  首頁
                </Link>
              </li>
              <li>
                <Link to="/internships" className="text-gray-400 hover:text-white transition-colors">
                  找實習
                </Link>
              </li>
              <li>
                <Link to="/consulting" className="text-gray-400 hover:text-white transition-colors">
                  職涯諮詢
                </Link>
              </li>
              <li>
                <Link to="/experience" className="text-gray-400 hover:text-white transition-colors">
                  經驗分享
                </Link>
              </li>
            </ul>
          </div>

          {/* 聯絡我們 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">聯絡我們</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <i className="fas fa-envelope mr-2"></i>
                <a 
                  href="mailto:internx.me@gmail.com" 
                  className="hover:text-white transition-colors"
                >
                  internx.me@gmail.com
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <i className="fab fa-line mr-2"></i>
                <a 
                  href="https://line.me/ti/g2/jYgS-7nytcXt_T_ejgNiN98p6dqrmowfdKxRoA?utm_source=invitation&utm_medium=link_copy&utm_campaign=default" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @internx
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <i className="fab fa-instagram mr-2"></i>
                <a 
                  href="https://www.instagram.com/internx.me/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @internx.me
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <i className="fab fa-facebook-f mr-2"></i>
                <a 
                  href="https://www.facebook.com/profile.php?id=61576179510890" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  InternX
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 版權聲明 */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2025 InternX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 