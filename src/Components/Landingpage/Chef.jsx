import chefImg from "../../assets/chef.jpg";

export default function BecomeChef() {
  return (
    <section className="w-full py-10 lg:py-15">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">

        {/* LEFT CONTENT */}
        <div className="flex-1 max-w-[580px] order-2 lg:order-1">

          {/* TITLE */}
          <h2 className="text-[28px] sm:text-[34px] md:text-[36px] lg:text-[40px] font-bold text-[#222222] mb-4 leading-tight">
            Become A Chef
          </h2>

          {/* DESCRIPTION */}
          <p className="text-[13.5px] sm:text-[14px] md:text-[14.5px] lg:text-[15px] text-[#5a5a5a] leading-[22px] sm:leading-[24px] md:leading-[25px] lg:leading-[26px] mb-6 max-w-[540px]">
            Share your culinary secrets, inspire cooking enthusiasts worldwide, and grow
            career like never before. Our platform offers a unique way to connect, teach,
            and earn.
          </p>

          {/* BULLETS */}
          <div className="space-y-3 sm:space-y-4 mb-6 lg:mb-8">

            <div className="flex items-start gap-3">
              <div className="mt-[4px] w-5 h-5 rounded-full bg-[#E67E22] flex items-center justify-center">
                <span className="text-white text-[11px] font-bold">✓</span>
              </div>
              <p className="text-[13.5px] sm:text-[14px] md:text-[14.2px] lg:text-[14.5px] text-[#555555] leading-[22px] sm:leading-[23px] md:leading-[24px] lg:leading-[24px] max-w-[520px]">
                <span className="font-semibold text-[#222222]">
                  Build Your Brand.
                </span>{" "}
                Showcase your culinary skills and build your brand within our community.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-[4px] w-5 h-5 rounded-full bg-[#E67E22] flex items-center justify-center">
                <span className="text-white text-[11px] font-bold">✓</span>
              </div>
              <p className="text-[13.5px] sm:text-[14px] md:text-[14.2px] lg:text-[14.5px] text-[#555555] leading-[22px] sm:leading-[23px] md:leading-[24px] lg:leading-[24px] max-w-[520px]">
                <span className="font-semibold text-[#222222]">
                  Expand Your Reach.
                </span>{" "}
                Connect with cooking enthusiasts across the globe and expand your audience
                beyond geographical limits.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-[4px] w-5 h-5 rounded-full bg-[#E67E22] flex items-center justify-center">
                <span className="text-white text-[11px] font-bold">✓</span>
              </div>
              <p className="text-[13.5px] sm:text-[14px] md:text-[14.2px] lg:text-[14.5px] text-[#555555] leading-[22px] sm:leading-[23px] md:leading-[24px] lg:leading-[24px] max-w-[520px]">
                <span className="font-semibold text-[#222222]">
                  Grow Your Business Faster.
                </span>{" "}
                Utilize our platform's features and resources to accelerate your growth and
                increase your income.
              </p>
            </div>

          </div>

          {/* BUTTON + LINK */}
          <div className="flex flex-col items-start gap-3">

            <button className="bg-[#E67E22] hover:bg-[#cf711f] text-white text-[13px] sm:text-[14px] lg:text-[14.5px] font-medium px-4 sm:px-5 py-2 rounded-md shadow-sm transition">
              Become a chef
            </button>

            <div className="flex items-center gap-2 text-[#5a5a5a] text-[12.5px] sm:text-[13px] lg:text-[13.5px] cursor-pointer">
              <div className="w-4 h-4 border border-[#E67E22] rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-[#E67E22] rounded-full"></div>
              </div>
              <span>Learn how our platform works</span>
            </div>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center lg:justify-end w-full order-1 lg:order-2">
          <img
            src={chefImg}
            alt="chef"
            className="w-full max-w-[420px] sm:max-w-[480px] md:max-w-[600px] lg:max-w-[520px] 
                       h-[240px] sm:h-[300px] md:h-[360px] lg:h-[360px] 
                       object-cover rounded-[18px]"
          />
        </div>

      </div>
    </section>
  );
}