import Comments from "../components/Comment";
import Footer from "../components/Footer";
const Wedding = () => {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center overflow-hidden">
        {/* Background Container */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "https://i.ibb.co.com/VVqSBmD/bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.5,
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center p-6 bg-white bg-opacity-80 rounded-lg shadow-lg max-w-lg mx-auto">
          <h1 className="text-3xl mb-6 text-black">Undangan Pernikahan</h1>
          <div className="bg-slate-700 w-[300px] h-[300px] rounded-full flex items-center justify-center mb-6 overflow-hidden">
            <img
              src="https://i.ibb.co.com/VVqSBmD/bg.png"
              alt="Wedding background"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-2xl mb-4 text-black">Karina & Wawan</p>
          <p className="text-xl mb-6 text-black">Rabu, 15 Maret 2025</p>
          <button className="px-6 py-3 bg-stone-100 text-black font-semibold rounded-lg shadow-lg flex items-center justify-center space-x-2 transition-colors duration-300 hover:bg-slate-700 hover:text-white">
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
              className="lucide lucide-calendar-plus-2"
            >
              <path d="M8 2v4" />
              <path d="M16 2v4" />
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <path d="M3 10h18" />
              <path d="M10 16h4" />
              <path d="M12 14v4" />
            </svg>
            <span>Save The Date</span>
          </button>
        </div>
      </div>

      {/* SVG Wave as Separator */}
      <div className="relative w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0 left-0 w-full"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,165.3C672,160,768,96,864,96C960,96,1056,160,1152,154.7C1248,149,1344,75,1392,37.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Additional Content */}
      <div className="bg-gray-100 py-16 px-4 text-center text-black">
        <h1 className="text-xl font-semibold mb-4">
          بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
        </h1>
        <p className="mb-4 text-black">
          Assalamualaikum Warahmatullahi Wabarakatuh
        </p>
        <p className="mb-8 text-black">
          Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i
          serta kerabat sekalian untuk menghadiri acara pernikahan kami:
        </p>

        <div className="flex flex-col items-center mb-8">
          <div className="w-[300px] h-[300px] rounded-full mb-6 overflow-hidden">
            <img
              src="https://i.ibb.co.com/9Nd58Wj/cowo.png"
              alt="Groom"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-lg font-semibold text-black">Wawan Darmawan</p>
          <p className="text-black">Putra</p>
          <p className="text-black">Bapak-Ibu</p>
        </div>
        <p className="text-3xl font-semibold my-2 text-black">&</p>
        <div className="flex flex-col items-center mb-8">
          <div className="w-[300px] h-[300px] rounded-full mb-6 overflow-hidden">
            <img
              src="https://i.ibb.co.com/bLqHP8Z/cewe.png"
              alt="Bride"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-lg font-semibold text-black">Karina Aespa</p>
          <p className="text-black">Putri</p>
          <p className="text-black">Bapak-Ibu</p>
        </div>
        <p className="mt-8 text-lg font-semibold text-black">
          Allah Subhanahu Wa Ta'ala berfirman :
        </p>
        <div className="text-center mx-auto max-w-3xl px-4">
          <p className="mt-6 text-lg leading-relaxed text-black">
            "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
            dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
            kasih dan sayang. Sungguh, pada yang demikian itu benar-benar
            terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."
          </p>
          <p className="mt-6 text-lg font-semibold text-black">
            (QS. Ar-Rum: 21)
          </p>
        </div>
      </div>

      {/* Event Details */}
      <div className="bg-gray-200 py-16 px-4 text-center">
        <p className="text-lg mb-2 text-black">
          Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala, insyaAllah
          kami akan menyelenggarakan acara:
        </p>
        <div className="mb-6">
          <p className="text-xl font-semibold text-black">Akad</p>
          <p className="text-lg text-black">Pukul 10.00 WIB - Selesai</p>
        </div>
        <div className="mb-6">
          <p className="text-xl font-semibold text-black">Resepsi</p>
          <p className="text-lg text-black">Pukul 13.00 WIB - Selesai</p>
        </div>
        <button className="mx-auto px-6 py-3 bg-stone-100 text-black font-semibold rounded-lg shadow-lg flex items-center justify-center space-x-2 transition-colors duration-300 hover:bg-slate-700 hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-map"
          >
            <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
            <path d="M15 5.764v15" />
            <path d="M9 3.236v15" />
          </svg>
          <span>Lihat Google Maps</span>
        </button>
        <p className="mt-4 text-lg text-black">Korea Selatan</p>
      </div>
      <Comments />
      <Footer />
    </>
  );
};

export default Wedding;
