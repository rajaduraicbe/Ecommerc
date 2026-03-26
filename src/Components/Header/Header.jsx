import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Info, LogIn, Menu, X } from "lucide-react";

export default function Header() {
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ NEW STATES
  const [selectedLang, setSelectedLang] = useState("Eng");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setCurrencyOpen(false);
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleLang = () => {
    setLangOpen(!langOpen);
    setCurrencyOpen(false);
  };

  const toggleCurrency = () => {
    setCurrencyOpen(!currencyOpen);
    setLangOpen(false);
  };

  return (
    <header className="w-full bg-white border-b border-[#D26622] px-4 md:px-12 py-4 relative z-50">
      <div className="flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-[#D26622] font-extrabold text-2xl">COOK</h1>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-6 text-gray-800 font-medium border-l-2 border-[#D26622] px-4">
          <div>🍳 Cooking Classes</div>
          <div>👨‍🍳 Become A Chef</div>
          <div>🥘 Group Cooking</div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-4 relative z-50" ref={dropdownRef}>
          
          {/* Language */}
          <div className="relative">
            <div onClick={toggleLang} className="flex items-center gap-1 cursor-pointer text-sm">
              {selectedLang} <ChevronDown size={14} className="text-[#D26622]" />
            </div>

            {langOpen && (
              <div className="absolute top-10 bg-white border border-[#D26622] shadow rounded p-2 w-40 z-50">
                {['Tamil','Malayalam','Telugu','Hindi','Kannada'].map((lang) => (
                  <div
                    key={lang}
                    onClick={() => {
                      setSelectedLang(lang);
                      setLangOpen(false);
                    }}
                    className="p-2 hover:bg-[#D26622]/20 cursor-pointer"
                  >
                    {lang}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Currency */}
          <div className="relative px-3">
            <div onClick={toggleCurrency} className="flex items-center gap-1 cursor-pointer text-sm">
              {selectedCurrency} <ChevronDown size={14} className="text-[#D26622]" />
            </div>

            {currencyOpen && (
              <div className="absolute right-0 top-10 w-40 bg-white border border-[#D26622] rounded shadow p-2 z-50">
                {['IND','USA','EUR','AED'].map((c) => (
                  <div
                    key={c}
                    onClick={() => {
                      setSelectedCurrency(c);
                      setCurrencyOpen(false);
                    }}
                    className="p-2 hover:bg-[#D26622]/20 cursor-pointer"
                  >
                    {c}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="border-r-2 border-l-2 border-[#D26622] px-3 flex items-center">
            <Info size={16} className="text-gray-600 cursor-pointer" />
          </div>

          {/* Login */}
          <button className="bg-[#D26622] text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-[#b8571c] border-l-2">
            Log In <LogIn size={16} />
          </button>
        </div>

        {/* MOBILE BUTTON */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="bg-[#D26622] text-white p-2 rounded-md">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-white border border-[#D26622] rounded-lg shadow p-4 relative z-50">
          
          <div className="flex flex-col gap-3 mb-4">
            <div className="p-2 hover:bg-[#D26622]/20 cursor-pointer">🍳 Cooking Classes</div>
            <div className="p-2 hover:bg-[#D26622]/20 cursor-pointer">👨‍🍳 Become A Chef</div>
            <div className="p-2 hover:bg-[#D26622]/20 cursor-pointer">🥘 Group Cooking</div>
          </div>

          <div className="flex justify-between gap-4 border-t border-[#D26622] pt-4">
            
            {/* LANG */}
            <div className="w-1/2">
              <div onClick={toggleLang} className="flex justify-between cursor-pointer">
                {selectedLang} <ChevronDown size={14} className="text-[#D26622]" />
              </div>

              {langOpen && (
                <div className="border border-[#D26622] mt-2">
                  {['Tamil','Malayalam','Telugu','Hindi','Kannada'].map((lang) => (
                    <div
                      key={lang}
                      onClick={() => {
                        setSelectedLang(lang);
                        setLangOpen(false);
                      }}
                      className="p-2 hover:bg-[#D26622]/20 cursor-pointer"
                    >
                      {lang}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* USD */}
            <div className="w-1/2">
              <div onClick={toggleCurrency} className="flex justify-between cursor-pointer">
                {selectedCurrency} <ChevronDown size={14} className="text-[#D26622]" />
              </div>

              {currencyOpen && (
                <div className="border border-[#D26622] mt-2">
                  {['IND','USA','EUR','AED'].map((c) => (
                    <div
                      key={c}
                      onClick={() => {
                        setSelectedCurrency(c);
                        setCurrencyOpen(false);
                      }}
                      className="p-2 hover:bg-[#D26622]/20 cursor-pointer"
                    >
                      {c}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <button className="bg-[#D26622] text-white px-6 py-2 rounded-md flex items-center gap-2">
              Log In <LogIn size={16} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}