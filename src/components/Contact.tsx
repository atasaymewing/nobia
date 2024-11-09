import React from 'react';
import { MapPin, Phone, Clock, Instagram, Coffee } from 'lucide-react';

const ContactInfo = ({ icon: Icon, title, text, link }) => (
  <div className="flex items-center space-x-4 hover-lift p-6 rounded-lg bg-dark border border-gray-800/50 transition-all duration-300">
    <div className="bg-[#2d5a27]/20 p-3 rounded-lg">
      <Icon className="h-6 w-6 text-[#2d5a27]" />
    </div>
    <div>
      <h4 className="font-medium text-gray-300 mb-1">{title}</h4>
      {link ? (
        <a 
          href={link}
          target="_blank" 
          rel="noopener noreferrer"
          className="text-lg hover:text-[#2d5a27] transition-colors duration-300"
        >
          {text}
        </a>
      ) : (
        <p className="text-lg">{text}</p>
      )}
    </div>
  </div>
);

const Contact = () => {
  return (
    <section id="contact" className="bg-dark-light relative">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOGMxMC4yNiAwIDE4LTguMDU5IDE4LTE4cy03Ljc0LTE4LTE4LTE4em0wIDMzYy04LjI4NCAwLTE1LTYuNzE2LTE1LTE1czYuNzE2LTE1IDE1LTE1IDE1IDYuNzE2IDE1IDE1LTYuNzE2IDE1LTE1IDE1eiIgZmlsbD0iIzJkNWEyNyIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-50" />

      <div className="section-container relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="heading-primary mb-6">İletişim</h2>
          <p className="text-xl text-gray-400">
            Sorularınız için bize ulaşabilir, önerilerinizi paylaşabilirsiniz.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 fade-in">
            <div className="grid sm:grid-cols-2 gap-4">
              <ContactInfo 
                icon={MapPin}
                title="Adres"
                text="Hacettepe, Hamamönü Sk. No:20, 06230 Altındağ/Ankara" 
              />
              <ContactInfo 
                icon={Phone}
                title="Telefon"
                text="(0312) 311 43 43" 
              />
              <ContactInfo 
                icon={Clock}
                title="Çalışma Saatleri"
                text="Her gün 08:00 - 21:45" 
              />
              <ContactInfo 
                icon={Instagram}
                title="Instagram"
                text="@nobiaco" 
                link="https://instagram.com/nobiaco" 
              />
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-dark p-6 rounded-lg border border-gray-800/50 text-center hover-lift">
                <div className="bg-[#2d5a27]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coffee className="h-8 w-8 text-[#2d5a27]" />
                </div>
                <div className="text-2xl font-bold mb-1">50,000+</div>
                <p className="text-gray-400">Servis Edilen Kahve</p>
              </div>
              <div className="bg-dark p-6 rounded-lg border border-gray-800/50 text-center hover-lift">
                <div className="bg-[#2d5a27]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coffee className="h-8 w-8 text-[#2d5a27]" />
                </div>
                <div className="text-2xl font-bold mb-1">10,000+</div>
                <p className="text-gray-400">Mutlu Müşteri</p>
              </div>
            </div>

            {/* Special Hours Info */}
            <div className="bg-[#2d5a27]/10 p-6 rounded-lg border border-[#2d5a27]/20">
              <h4 className="text-lg font-semibold mb-3">🎓 Öğrenci İndirimi Saatleri</h4>
              <p className="text-gray-300">
                16:00 - 22:00 saatleri arasında tatlı + içecek kombinasyonlarında %20 indirim fırsatı!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;