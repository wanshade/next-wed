import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-100 overflow-hidden bg-pattern">
      {/* Background SVG akan diatur di CSS */}

      <div className="relative z-10 flex items-center justify-center min-h-screen overflow-hidden">
        <div className="text-center space-y-6 p-8 bg-white shadow-lg rounded-2xl w-[400px] h-[600px] overflow-hidden">
          <h1 className="font-sora text-4xl">The Wedding Of</h1>
          <div className="mx-auto bg-slate-700 w-[300px] h-[300px] rounded-full flex items-center justify-center">
            <img
              src="https://i.ibb.co.com/VVqSBmD/bg.png"
              alt="Wedding background"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-sora text-4xl">Karina & Wawan </p>

          <Link href="/wedding">
            <button className="mt-10 px-6 py-3 bg-stone-100 text-black font-semibold rounded-lg shadow-lg flex items-center justify-center space-x-2 mx-auto transition-colors duration-300 hover:bg-slate-700 hover:text-white">
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
              <span>Open Invitation</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
