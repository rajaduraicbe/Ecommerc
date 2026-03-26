import React from "react";
import { Calendar } from "lucide-react"; 
import b1 from "./../../assets/Blog/b1.jpg";
import b2 from "./../../assets/Blog/b2.jpg";
import b3 from "./../../assets/Blog/b3.jpg";
import b4 from "./../../assets/Blog/b4.jpg";
import leaf from "./../../assets/Blog/leaf.png";

const blogs = [
  { img: b1, title: "Mastering the Art of Homemade Pizza" },
  { img: b2, title: "Delectable Homemade Ice Cream" },
  { img: b3, title: "How to Prepare Authentic Mexican Tacos" },
  { img: b4, title: "Tips and Techniques for a Restaurant-Quality Steak" },
];

const categories = ["Bakery", "Thai", "Seafood", "Vegan", "BBQ & Grilling", "Japanese Sushi Making", "Italian Cuisine"];
const countries = ["German", "USA", "Spain", "France", "Maxico"];

export default function LandingSection() {
  return (
    /* Section padding exactly matches your Hero section for desktop alignment */
    <section className="bg-white font-poppins px-6 md:px-8 lg:pl-12 lg:pr-26 py-12 md:py-20">
      
      <div className="w-full flex flex-col lg:flex-row gap-12 xl:gap-24">
        
        {/* --- LEFT SIDE: Popular Online Classes --- */}
        <div className="w-full lg:w-[38%] order-2 lg:order-1">
          {/* Header */}
          <div className="flex items-center gap-3 mb-10">
            <img src={leaf} alt="leaf" className="w-7 h-7 object-contain" />
            <h2 className="text-3xl font-bold text-[#2D2D2D] tracking-tight">
              Popular online classes
            </h2>
          </div>

          {/* Content Area: lg:pl-6 ah remove panniten. 
            Ippo header-um kila irukura content-um "ORE STRAIGHT LINE"-la varum.
          */}
          <div className="w-full">
            <div className="mb-14">
              <h3 className="text-xl font-bold mb-6 text-[#2D2D2D]">
                Find a tutor by category
              </h3>
              <div className="flex flex-wrap gap-3">
                {categories.map((item, i) => (
                  <button key={i} className="px-6 py-2 border border-[#FDEBD0] text-[#B87333] rounded-full text-[15px] font-medium hover:bg-[#FFF5E6] transition">
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-6 text-[#2D2D2D]">
                Find a tutor by country
              </h3>
              <div className="flex flex-wrap gap-3">
                {countries.map((item, i) => (
                  <button key={i} className="px-8 py-2 border border-[#FDEBD0] text-[#B87333] rounded-full text-[15px] font-medium hover:bg-[#FFF5E6]">
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: Cook Blog --- */}
        <div className="flex-1 order-1 lg:order-2">
          {/* Blog Header also aligned to its container's left */}
          <div className="flex items-center gap-3 mb-10">
            <img src={leaf} alt="leaf" className="w-7 h-7 object-contain" />
            <h2 className="text-3xl font-bold text-[#2D2D2D] tracking-tight">
              Cook Blog
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogs.map((blog, i) => (
              <div
                key={i}
                className={`bg-white rounded-[20px] overflow-hidden border border-[#FDEBD0]/50 shadow-sm hover:shadow-md transition-all ${i >= 2 ? 'hidden md:block' : 'block'}`}
              >
                <div className="h-56 overflow-hidden">
                  <img src={blog.img} alt={blog.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-[#B87333] mb-3">
                    <Calendar size={16} strokeWidth={2.5} />
                    <span className="text-[13px] font-bold">24 Apr, 2023</span>
                  </div>
                  <h4 className="font-bold text-[18px] leading-tight text-[#2D2D2D]">
                    {blog.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}