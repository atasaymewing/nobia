import React from 'react';
import { Coffee, Users, Target, Award, Heart, Star } from 'lucide-react';

const features = [
  {
    icon: Coffee,
    title: 'Premium Kahve',
    description: 'Özenle seçilmiş kahve çekirdekleri ve uzman baristalarımızla en kaliteli kahve deneyimi.',
  },
  {
    icon: Users,
    title: 'Samimi Ortam',
    description: 'Öğrenci dostu atmosfer ve rahat çalışma ortamı ile ikinci eviniz.',
  },
  {
    icon: Target,
    title: 'Merkezi Konum',
    description: 'Hamamönünün kalbinde, Hacettepe ve Ankara Üniversitesine yakın konumda.',
  },
  {
    icon: Award,
    title: 'Uygun Fiyat',
    description: 'Kaliteli ürünleri öğrenci dostu fiyatlarla sunuyoruz.',
  },
];

const About = () => {
  return (
    <section id="about" className="bg-dark-light relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOGMxMC4yNiAwIDE4LTguMDU5IDE4LTE4cy03Ljc0LTE4LTE4LTE4em0wIDMzYy04LjI4NCAwLTE1LTYuNzE2LTE1LTE1czYuNzE2LTE1IDE1LTE1IDE1IDYuNzE2IDE1IDE1LTYuNzE2IDE1LTE1IDE1eiIgZmlsbD0iIzJkNWEyNyIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-50" />

      <div className="section-container relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <Heart className="h-6 w-6 text-red-500" fill="currentColor" />
            <span className="text-lg text-[#2d5a27] font-medium">Sosyal Sorumluluk</span>
          </div>
          <h2 className="heading-primary mb-6">Kahveden Fazlası</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Kaliteli kahve deneyimini sosyal sorumlulukla birleştirerek, her fincan kahvenizle topluma katkı sağlıyoruz.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {features.map((feature) => (
            <div 
              key={feature.title} 
              className="group bg-dark p-8 rounded-xl hover-lift border border-gray-800/50 transition-all duration-500 hover:border-[#2d5a27]/50"
            >
              <div className="bg-[#2d5a27]/10 p-3 rounded-lg w-fit mb-6 group-hover:bg-[#2d5a27]/20 transition-colors duration-500">
                <feature.icon className="h-8 w-8 text-[#2d5a27]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-[#2d5a27] transition-colors duration-500">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-[#2d5a27] to-[#1e3d1a] rounded-xl p-8 hover-lift relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOGMxMC4yNiAwIDE4LTguMDU5IDE4LTE4cy03Ljc0LTE4LTE4LTE4em0wIDMzYy04LjI4NCAwLTE1LTYuNzE2LTE1LTE1czYuNzE2LTE1IDE1LTE1IDE1IDYuNzE2IDE1IDE1LTYuNzE2IDE1LTE1IDE1eiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <Star className="h-6 w-6 text-yellow-400" fill="currentColor" />
                <h3 className="text-2xl font-bold">Misyonumuz</h3>
              </div>
              <p className="text-lg leading-relaxed">
                NOBIA Coffee Shop olarak, Hamamönü Ankara'da öğrenci dostu bir ortamda kaliteli kahve deneyimi sunarken 
                sosyal sorumluluk bilinciyle hareket ediyoruz. Tüm gelirlerimizi, eğitim ve toplumsal dayanışmayı 
                desteklemek amacıyla Gülser Vakfı'na bağışlayarak ihtiyaç sahiplerine katkı sağlamayı hedefliyoruz.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#2d5a27] to-[#1e3d1a] rounded-xl p-8 hover-lift relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOGMxMC4yNiAwIDE4LTguMDU5IDE4LTE4cy03Ljc0LTE4LTE4LTE4em0wIDMzYy04LjI4NCAwLTE1LTYuNzE2LTE1LTE1czYuNzE2LTE1IDE1LTE1IDE1IDYuNzE2IDE1IDE1LTYuNzE2IDE1LTE1IDE1eiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <Target className="h-6 w-6 text-blue-400" fill="currentColor" />
                <h3 className="text-2xl font-bold">Vizyonumuz</h3>
              </div>
              <p className="text-lg leading-relaxed">
                Toplum yararına örnek teşkil eden bir marka olmayı hedefleyen NOBIA Coffee Shop, Hamamönü'nde hem 
                öğrencilerin hem de toplulukların buluşma noktası haline gelerek sosyal sorumluluk anlayışının 
                yaygınlaşmasına öncülük etmeyi amaçlamaktadır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;