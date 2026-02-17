import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center font-sans antialiased text-slate-800">
      
      {/* Üst Link - Zarif ve Hafif */}
      <div className="mb-12">
        <a 
          href="https://spor.imamhatipsporoyunlari.com" 
          className="text-xs tracking-[0.3em] text-gray-400 hover:text-blue-500 transition-colors duration-500"
        >
          spor.imamhatipsporoyunlari.com
        </a>
      </div>

      <div className="flex flex-col items-center">
        {/* Bismillah */}
        <h1 className="text-3xl font-light tracking-widest text-slate-600 mb-12">
          Bismillah
        </h1>

        {/* Logo */}
        <div className="mb-10">
          <img 
            src="https://imamhatipsporoyunlari.com/assets/altli_logo-DWKsZFhG.png" 
            alt="Proje Logosu" 
            className="w-48 md:w-56 opacity-90 transition-opacity duration-700 hover:opacity-100"
          />
        </div>

        {/* Yakında Yazısı - Sade ve Şık */}
        <div className="flex flex-col items-center gap-4">
          <span className="text-sm tracking-[0.4em] text-slate-400 uppercase font-medium">
            Yakında
          </span>
          {/* Çok ince bir ayırıcı çizgi */}
          <div className="w-8 h-[1px] bg-slate-300"></div>
        </div>
      </div>

    </div>
  )
}

export default App