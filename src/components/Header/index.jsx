import Logo from "/mix-mobile-logo.png";
import ShoppingIcon from "../../Icons/CartIcon";

export default function index({ mode }) {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div
      className={
        mode == true
          ? "shadow-[0_0_10px_rgba(255,255,255,0.5)] py-4 fixed z-999 w-full backdrop-blur-sm bg-white/5"
          : "shadow-md py-4 fixed w-full backdrop-blur-sm fixed z-999 bg-white/1"
      }
    >
      <div className="flex items-center justify-between container w-full max-w-[1200px]  mx-auto px-2">
        <img src={Logo} className="sm:w-30 w-25" alt="mix-mobile-logo" />

        <nav className="hidden lg:flex">
          <ul className="flex gap-10">
            <li>
              <a
                className={`text-[15px] hover:text-red-700 ${mode == true ? "text-white" : "text-black"}`}
                href="#"
              >
                Bosh Sahifa
              </a>
            </li>
            <li>
              <a
                className={`text-[15px] hover:text-red-700 ${mode == true ? "text-white" : "text-black"}`}
                href="#"
              >
                Brendlar
              </a>
            </li>
            <li>
              <a
                className={`text-[15px] hover:text-red-700 ${mode == true ? "text-white" : "text-black"}`}
                href="#"
              >
                E'lonlar
              </a>
            </li>
            <li
              onClick={() => {
                scrollTo("about");
              }}
            >
              <a
                className={`text-[15px] hover:text-red-700 ${mode == true ? "text-white" : "text-black"}`}
                href="#"
              >
                Biz Haqimizda
              </a>
            </li>
            <li>
              <a
                className={`text-[15px] hover:text-red-700 ${mode == true ? "text-white" : "text-black"}`}
                href="#"
              >
                Kontaktlar
              </a>
            </li>
          </ul>
        </nav>

        <a
          className="hidden lg:flex gap-2 items-center text-white text-[15px] bg-red-700 p-2 rounded-[8px] hover:opacity-80"
          href="#"
        >
          Haridni boshlang <ShoppingIcon color={"white"} />
        </a>

        {/* burger menu */}
        <div className="flex flex-col gap-[6px] lg:hidden">
          <span
            className={`w-[30px] h-[2px] ${mode == true ? "bg-white" : "bg-black"}`}
          ></span>
          <span
            className={`w-[30px] h-[2px] ${mode == true ? "bg-white" : "bg-black"}`}
          ></span>
          <span
            className={`w-[30px] h-[2px] ${mode == true ? "bg-white" : "bg-black"}`}
          ></span>
        </div>
      </div>
    </div>
  );
}
