import Link from "next/link";
import ButtonConfetti from "./components/Confetti.jsx";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-100 overflow-hidden bg-pattern">
      {/* Background SVG akan diatur di CSS */}

      <div className="relative z-10 flex items-center justify-center min-h-screen overflow-hidden">
        <div className="relative shadow-lg rounded-2xl w-[400px] h-[600px] overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/background.jpg')] opacity-15"></div>
          <div className="w-[400px] h-[600px] grid space-y-5 content-center text-center z-50">
            <h1 className="great-vibes-regular text-4xl text-black">
              The Wedding Of
            </h1>
            <div className="border border-black w-[300px] justify-self-center h-[300px] rounded-full flex items-center justify-center z-10">
              <img
                src="https://i.ibb.co.com/VVqSBmD/bg.png"
                alt="Wedding background"
                className="w-full h-full object-cover block"
              />
            </div>
            <p className="great-vibes-regular text-4xl text-black">
              Karina & Wawan{" "}
            </p>
            <div className="relative z-20">
            <Link href="/wedding" className="block justify-self-center">
              <ButtonConfetti className="px-6 py-3 text-black font-semibold rounded-lg shadow-lg flex items-center justify-center space-x-2 transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail-open"
                >
                  <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                  <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                </svg>
                <span>Buka Undangan</span>
              </ButtonConfetti>
            </Link>
            </div>    
          </div>
        </div>
      </div>
    </div>
  );
}
