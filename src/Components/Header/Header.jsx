import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Info, LogIn, Menu, X } from "lucide-react";

export default function Header() {
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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
    <header className="w-full bg-white border-b border-orange-500 px-4 md:px-12 py-4">
      <div className="flex items-center justify-between">
        {/* LOGO */}
        <h1 className="text-orange-600 font-extrabold text-2xl">COOK</h1>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-6 text-gray-800 font-medium border-l-2 border-orange-500 px-4">
          <div>🍳 Cooking Classes</div>
          <div>👨‍🍳 Become A Chef</div>
          <div>🥘 Group Cooking</div>
        </div>

        {/* RIGHT SIDE (TAB + DESKTOP) */}
        <div className="hidden md:flex items-center gap-4 relative" ref={dropdownRef}>
          {/* Language */}
          <div className="relative">
            <div onClick={toggleLang} className="flex items-center gap-1 cursor-pointer text-sm">
              Eng <ChevronDown size={14} className="text-orange-500" />
            </div>

            {langOpen && (
              <div className="absolute top-10 bg-white border border-orange-500 shadow rounded p-2 w-40">
                {['Tamil','Malayalam','Telugu','Hindi','Kannada'].map((lang) => (
                  <div key={lang} className="p-2 hover:bg-orange-100 cursor-pointer">{lang}</div>
                ))}
              </div>
            )}
          </div>

          {/* Currency */}
          <div className="relative px-3">
            <div onClick={toggleCurrency} className="flex items-center gap-1 cursor-pointer text-sm">
              USD <ChevronDown size={14} className="text-orange-500" />
            </div>

            {currencyOpen && (
              <div className="absolute right-0 top-10 w-40 bg-white border border-orange-500 rounded shadow p-2">
                {['IND','USA','EUR','AED'].map((c) => (
                  <div key={c} className="p-2 hover:bg-orange-100 cursor-pointer">{c}</div>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="border-r-2 border-l-2 border-orange-500 px-3 flex items-center">
            <Info size={16} className="text-gray-600 cursor-pointer" />
          </div>

          {/* Login */}
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-orange-600 border-l-2">
            Log In <LogIn size={16} />
          </button>
        </div>

       {/* MOBILE ONLY BUTTON */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="bg-orange-500 text-white p-2 rounded-md">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-white border rounded-lg shadow p-4">
          <div className="flex flex-col gap-3 mb-4">
            <div className="p-2 hover:bg-orange-200 cursor-pointer">🍳 Cooking Classes</div>
            <div className="p-2 hover:bg-orange-200 cursor-pointer">👨‍🍳 Become A Chef</div>
            <div className="p-2 hover:bg-orange-200 cursor-pointer">🥘 Group Cooking</div>
          </div>

          <div className="flex justify-between gap-4 border-t pt-4">
            {/* LANG */}
            <div className="w-1/2">
              <div onClick={toggleLang} className="flex justify-between cursor-pointer">
                Eng <ChevronDown size={14} className="text-orange-500" />
              </div>

              {langOpen && (
                <div className="border mt-2">
                  {['Tamil','Malayalam','Telugu','Hindi','Kannada'].map((lang) => (
                    <div key={lang} className="p-2 hover:bg-orange-200 cursor-pointer">{lang}</div>
                  ))}
                </div>
              )}
            </div>

            {/* USD */}
            <div className="w-1/2">
              <div onClick={toggleCurrency} className="flex justify-between cursor-pointer">
                USD <ChevronDown size={14} className="text-orange-500" />
              </div>

              {currencyOpen && (
                <div className="border mt-2">
                  {['IND','USA','EUR','AED'].map((c) => (
                    <div key={c} className="p-2 hover:bg-orange-200 cursor-pointer">{c}</div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <button className="bg-orange-500 text-white px-6 py-2 rounded-md flex items-center gap-2">
              Log In <LogIn size={16} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
