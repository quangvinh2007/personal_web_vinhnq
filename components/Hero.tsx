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
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isFlipping, setIsFlipping] = useState(false);
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
    setDragStart({ x: e.clientX, y: e.clientY });
    setDragOffset({ x: 0, y: 0 });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const offsetX = e.clientX - dragStart.x;
    const offsetY = e.clientY - dragStart.y;
    setDragOffset({ x: offsetX, y: offsetY });
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    setIsDragging(false);

    const offsetX = e.clientX - dragStart.x;
    const offsetY = e.clientY - dragStart.y;
    const threshold = 50;

    // Ưu tiên vuốt dọc (lật ảnh) hơn vuốt ngang
    if (
      Math.abs(offsetY) > Math.abs(offsetX) &&
      Math.abs(offsetY) > threshold
    ) {
      // Vuốt lên -> lật ảnh
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % personalImages.length);
        setIsFlipping(false);
      }, 300);
    } else if (Math.abs(offsetX) > threshold) {
      if (offsetX > 0) {
        setCurrentImageIndex((prev) =>
          prev === 0 ? personalImages.length - 1 : prev - 1
        );
      } else {
        setCurrentImageIndex((prev) => (prev + 1) % personalImages.length);
      }
    }

    setDragOffset({ x: 0, y: 0 });
    resetAutoPlay();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    setDragOffset({ x: 0, y: 0 });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const offsetX = e.touches[0].clientX - dragStart.x;
    const offsetY = e.touches[0].clientY - dragStart.y;
    setDragOffset({ x: offsetX, y: offsetY });
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsDragging(false);

    const offsetX = e.changedTouches[0].clientX - dragStart.x;
    const offsetY = e.changedTouches[0].clientY - dragStart.y;
    const threshold = 50;

    if (
      Math.abs(offsetY) > Math.abs(offsetX) &&
      Math.abs(offsetY) > threshold
    ) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % personalImages.length);
        setIsFlipping(false);
      }, 300);
    } else if (Math.abs(offsetX) > threshold) {
      if (offsetX > 0) {
        setCurrentImageIndex((prev) =>
          prev === 0 ? personalImages.length - 1 : prev - 1
        );
      } else {
        setCurrentImageIndex((prev) => (prev + 1) % personalImages.length);
      }
    }

    setDragOffset({ x: 0, y: 0 });
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

        {/* Phần ảnh cá nhân - Carousel với Swipe 3D */}
        <div className="relative order-1 md:order-2 flex justify-center">
          <div className="relative w-64 h-64 lg:w-96 lg:h-96 group cursor-grab active:cursor-grabbing">
            {/* Animated Frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white to-orange-500 rounded-3xl rotate-6 animate-glow-slow opacity-20"></div>
            <div className="absolute inset-0 border-2 border-white/30 rounded-3xl -rotate-3"></div>

            {/* Carousel Container */}
            <div
              ref={carouselRef}
              className="absolute inset-0 overflow-hidden rounded-3xl glass border-white/10"
              style={{ perspective: "1000px" }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="relative w-full h-full">
                {/* Ảnh carousel với hiệu ứng 3D */}
                <div
                  className="relative w-full h-full"
                  style={{
                    transform: isFlipping
                      ? "rotateX(-90deg)"
                      : `translateX(${dragOffset.x}px) translateY(${
                          dragOffset.y
                        }px) rotateX(${dragOffset.y * 0.1}deg)`,
                    transition: isFlipping
                      ? "transform 0.3s ease-in"
                      : isDragging
                      ? "none"
                      : "transform 0.3s ease-out",
                    transformStyle: "preserve-3d",
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

                  {/* Tag góc dưới trái */}
                  <div className="absolute bottom-4 left-4">
                    <p className="text-sm font-mono text-white">#vinhnq</p>
                  </div>

                  {/* Dots indicator - đặt trong ảnh, góc dưới phải */}
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    {personalImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(index);
                          resetAutoPlay();
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex
                            ? "bg-white w-6"
                            : "bg-white/40 hover:bg-white/60"
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
