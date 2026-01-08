import React, { useState, useRef, useEffect } from "react";
import { Download, Github } from "lucide-react";

// Danh sách ảnh cá nhân - bạn có thể thêm/bớt dễ dàng ở đây
const personalImages = [
  "/images/my1.jpg",
  "/images/my2.jpg",
  "/images/my3.jpg",
  "/images/my4.jpg",
];

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play: tự động chuyển ảnh sau 5 giây
  useEffect(() => {
    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % personalImages.length);
      }, 5000);
    };

    startAutoPlay();

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, []);

  // Reset auto-play khi người dùng tương tác
  const resetAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % personalImages.length);
    }, 5000);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart(e.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const offset = e.clientX - dragStart;
    setDragOffset(offset);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    setIsDragging(false);

    const offset = e.clientX - dragStart;
    const threshold = 50; // Khoảng cách tối thiểu để xem là swipe

    if (Math.abs(offset) > threshold) {
      if (offset > 0) {
        // Vuốt sang phải -> quay lại ảnh trước
        setCurrentImageIndex((prev) =>
          prev === 0 ? personalImages.length - 1 : prev - 1
        );
      } else {
        // Vuốt sang trái -> đến ảnh tiếp theo
        setCurrentImageIndex((prev) => (prev + 1) % personalImages.length);
      }
    }

    setDragOffset(0);
    resetAutoPlay();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStart(e.touches[0].clientX);
    setDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const offset = e.touches[0].clientX - dragStart;
    setDragOffset(offset);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsDragging(false);

    const offset = e.changedTouches[0].clientX - dragStart;
    const threshold = 50;

    if (Math.abs(offset) > threshold) {
      if (offset > 0) {
        setCurrentImageIndex((prev) =>
          prev === 0 ? personalImages.length - 1 : prev - 1
        );
      } else {
        setCurrentImageIndex((prev) => (prev + 1) % personalImages.length);
      }
    }

    setDragOffset(0);
    resetAutoPlay();
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-white/5 blur-[100px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-orange-500/5 blur-[120px] rounded-full animate-glow-slow"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 order-2 md:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest animate-bounce">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            Available for New Projects
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              I'm <span className="gradient-text">Nguyen Quang Vinh</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl font-medium text-gray-400">
              Fullstack Developer
            </h2>
            <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
              A motivated fresh graduate focused on creating efficient and
              impactful digital solutions. Specialized in MERN stack and
              cross-platform applications.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 px-8 py-4 bg-white text-black rounded-xl font-bold hover:scale-105 transition-transform"
            >
              View Work
            </a>
            <a
              href="/images/cv.pdf"
              download="CV_NguyenQuangVinh.pdf"
              className="flex items-center gap-2 px-8 py-4 glass text-white rounded-xl font-bold hover:bg-white/10 transition-colors"
            >
              Download CV <Download size={20} />
            </a>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <a
              href="https://github.com/quangvinh2007"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <div className="h-px w-12 bg-white/10"></div>
            <span className="text-xs text-gray-400 uppercase tracking-widest font-mono">
              FPT University Graduate 2025
            </span>
          </div>
        </div>

        {/* Phần ảnh cá nhân - Carousel với Swipe */}
        <div className="relative order-1 md:order-2 flex justify-center">
          <div className="relative w-64 h-64 lg:w-96 lg:h-96 group cursor-grab active:cursor-grabbing">
            {/* Animated Frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white to-orange-500 rounded-3xl rotate-6 animate-glow-slow opacity-20"></div>
            <div className="absolute inset-0 border-2 border-white/30 rounded-3xl -rotate-3"></div>

            {/* Carousel Container */}
            <div
              ref={carouselRef}
              className="absolute inset-0 overflow-hidden rounded-3xl glass border-white/10"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="relative w-full h-full">
                {/* Ảnh carousel với hiệu ứng trượt */}
                <div
                  className="relative w-full h-full transition-transform duration-300 ease-out"
                  style={{
                    transform: `translateX(${dragOffset}px)`,
                  }}
                >
                  <img
                    src={personalImages[currentImageIndex]}
                    alt={`Nguyen Quang Vinh - Photo ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out select-none"
                    draggable={false}
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                  {/* Tag góc dưới */}
                  <div className="absolute bottom-6 left-6">
                    <p className="text-sm font-mono text-white">#vinhnq</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dots indicator - tương tác được */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-3">
              {personalImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentImageIndex(index);
                    resetAutoPlay();
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? "bg-white w-8"
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
