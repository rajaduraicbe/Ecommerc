import studentImg from "../../assets/student.jpg";

export default function BecomeStudent() {
  return (
    <section className="w-full py-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">

        {/* MAIN CARD */}
        <div className="flex flex-col md:flex-row rounded-[22px] overflow-hidden lg:h-[500px]">

          {/* LEFT IMAGE */}
          <div className="w-full md:w-1/2 h-[260px] sm:h-[320px] md:h-auto lg:h-full">
            <img
              src={studentImg}
              alt="student"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full md:w-1/2 bg-[#c97221] px-6 sm:px-8 lg:px-12 py-8 lg:py-0 flex flex-col justify-center">

            {/* TITLE */}
            <h2 className="text-[26px] sm:text-[30px] lg:text-[36px] font-bold text-white mb-4">
              Become A Student
            </h2>

            {/* DESCRIPTION */}
            <p className="text-[13.5px] sm:text-[14px] lg:text-[14.5px] text-[#f4e6d8] leading-[22px] sm:leading-[23px] lg:leading-[24px] mb-5 lg:mb-6 max-w-[480px]">
              Kick-start your culinary adventure with COOK. We provide a space for
              cooking enthusiasts of all levels to learn, explore, and master culinary arts
              from professional chefs worldwide. So dive in and transform your kitchen
              into a playground of flavors.
            </p>

            {/* BULLETS */}
            <div className="space-y-3 sm:space-y-4 mb-5 lg:mb-6">

              <div className="flex items-start gap-3">
                <div className="mt-[4px] w-5 h-5 rounded-full bg-white flex items-center justify-center">
                  <span className="text-[#c97221] text-[11px] font-bold">✓</span>
                </div>
                <p className="text-[13px] sm:text-[13.5px] lg:text-[14px] text-[#fff3e8] leading-[20px] sm:leading-[21px] lg:leading-[22px]">
                  <span className="font-semibold text-white">
                    Diverse Classes:
                  </span>{" "}
                  Access a wide variety of classes catering to all skill levels and culinary interests.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-[4px] w-5 h-5 rounded-full bg-white flex items-center justify-center">
                  <span className="text-[#c97221] text-[11px] font-bold">✓</span>
                </div>
                <p className="text-[13px] sm:text-[13.5px] lg:text-[14px] text-[#fff3e8] leading-[20px] sm:leading-[21px] lg:leading-[22px]">
                  <span className="font-semibold text-white">
                    World-Class Chefs:
                  </span>{" "}
                  Learn directly from professional chefs sharing their unique culinary secrets.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-[4px] w-5 h-5 rounded-full bg-white flex items-center justify-center">
                  <span className="text-[#c97221] text-[11px] font-bold">✓</span>
                </div>
                <p className="text-[13px] sm:text-[13.5px] lg:text-[14px] text-[#fff3e8] leading-[20px] sm:leading-[21px] lg:leading-[22px]">
                  <span className="font-semibold text-white">
                    Interactive Learning:
                  </span>{" "}
                  Ask questions and receive real-time feedback in our interactive classes.
                </p>
              </div>

            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <button className="border border-white text-white text-[13px] sm:text-[13.5px] lg:text-[14px] px-4 sm:px-5 py-2 rounded-md w-fit">
                Sign up
              </button>

              <button className="bg-[#f2c9a5] text-[#c97221] text-[13px] sm:text-[13.5px] lg:text-[14px] px-4 sm:px-5 py-2 rounded-md w-fit">
                Sign up
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}