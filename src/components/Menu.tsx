import React, { useState, useEffect } from 'react';
import { Leaf, Coffee, Sparkles } from 'lucide-react';

const menuImages = [
  {
    url: 'https://i.ibb.co/nCHJmvd/1-1.jpg',
    alt: 'Sıcak İçecekler Menüsü',
    title: 'Sıcak İçecekler',
    icon: Coffee,
    description: 'Premium kahve çekirdekleri ile hazırlanan özel içeceklerimiz'
  },
  {
    url: 'https://i.ibb.co/Rbpmwbg/2-2-batcheditor-fotor.jpg',
    alt: 'Soğuk İçecekler Menüsü',
    title: 'Soğuk İçecekler',
    icon: Sparkles,
    description: 'El yapımı şuruplar ve taze meyvelerle hazırlanan serinletici içecekler'
  },
  {
    url: 'https://i.ibb.co/pRNh0Ft/3-1-batcheditor-fotor.jpg',
    alt: 'Tatlılar Menüsü',
    title: 'Tatlılar',
    icon: Leaf,
    description: 'Günlük olarak hazırlanan özel tarifli tatlılarımız'
  }
];

const Menu = () => {
  const [loadedImages, setLoadedImages] = useState<string[]>([]);
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    const preloadImages = async () => {
      const promises = menuImages.map((item) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = item.url;
          img.onload = () => {
            setLoadedImages(prev => [...prev, item.url]);
            setImageLoading(false);
            resolve(null);
          };
        });
      });
      await Promise.all(promises);
    };

    preloadImages();
  }, []);

  return (
    <section id="menu" className="bg-dark relative py-24">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOGMxMC4yNiAwIDE4LTguMDU5IDE4LTE4cy03Ljc0LTE4LTE4LTE4em0wIDMzYy04LjI4NCAwLTE1LTYuNzE2LTE1LTE1czYuNzE2LTE1IDE1LTE1IDE1IDYuNzE2IDE1IDE1LTYuNzE2IDE1LTE1IDE1eiIgZmlsbD0iIzJkNWEyNyIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Menümüz</h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="h-5 w-5 text-[#2d5a27]" />
            <p className="text-lg text-[#2d5a27] font-medium">%100 Organik Ürünler</p>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tüm ürünlerimiz, organik ve doğal malzemelerle özenle hazırlanmaktadır
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuImages.map((menu, index) => (
            <button
              key={index}
              onClick={() => setSelectedMenu(index)}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                selectedMenu === index 
                  ? 'bg-[#2d5a27] text-white' 
                  : 'bg-dark-light text-gray-400 hover:bg-[#2d5a27]/10'
              }`}
            >
              <div className="flex items-center gap-2">
                <menu.icon className="h-5 w-5" />
                <span>{menu.title}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          {menuImages.map((menu, index) => (
            <div
              key={menu.url}
              className={`transition-all duration-500 ${
                selectedMenu === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 hidden'
              }`}
            >
              <div className="bg-dark-light rounded-2xl overflow-hidden shadow-2xl hover:shadow-[#2d5a27]/10 transition-all duration-500">
                <div className="p-6 sm:p-8 bg-gradient-to-r from-dark-light to-dark border-b border-gray-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[#2d5a27]/10 p-3 rounded-lg">
                      <menu.icon className="h-6 w-6 text-[#2d5a27]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{menu.title}</h3>
                      <p className="text-gray-400">{menu.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative bg-dark-light">
                  {!loadedImages.includes(menu.url) && (
                    <div className="absolute inset-0 flex items-center justify-center bg-dark-light">
                      <div className="w-12 h-12 border-4 border-[#2d5a27] border-t-transparent rounded-full animate-spin" />
                    </div>
                  )}
                  <div className="relative w-full h-full overflow-hidden px-3 sm:px-6 py-4 sm:py-6">
                    <picture>
                      <img
                        src={menu.url}
                        alt={menu.alt}
                        className={`w-full transition-all duration-500 rounded-lg shadow-lg ${
                          loadedImages.includes(menu.url) ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                        }`}
                        style={{ 
                          maxHeight: '70vh',
                          width: '100%',
                          height: 'auto',
                          margin: '0 auto',
                          display: 'block',
                          objectFit: 'contain',
                          imageRendering: '-webkit-optimize-contrast',
                          WebkitFontSmoothing: 'antialiased',
                          MozOsxFontSmoothing: 'grayscale',
                          transform: 'translateZ(0)',
                          backfaceVisibility: 'hidden',
                          willChange: 'transform',
                        }}
                        loading="eager"
                        decoding="async"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-[#2d5a27] to-[#1e3d1a] rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">🎓 Öğrenci Kampanyası!</h3>
            <p className="text-lg mb-4">
              Saat 16:00-22:00 arasında tatlı + içecek kombinasyonunda %20 indirimden yararlanın! 🧁☕
            </p>
            <p className="text-sm text-gray-100">
              *Üniversite öğrenci kartınızı göstererek bu özel fırsatlardan hemen yararlanabilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;