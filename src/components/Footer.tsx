import React from 'react';
import { Coffee, MapPin, Phone, Clock, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8 py-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="https://i.ibb.co/FYBd1kJ/2-2.png" 
                alt="NOBIA" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm">
              Hamamönü'nün kalbinde, premium kahve deneyimi ve sosyal sorumluluk bilinci ile hizmetinizdeyiz.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Heart className="h-4 w-4 text-red-500" fill="currentColor" />
              <span>Tüm gelirler Gülser Vakfı'na bağışlanmaktadır</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Erişim</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">Ana Sayfa</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">Hakkımızda</a>
              </li>
              <li>
                <a href="#menu" className="text-gray-400 hover:text-white transition-colors duration-300">Menü</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">İletişim</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-4 w-4 text-[#2d5a27]" />
                <span className="text-sm">Hacettepe, Hamamönü Sk. No:20, 06230 Altındağ/Ankara</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-4 w-4 text-[#2d5a27]" />
                <span className="text-sm">(0312) 311 43 43</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Clock className="h-4 w-4 text-[#2d5a27]" />
                <span className="text-sm">Her gün 08:00 - 21:45</span>
              </li>
              <li>
                <a 
                  href="https://instagram.com/nobiaco" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Instagram className="h-4 w-4 text-[#2d5a27]" />
                  <span className="text-sm">@nobiaco</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Çalışma Saatleri</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Pazartesi - Pazar</span>
                <span className="text-white">08:00 - 21:45</span>
              </div>
              <div className="bg-[#2d5a27]/20 p-3 rounded-lg mt-4">
                <p className="text-sm text-gray-300">
                  Öğrenci indirimleri için sosyal medya hesaplarımızı takip edin!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} NOBIA Coffee Shop. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                Gizlilik Politikası
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                Kullanım Şartları
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;