import MixMobileLogo from "/mix-mobile-logo.png";
import CallIcons from "../../Icons/CallIcons";
import InstagramIcon from "../../Icons/InstagramIcon";
import TelegramIcon from "../../Icons/TelegramIcon";

export default function index({ mode }) {
  return (
    <div
      className={`${mode ? "bg-[#0F1115] mt-[-4px]" : "bg-[#191B21] mt-[-4px]"}`}
    >
      <div className="container w-full max-w-[1200px] px-2 mx-auto py-15">
        {/* Logo */}
        <div className="flex w-full justify-between">
          <div className="w-[24%]">
            <img
              src={MixMobileLogo}
              className="w-[150px]"
              alt="mix-mobile-logo"
            />

            <span
              className={`text-white font-medium mt-5 inline-block text-[14px]`}
            >
              Eng so'nggi smartfonlarni eng yaxshi narxlarda olish uchun
              ishonchli manbangiz.
            </span>
          </div>

          {/* Footer Links */}
          <div>
            <ul className="flex gap-40">
              <li className="flex flex-col gap-1">
                <p className="text-white font-bold mb-4">Tezkor havolalar</p>
                <a
                  className="font-medium text-gray-400 hover:text-white text-[15px]"
                  href="#"
                >
                  Brendlar
                </a>
                <a
                  className="font-medium text-gray-400 hover:text-white text-[15px]"
                  href="#"
                >
                  E'lonlar
                </a>
                <a
                  className="font-medium text-gray-400 hover:text-white text-[15px]"
                  href="#"
                >
                  Biz haqimizda
                </a>
                <a
                  className="font-medium text-gray-400 hover:text-white text-[15px]"
                  href="#"
                >
                  Bog'lanish
                </a>
              </li>
              <li className="flex flex-col gap-1">
                <p className="text-white font-bold mb-4">Kategoriyalar</p>
                <a
                  className="font-medium text-gray-400 hover:text-white text-[15px]"
                  href="#"
                >
                  Apple
                </a>
                <a
                  className="font-medium text-gray-400 hover:text-white text-[15px]"
                  href="#"
                >
                  Samsung
                </a>
                <a
                  className="font-medium text-gray-400 hover:text-white text-[15px]"
                  href="#"
                >
                  Xiaomi
                </a>
                <a
                  className="font-medium text-gray-400 hover:text-white text-[15px]"
                  href="#"
                >
                  Others
                </a>
              </li>
              <li className="flex flex-col gap-1">
                <p className="text-white font-bold mb-4">Kontaktlar</p>
                <a
                  href="tel:+998889803003"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <span>
                    <CallIcons keng={16} baland={16} color={"white"} />
                  </span>
                  <span className="text-white text-[15px]">+998889803003</span>
                </a>
                <a
                  href="https://www.instagram.com/mix.mobile01/"
                  className="flex items-center gap-2"
                  target="_blank"
                >
                  <span>
                    <InstagramIcon keng={16} baland={16} color={"white"} />
                  </span>
                  <span className="text-white text-[15px]">
                    Instagram: @mix.mobile01
                  </span>
                </a>
                <a
                  href="https://t.me/mixmobil"
                  className="flex items-center gap-2"
                  target="_blank"
                >
                  <span>
                    <TelegramIcon keng={16} baland={16} color={"white"} />
                  </span>
                  <span className="text-white text-[15px]">
                    Telegram: @mixmobil
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="text-red-700 mt-10 mb-10" />
        {/* Footer */}
        <div className="flex sm:flex-row flex-col items-center justify-between">
          <p className="text-gray-400">
            © 2026 Mix Mobile. All rights reserved.
          </p>
          <span className="flex gap-4 ">
            <a className="text-gray-400 text-[14px] hover:text-white" href="#">
              Privacy Police
            </a>
            <a className="text-gray-400 text-[14px] hover:text-white" href="#">
              Terms of Service
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
