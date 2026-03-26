import { useState } from "react";
import bakery from "./../../assets/Explore/Icons/Explore1.svg";
import vegan from "./../../assets/Explore/Icons/Explore2.svg";
import seafood from "./../../assets/Explore/Icons/Explore3.svg";
import bbq from "./../../assets/Explore/Icons/Explore4.svg";
import wine from "./../../assets/Explore/Icons/Explore5.svg";
import cake from "./../../assets/Explore/Icons/Explore6.svg";
import logo from "./../../assets/Explore/Icons/logo.png";
import arrowIcon from "./../../assets/Explore/Icons/Arrow right.svg";
import fireIcon from "../../assets/Explore/Fire.svg";
import showMoreImg from "./../../assets/Explore/Icons/Arrow down.png";

export default function ExploreLearn() {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = [
    {
      title: "Bakery",
      desc: "Master baking from rustic bread to delicate pastries",
      img: bakery,
    },
    {
      title: "Vegan Cooking",
      desc: "Create delicious, nutritious meals with plant-based ingredients",
      img: vegan,
    },
    {
      title: "Seafood Mastery",
      desc: "Dive into seafood: from grilling fish to creating sushi",
      img: seafood,
    },
    {
      title: "BBQ & Grilling",
      desc: "Fire up your skills with mouth-watering BBQ dishes",
      img: bbq,
    },
    {
      title: "Wine Pairing",
      desc: "Enhance culinary experiences by mastering wine pairing",
      img: wine,
    },
    {
      title: "Cake Decorating",
      desc: "Unleash creativity with cake decorating techniques",
      img: cake,
    },
  ];

  return (
    <div className="bg-white px-4 sm:px-6 md:px-10 py-6 sm:py-10">
      
      {/* HEADER */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div className="flex items-center gap-2 sm:gap-3">
          <img
            src={logo}
            alt="logo"
            className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain"
          />
          <h1 className="text-lg sm:text-2xl md:text-4xl font-bold text-gray-800">
            Explore & Learn
          </h1>
        </div>

        {/* SEARCH */}
        <div className="hidden lg:flex items-center gap-2 font-semibold text-black cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-[#D26622]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35m1.85-5.4a7.25 7.25 0 11-14.5 0 7.25 7.25 0 0114.5 0z"
            />
          </svg>
          <span className="text-sm md:text-base">
            Search tutors by category
          </span>
        </div>
      </div>

      {/* DESCRIPTION */}
      <p className="hidden sm:block text-gray-800 mb-12 -mt-5 sm:ml-[52px] text-xs sm:text-sm md:text-base">
        Dive into a range of cooking styles and techniques tailored to your interests
      </p>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {categories.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`flex items-start sm:items-center gap-3 sm:gap-4 rounded-xl border p-3 sm:p-4 transition-all cursor-pointer ${
                isActive
                  ? "bg-[#D26622] text-white border-[#D26622]"
                  : "bg-white border-[#D26622] text-[#D26622]"
              }`}
            >
              {/* ICON */}
              <img
                src={item.img}
                alt={item.title}
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                style={{
                  filter: isActive
                    ? "brightness(0) invert(1)"
                    : "invert(48%) sepia(93%) saturate(1200%) hue-rotate(2deg)",
                }}
              />

              {/* TEXT */}
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h2
                    className={`font-semibold text-sm sm:ml-4 sm:text-base md:text-lg ${
                      isActive ? "text-white" : "text-black"
                    }`}
                  >
                    {item.title}
                  </h2>

                  <img
                    src={isActive ? fireIcon : arrowIcon}
                    alt="icon"
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                </div>

                <p
                  className={`text-xs sm:text-sm mt-1 sm:ml-4 ${
                    isActive ? "text-white/80" : "text-black"
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* SHOW MORE */}
      <div className="flex items-center justify-center sm:justify-end mt-5 sm:mt-6 gap-2 cursor-pointer text-black font-semibold text-xs sm:text-sm md:text-base">
        <span>Show more</span>
        <img
          src={showMoreImg}
          alt="show more"
          className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
        />
      </div>
    </div>
  );
}