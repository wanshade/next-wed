"use client";

import React, { useState, useEffect, useRef } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Show button when scrolled down 300px from top
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Play audio when component mounts
  useEffect(() => {
    const playAudio = async () => {
      try {
        if (audioRef.current) {
          await audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (error) {
        console.error("Failed to play audio:", error);
      }
    };

    playAudio();
  }, []);

  return (
    <footer className="bg-gray-800 text-white py-6 mt-8 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h5 className="text-lg font-semibold mb-2">Tentang Kami</h5>
            <p className="text-gray-400">
              Kami adalah platform yang menyediakan berbagai fitur untuk
              meningkatkan pengalaman Anda.
            </p>
          </div>
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h5 className="text-lg font-semibold mb-2">Kontak Kami</h5>
            <p className="text-gray-400">Email: info@example.com</p>
            <p className="text-gray-400">Telepon: +62 123 4567 890</p>
          </div>
          <div className="text-center md:text-left">
            <h5 className="text-lg font-semibold mb-2">Ikuti Kami</h5>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2a6 6 0 00-6 6v4H9v4h3v8h4v-8h3l1-4h-4V8a2 2 0 012-2h4V2h-2z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 3a10.8 10.8 0 01-3.1.85A5.38 5.38 0 0022.4 2a10.7 10.7 0 01-3.41 1.3A5.36 5.36 0 0016 3a5.39 5.39 0 00-5.37 5.37c0 .42.05.83.1 1.23A15.3 15.3 0 011.67 3.15a5.36 5.36 0 001.67 7.16A5.29 5.29 0 011 9.6v.07a5.36 5.36 0 004.29 5.26A5.4 5.4 0 012 15.4a5.4 5.4 0 005.04 3.74A10.8 10.8 0 010 23.5a15.24 15.24 0 008.28 2.43c9.92 0 15.31-8.21 15.31-15.31 0-.23-.01-.46-.02-.69A10.8 10.8 0 0023 3z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11a4 4 0 11-8 0 4 4 0 018 0z" />
                  <path d="M17.5 6.5h.01" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-700 py-3 mt-6">
        <div className="container mx-auto text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} Nama Perusahaan. Semua hak cipta
            dilindungi.
          </p>
        </div>
      </div>

      {/* Audio Player and Back to Top Button */}
      <div className="fixed bottom-6 right-6 flex flex-col items-center space-y-2">
        <button
          onClick={handlePlayPause}
          className="bg-slate-500 text-white p-2 rounded-full shadow-lg hover:bg-slate-600 transition-colors duration-300"
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 19L19 12L6 5V19Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h4v16H4V4zm12 0h4v16h-4V4z" />
            </svg>
          )}
        </button>
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="bg-slate-500 text-white p-2 rounded-full shadow-lg hover:bg-slate-600 transition-colors duration-300"
            aria-label="Back to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 15l-7-7-7 7" />
            </svg>
          </button>
        )}
        <audio ref={audioRef} loop>
          <source src="https://github.com/wanshade/next-wed/blob/main/app/assets/music.mp3?raw=true" type="audio/mpeg" />
        </audio>
      </div>
    </footer>
  );
};

export default Footer;
