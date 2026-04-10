import DarkThemePhone from "/dark-theme-iphone.png";
import LightThemePhone from "/light-theme-iphone.png";
import RightIcon from "../../Icons/RightIcon";

export default function index({ mode }) {
  return (
    <div className="flex items-center justify-between mt-[110px]">
      {/* Hero content */}
      <div className="w-[650px]">
        {/* Title */}
        <h1
          className={`text-[66px] font-bold leading-19 tracking-[0.1px] ${mode == true ? "text-white" : "text-black"}`}
        >
          Eng so'ngi smartfonlar, <br />{" "}
          <span className="text-red-700">Eng yaxshi narxda.</span>
        </h1>
        {/* Description */}
        <p className="text-[19px] leading-7 text-gray-500 pt-10 w-[500px]">
          Eng yaxshi brendlarning eng yangi mobil telefonlarini kashf eting.
          Sifat kafolatlangan, kafolatlangan va a'lo darajadagi mijozlarga
          xizmat ko'rsatish.
        </p>
        {/* Buttons */}
        <div className="mt-8 flex items-center gap-5">
          <a
            className="group flex items-center gap-1 text-white text-[15px] bg-red-700 p-2 border-1 border-red-700 rounded-[8px] hover:opacity-90"
            href="#"
          >
            To'plamni ko'rish
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">
              <RightIcon color={"white"} />
            </span>
          </a>
          <a
            className="text-red-700 ease-in-out transition-all duration-300 text-[15px] p-2 rounded-[8px] border-1 border-red-700 hover:bg-red-700 hover:text-white"
            href="#"
          >
            E'lonlarni ko'rish
          </a>
        </div>
        {/* Statistics */}
        <div>
          <ul className="flex items-center gap-30 pt-8">
            <li>
              <p className="text-[23px] font-bold text-red-700">100+</p>
              <span className="text-gray-500 text-[15px] tracking-[0.5px]">
                Ombordagi qurilmalar
              </span>
            </li>
            <li>
              <p className="text-[23px] font-bold text-red-700">5000+</p>
              <span className="text-gray-500 text-[15px] tracking-[0.5px]">
                Baxtli mijozlar
              </span>
            </li>
            <li>
              <p className="text-[23px] font-bold text-red-700">100%</p>
              <span className="text-gray-500 text-[15px] tracking-[0.5px]">
                Kafolat
              </span>
            </li>
          </ul>
        </div>
      </div>
      {/* Hero images */}
      <div>
        <img
          src={LightThemePhone}
          className="w-70"
          alt="Light mode Phone in Telegram"
        />
      </div>
    </div>
  );
}
