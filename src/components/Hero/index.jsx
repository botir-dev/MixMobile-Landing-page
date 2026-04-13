import DarkThemePhone from "/dark-theme-iphone.png";
import LightThemePhone from "/light-theme-iphone.png";
import RightIcon from "../../Icons/RightIcon";

export default function index({ mode }) {
  return (
    <div className="flex items-center justify-between sm:mt-[110px] mt-[100px] container w-full max-w-[1200px] px-2 mx-auto ">
      {/* Hero content */}
      <div className="w-full lg:max-w-[650px] lg:block flex flex-col items-center">
        {/* Title */}
        <h1
          className={`lg:text-[66px] md:text-[50px] md:leading-15 sm:text-[35px] sm:leading-11 text-[30px] leading-11 font-bold lg:text-left text-center tracking-[0.1px] ${mode == true ? "text-white" : "text-black"}`}
        >
          Eng so'ngi smartfonlar, <br />{" "}
          <span className="text-red-700">Eng yaxshi narxda.</span>
        </h1>
        {/* Description */}
        <p className="lg:text-[19px] md:text-[17px] sm:text-[16px] leading-7 text-gray-500 md:mt-10 mt-5 w-full lg:max-w-[500px] lg:text-left text-center">
          Eng yaxshi brendlarning eng yangi mobil telefonlarini kashf eting.
          Sifat kafolatlangan, kafolatlangan va a'lo darajadagi mijozlarga
          xizmat ko'rsatish.
        </p>
        {/* Buttons */}
        <div className="mt-8 flex items-center gap-5">
          <a
            className="group flex items-center gap-1 text-white lg:text-[15px] md:text-[14px] text-[14px] bg-red-700 p-2 border-1 border-red-700 rounded-[8px] hover:opacity-90"
            href="#"
          >
            To'plamni ko'rish
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">
              <span className="md:block hidden">
                <RightIcon color={"white"} />
              </span>
            </span>
          </a>
          <a
            className="text-red-700 ease-in-out transition-all duration-300 lg:text-[15px] md:text-[14px] text-[14px] p-2 rounded-[8px] border-1 border-red-700 hover:bg-red-700 hover:text-white"
            href="#"
          >
            E'lonlarni ko'rish
          </a>
        </div>
        {/* Statistics */}
        <div>
          <ul className="flex sm:items-center lg:gap-30 md:gap-20 sm:gap-12 gap-6 mt-8 lg:flex-row md:flex-row sm:flex-row flex-wrap sm:justify-start justify-center">
            <li className="sm:text-left text-center">
              <p className="lg:text-[23px] md:text-[21px] sm:text-[19px] text-[17px] font-bold text-red-700">
                100+
              </p>
              <span className="text-gray-500 text-[15px] tracking-[0.5px]">
                Ombordagi qurilmalar
              </span>
            </li>
            <li className="sm:text-left text-center">
              <p className="lg:text-[23px] md:text-[21px] sm:text-[19px] text-[17px] font-bold text-red-700">
                5000+
              </p>
              <span className="text-gray-500 text-[15px] tracking-[0.5px]">
                Baxtli mijozlar
              </span>
            </li>
            <li className="sm:text-left text-center">
              <p className="lg:text-[23px] md:text-[21px] sm:text-[19px] text-[17px] font-bold text-red-700">
                100%
              </p>
              <span className="text-gray-500 text-[15px] tracking-[0.5px]">
                Kafolat
              </span>
            </li>
          </ul>
        </div>
      </div>
      {/* Hero images */}
      <div className="lg:block hidden">
        <img
          src={mode == true ? LightThemePhone : DarkThemePhone}
          className={`${mode === true ? "w-70" : "w-72"}`}
          alt="Light mode Phone in Telegram"
        />
      </div>
    </div>
  );
}
