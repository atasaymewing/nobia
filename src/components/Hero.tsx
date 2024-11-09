import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock, Star, Heart } from 'lucide-react';

const images = [
  'https://i.ibb.co/k2xppR6/fbdb4b80-0554-49ef-937c-7fa0d58f2891.jpg',
  'https://i.ibb.co/28HyPfP/586753cb-7884-43c5-8ab8-c6d36133f082.jpg',
  'https://i.ibb.co/6JHXrS8/b97587f4-cb2c-4608-bc39-5984e28752f7.jpg'
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [nextImage, setNextImage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setNextImage((currentImage + 1) % images.length);
      
      setTimeout(() => {
        setCurrentImage(nextImage);
        setIsTransitioning(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImage, nextImage]);

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background Images */}
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentImage 
              ? 'opacity-100 scale-100' 
              : index === nextImage && isTransitioning
              ? 'opacity-100 scale-105'
              : 'opacity-0 scale-110'
          }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            zIndex: index === currentImage ? 1 : 0
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* Image Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImage ? 'bg-white w-4' : 'bg-white/50'
            }`}
            onClick={() => {
              setIsTransitioning(true);
              setNextImage(index);
              setTimeout(() => {
                setCurrentImage(index);
                setIsTransitioning(false);
              }, 1000);
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="section-container relative z-10">
        <div className="max-w-3xl fade-in">
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-[#2d5a27]/20 px-4 py-2 rounded-full border border-[#2d5a27]/30">
              <span className="text-[#2d5a27] font-semibold">Premium Kahve Deneyimi</span>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            Ankara'nın En Sıcak
            <span className="text-[#2d5a27]"> Buluşma Noktası</span>
          </h1>

          <div className="flex items-center gap-2 mb-6">
            <Heart className="h-5 w-5 text-red-500" fill="currentColor" />
            <p className="text-lg text-gray-300">
              Tüm gelirler Gülser Vakfı'na bağışlanmaktadır
            </p>
          </div>

          <p className="text-xl mb-8 text-gray-300 leading-relaxed">
            Hamamönü'nün kalbinde, özenle seçilmiş kahve çekirdekleri ve eşsiz 
            lezzetlerle hazırlanmış içeceklerimizle sizi bekliyoruz.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#menu" className="btn-primary flex items-center gap-2 group">
              Menüyü Keşfet
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#about" 
              className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Hakkımızda
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 bg-black/30 p-4 rounded-lg backdrop-blur-sm">
              <Clock className="h-10 w-10 text-[#2d5a27]" />
              <div>
                <h3 className="font-semibold">08:00 - 21:45</h3>
                <p className="text-gray-400">Her gün açık</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-black/30 p-4 rounded-lg backdrop-blur-sm">
              <Star className="h-10 w-10 text-[#2d5a27]" />
              <div>
                <h3 className="font-semibold">4.9/5 Puan</h3>
                <p className="text-gray-400">500+ değerlendirme</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-black/30 p-4 rounded-lg backdrop-blur-sm">
              <Heart className="h-10 w-10 text-[#2d5a27]" />
              <div>
                <h3 className="font-semibold">Sosyal Sorumluluk</h3>
                <p className="text-gray-400">Gülser Vakfı</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;