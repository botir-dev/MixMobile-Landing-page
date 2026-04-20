import CallIcons from "../../Icons/CallIcons";
import InstagramIcon from "../../Icons/InstagramIcon";
import TelegramIcon from "../../Icons/TelegramIcon";
import LocationIcon from "../../Icons/LocationIcon";
import { useState } from "react";

export default function index({ mode }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔥 Hamma ma'lumot shu yerda
    console.log("Form data:", form);

    alert(`Ism: ${form.name}\nTelefon: ${form.phone}\nXabar: ${form.message}`);

    // optional: formni tozalash
    setForm({
      name: "",
      phone: "",
      message: "",
    });
  };
  return (
    <section className={`${mode ? "bg-[#191B21]" : "bg-gray-200"} pb-15`}>
      <div className="container w-full max-w-[1200px]  mx-auto px-2 lg:pt-15 md:pt-12 pt-8">
        <h2
          className={`lg:text-[50px] md:text-[40px] sm:text-[32px] text-[25px] font-bold text-center ${mode ? "text-white" : "text-black"}`}
        >
          Bog'lanish
        </h2>
        <p
          className={`text-center  mt-3 ${mode ? "text-gray-400" : "text-gray-700"}`}
        >
          Savollaringiz bormi? Sizdan xabar olishni istardik. Biz bilan istalgan
          vaqtda telefon, elektron pochta yoki quyidagi shakl orqali bog'laning.
        </p>
        <div className="w-full flex justify-between md:flex-row flex-col mt-[40px]">
          <div className="md:w-[46%] w-full">
            {/* Messengers */}
            <div className="mt-10">
              {/* Social */}
              <ul className="md:flex grid sm:grid-cols-2 grid-cols-1 flex-col gap-6">
                <li>
                  <a
                    target="_blank"
                    href="tel:+998889803003"
                    className="flex gap-4 items-start duration-100  p-2 rounded-lg w-fit"
                  >
                    <span className="bg-red-700 block p-3 rounded-[12px]">
                      <CallIcons color={"white"} keng={28} baland={28} />
                    </span>

                    <span className="flex flex-col gap-1">
                      <span
                        className={`text-[17px] ${mode ? "text-white" : "text-black"} font-bold`}
                      >
                        Aloqa
                      </span>
                      <span className="flex flex-col">
                        <span
                          className={`${mode ? "text-gray-400" : "text-gray-600"}`}
                        >
                          +998889803003
                        </span>
                        <span
                          className={`${mode ? "text-gray-500" : "text-gray-400"}`}
                        >
                          24/7 aloqa
                        </span>
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="#"
                    className="flex gap-4 items-start duration-100  p-2 rounded-lg w-fit"
                  >
                    <span className="bg-red-700 block p-3 rounded-[12px]">
                      <InstagramIcon color={"white"} keng={28} baland={28} />
                    </span>

                    <span className="flex flex-col gap-1">
                      <span
                        className={`text-[17px] ${mode ? "text-white" : "text-black"} font-bold`}
                      >
                        Instagram
                      </span>
                      <span className="flex flex-col">
                        <span
                          className={`${mode ? "text-gray-400" : "text-gray-600"}`}
                        >
                          @mixmobile
                        </span>
                        <span
                          className={`${mode ? "text-gray-500" : "text-gray-400"}`}
                        >
                          Direct messaging available
                        </span>
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://t.me/mixmobil"
                    className="flex gap-4 items-start duration-100  p-2 rounded-lg w-fit"
                  >
                    <span className="bg-red-700 block p-3 rounded-[12px]">
                      <TelegramIcon color={"white"} keng={28} baland={28} />
                    </span>

                    <span className="flex flex-col gap-1">
                      <span
                        className={`text-[17px] ${mode ? "text-white" : "text-black"} font-bold`}
                      >
                        Telegram
                      </span>
                      <span className="flex flex-col">
                        <span
                          className={`${mode ? "text-gray-400" : "text-gray-600"}`}
                        >
                          @mixmobile
                        </span>
                        <span
                          className={`${mode ? "text-gray-500" : "text-gray-400"}`}
                        >
                          Direct messaging available
                        </span>
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.google.com/maps/place/%D0%9A%D1%83%D1%80%D0%B3%D0%B0%D0%BD%D1%82%D0%B5%D0%BF%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9+%D1%80%D0%B0%D0%B9%D0%BE%D0%BD,+%D0%90%D0%BD%D0%B4%D0%B8%D0%B6%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@40.7903817,72.3004,10.5z/data=!4m6!3m5!1s0x38bd04d79c190267:0x1c454448e0de0851!8m2!3d40.7695615!4d72.8751786!16s%2Fm%2F080j95b?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D"
                    className="flex gap-4 items-start duration-100  p-2 rounded-lg w-fit"
                  >
                    <span className="bg-red-700 block p-3 rounded-[12px]">
                      <LocationIcon color={"white"} />
                    </span>

                    <span className="flex flex-col gap-1">
                      <span
                        className={`text-[17px] ${mode ? "text-white" : "text-black"} font-bold`}
                      >
                        Manzil
                      </span>
                      <span className="flex flex-col">
                        <span
                          className={`${mode ? "text-gray-400" : "text-gray-600"}`}
                        >
                          Qo'rg'ontepa
                        </span>
                        <span
                          className={`${mode ? "text-gray-500" : "text-gray-400"}`}
                        >
                          Andijon
                        </span>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>

              {/* Business Hours */}
              <div
                className={`${mode ? "bg-[#0F1115]" : "bg-white"} w-full rounded-lg py-7 px-7 mt-8`}
              >
                <h4
                  className={`font-bold text-[18px] ${mode ? "text-white" : "text-black"}`}
                >
                  Ish soatlari
                </h4>

                <ul className="mt-4 gap-2 flex flex-col">
                  <li className="flex items-center justify-between">
                    <span
                      className={`font-normal ${mode ? "text-gray-500" : "text-gray-600"} text-[15px]`}
                    >
                      Dushanba-Juma
                    </span>
                    <span
                      className={`font-medium text-[16px] ${mode ? "text-gray-400" : "text-gray-700"}`}
                    >
                      9:00 AM - 8:00 PM
                    </span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span
                      className={`font-normal ${mode ? "text-gray-500" : "text-gray-600"} text-[15px]`}
                    >
                      Shanba
                    </span>
                    <span
                      className={`font-medium text-[16px] ${mode ? "text-gray-400" : "text-gray-700"}`}
                    >
                      10:00 AM - 6:00 PM
                    </span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span
                      className={`font-normal ${mode ? "text-gray-500" : "text-gray-600"} text-[15px]`}
                    >
                      Yakshanba
                    </span>
                    <span
                      className={`font-medium text-[16px] ${mode ? "text-gray-400" : "text-gray-700"}`}
                    >
                      12:00 AM - 5:00 PM
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-[46%] w-full">
            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className={`w-[100%] p-8 shadow-lg md:h-full h-[600px]  md:mt-0 mt-6 rounded-xl flex ${mode ? "bg-[#0F1115]" : "bg-white"} flex-col gap-4`}
            >
              <h3
                className={`text-[23px] font-bold ${mode ? "text-white" : "text-black"}`}
              >
                Xabar yuborish
              </h3>

              <p
                className={`font-bold mt-[10px] text-[14px] ${mode ? "text-white" : "text-black"}`}
              >
                Ism-familiyangizni kiriting:
              </p>
              <input
                type="text"
                name="name"
                placeholder="Ism Familiya"
                value={form.name}
                onChange={handleChange}
                className={`border border-gray-300 p-3 mt-[-10px] rounded-lg outline-none focus:ring-2 focus:ring-red-500 placeholder:text-gray-400 placeholder:italic ${mode ? "text-white" : "text-black"}`}
                required
              />

              <p
                className={`${mode ? "text-white" : "text-black"} font-bold mt-[8px] text-[14px]`}
              >
                Telefon raqamingizni kiriting:
              </p>
              <input
                type="tel"
                name="phone"
                placeholder="Telefon raqam"
                value={form.phone}
                onChange={handleChange}
                className={`placeholder:text-gray-400 placeholder:italic border border-gray-300 mt-[-10px] p-3 rounded-lg outline-none focus:ring-2 focus:ring-red-500 ${mode ? "text-white" : "text-black"}`}
                required
              />

              <p
                className={`${mode ? "text-white" : "text-black"} font-bold mt-[8px] text-[14px]`}
              >
                Xabaringizni qoldiring:
              </p>
              <textarea
                name="message"
                placeholder="Xabaringiz..."
                value={form.message}
                onChange={handleChange}
                className={`placeholder:text-gray-400 placeholder:italic border border-gray-300 p-3 mt-[-10px] rounded-lg outline-none focus:ring-2 focus:ring-red-500 ${mode ? "text-white" : "text-black"}`}
                rows="4"
                required
              />

              <button
                type="submit"
                className="bg-red-700 text-white p-3 rounded-[14px] mt-[20px] hover:bg-red-800 transition"
              >
                Yuborish
              </button>

              <p
                className={`text-center text-[15px] ${mode ? "text-gray-400" : "text-gray-700"}`}
              >
                Sizga ish vaqtida 2 soat ichida javob beramiz.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
