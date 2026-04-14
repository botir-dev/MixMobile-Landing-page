import Guarantee from "../../Icons/Guarantee";
import PhoneIcon from "../../Icons/PhoneIcon";
import SupportMan from "../../Icons/SupportMan";

export default function index({ mode }) {
  return (
    <section className="w-full max-w-[1200px] lg:mt-[80px] md:mt-[70px] sm:mt-[60px] mt-[50px] mx-auto px-2 lg:mb-24 md:mb-20 sm:mb-16 mb-12">
      <div
        className={`${mode ? "bg-[#191B21]" : "bg-gray-200"} bg-[#191B21] lg:py-14 md:py-10 py-6 lg:px-12 md:px-9 sm:px-7 px-5 rounded-lg`}
      >
        <h4
          className={`${mode ? "text-white" : "text-black"} lg:text-[40px] md:text-[32px] sm:text-[25px] text-[20px] font-bold text-center`}
        >
          Nima uchun Mix Mobile?
        </h4>

        <ul className="grid sm:grid-cols-2 grid-cols-1 mt-7">
          <li className="flex gap-1">
            <span>
              {" "}
              <Guarantee color={"red"} />
            </span>
            <span className="flex flex-col">
              <span
                className={`${mode ? "text-white" : "text-black"} font-bold lg:text-[17px] md:text-[16px] text-[15px]`}
              >
                Haqiqiy mahsulotlar
              </span>
              <span
                className={`${mode ? "text-gray-400" : "text-gray-600"} mt-1 lg:text-[15px] text-[14px]`}
              >
                Barcha telefonlar 100% asl va rasmiy kafolatga ega. Qalbaki
                mahsulotlar yo'q.
              </span>
            </span>
          </li>
          <li className="flex gap-1 sm:mt-0 mt-6">
            <span>
              <Guarantee color={"red"} />
            </span>
            <span className="flex flex-col">
              <span
                className={`${mode ? "text-white" : "text-black"} font-bold lg:text-[17px] md:text-[16px] text-[15px]`}
              >
                Sifat kafolati
              </span>
              <span
                className={`${mode ? "text-gray-400" : "text-gray-600"}  mt-1 lg:text-[15px] text-[14px]`}
              >
                Har bir qurilma yetkazib berishdan oldin sinovdan o'tkaziladi va
                tasdiqlanadi. To'liq qoniqish kafolatlanadi.
              </span>
            </span>
          </li>
          <li className="flex gap-1 mt-6">
            <span>
              <SupportMan color={"red"} />
            </span>
            <span className="flex flex-col">
              <span
                className={`${mode ? "text-white" : "text-black"} font-bold lg:text-[17px] md:text-[16px] text-[15px]`}
              >
                Qo'llab-quvvatlash
              </span>
              <span
                className={`mt-1 ${mode ? "text-gray-400" : "text-gray-600 "}  lg:text-[15px] text-[14px]`}
              >
                Bizning bilimli jamoamiz har qanday savol yoki muammo bo'yicha
                yordam berish uchun 24/7 mavjud.
              </span>
            </span>
          </li>
          <li className="flex gap-1 mt-6">
            <span>
              <PhoneIcon color={"red"} />
            </span>
            <span className="flex flex-col">
              <span
                className={`${mode ? "text-white" : "text-black"} font-bold lg:text-[17px] md:text-[16px] text-[15px]`}
              >
                Keng tanlov
              </span>
              <span
                className={`${mode ? "text-gray-400" : "text-gray-600"} mt-1 lg:text-[15px] text-[14px]`}
              >
                Eng so'nggi flagman modellardan tortib, byudjetga mos
                variantlargacha, bizda hamma uchun bir narsa bor.
              </span>
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
