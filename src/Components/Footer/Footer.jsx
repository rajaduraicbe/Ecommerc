import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="  md:py-10 md:px-4 flex justify-center">
      
      {/* BOX */}
      <div className="
        bg-[#d27622] 
        w-full 
        md:max-w-[1200px] 
        md:rounded-[30px] 
        px-6 md:px-10 
        py-14 
        text-white
      ">

        {/* LOGO */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#f6d2a7] text-center md:text-left mb-10">
          COOK
        </h1>

        {/* TOP */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left">

          <div>
            <h3 className="font-semibold mb-4">ABOUT US</h3>
            <ul className="space-y-2 text-sm text-[#f3e3d3]">
              <li>Who we are</li>
              <li>How it works</li>
              <li>COOK reviews</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">FOR STUDENTS</h3>
            <ul className="space-y-2 text-sm text-[#f3e3d3]">
              <li>Who we are</li>
              <li>How it works</li>
              <li>COOK reviews</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">FOR TUTORS</h3>
            <ul className="space-y-2 text-sm text-[#f3e3d3]">
              <li>Become an online chef</li>
              <li>Teach cooking online</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">SUPPORTS</h3>
            <ul className="space-y-2 text-sm text-[#f3e3d3]">
              <li>Need a help?</li>
            </ul>
          </div>

        </div>

        {/* SPACE */}
        <div className="my-12"></div>

        {/* BOTTOM */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

          {/* LEGAL */}
          <div>
            <h3 className="font-semibold mb-3">LEGAL</h3>
            <ul className="text-sm text-[#f3e3d3] space-y-2">
              <li>Terms Of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* ADDRESS */}
          <div>
            <h3 className="font-semibold mb-3">USA</h3>
            <p className="text-sm text-[#f3e3d3]">Your address goes there</p>
            <p className="text-sm text-[#f3e3d3] mt-2">+0000000000</p>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="font-semibold mb-3">COOK’S SOCIALS</h3>

            {/* 👇 KEY CHANGE HERE */}
            <div className="
              flex 
              flex-col md:flex-row 
              items-center md:items-start 
              gap-4 
              text-lg
            ">
              <FaInstagram />
              <FaTwitter />
              <FaFacebookF />
              <FaLinkedinIn />
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="text-center text-sm text-[#f3e3d3] mt-12">
          2023 ©
        </div>

      </div>
    </div>
  );
};

export default Footer;