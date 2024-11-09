import React, { useState, useEffect } from 'react';
import { X, Coffee, CakeSlice } from 'lucide-react';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-dark-light rounded-xl p-5 sm:p-8 max-w-lg w-full relative animate-fadeIn mx-4">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-3 top-3 text-gray-400 hover:text-white p-1"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-center space-y-4 sm:space-y-6 pt-2">
          <div className="flex justify-center space-x-2">
            <CakeSlice className="h-7 w-7 sm:h-8 sm:w-8 text-[#2d5a27]" />
            <Coffee className="h-7 w-7 sm:h-8 sm:w-8 text-[#2d5a27]" />
          </div>
          
          <h3 className="text-xl sm:text-2xl font-bold">Öğrenci Kampanyası! 🎉</h3>
          
          <div className="space-y-3 text-base sm:text-lg">
            <p>
              <span className="font-semibold text-[#2d5a27]">16:00-22:00</span> arasında 
              tatlı + içecek kombinasyonunda <span className="font-semibold">%20 indirim</span>!
            </p>
          </div>

          <div className="bg-[#2d5a27]/20 p-3 sm:p-4 rounded-lg">
            <p className="text-xs sm:text-sm">
              * Üniversite öğrenci kartınızı göstererek bu özel fırsatlardan hemen yararlanabilirsiniz.
            </p>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="btn-primary w-full text-sm sm:text-base py-2.5 sm:py-3"
          >
            Harika, Teşekkürler!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;