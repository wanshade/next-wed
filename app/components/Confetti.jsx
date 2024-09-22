"use client";
import React from "react";
import confetti from "canvas-confetti";
import Button from "./ui/Button";

// ButtonConfetti Component
const ButtonConfetti = ({ children, className, ...props }) => {
  const handleClick = () => {
    const duration = 5 * 1000; // durasi 5 detik
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // confetti kiri
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      // confetti kanan
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  return (
    <Button
      onClick={handleClick}
      className={`px-4 py-2 bg-slate-500 text-white font-semibold rounded-md hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-opacity-75 ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonConfetti;
