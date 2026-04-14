import PhoneIcon from "../../Icons/PhoneIcon";

export default function index({ mode }) {
  return (
    <section id="about" className="w-full max-w-[1200px] mt-[80px] px-2 mx-auto flex justify-between flex-col md:flex-row">
      {/* Content */}
      <div className="md:w-[46%]">
        <h2
          className={`lg:text-[48px] md:text-[38px] sm:text-[30px] text-[25px] md:text-left text-center font-bold ${mode ? "text-white" : "text-black"}`}
        >
          Mix Mobile haqida
        </h2>
        {/* description */}
        <ul
          className={`flex flex-col gap-5 mt-3 list-disc marker:text-red-500${mode ? "text-white" : "text-black"}`}
        >
          <li className="flex gap-1 text-gray-500 lg:text-[17px] md:text-[16px] sm:text-[15px] text-[14px] md:text-left sm:text-center">
            <span className="text-red-500">•</span>
            Mix Mobile 2015-yildan beri mijozlarga xizmat ko'rsatib, haqiqiy
            smartfonlar va ajoyib xizmatlarni taqdim etadi. Biz shaffoflik,
            sifat va mijozlar ehtiyojini qondirishga eng avvalo ishonamiz.
          </li>
          <li className="flex gap-1 text-gray-500 lg:text-[17px] md:text-[16px] sm:text-[15px] text-[14px] md:text-left sm:text-center">
            <span className="text-red-500">•</span>
            Bizning vazifamiz eng so'nggi texnologiyalarni hamma uchun ochiq
            qilishdir. Siz flagman qurilma yoki ishonchli byudjetli telefon
            qidiryapsizmi, Mix Mobile siz uchun mukammal tanlovga ega.
          </li>
          <li className="flex gap-1 text-gray-500 lg:text-[17px] md:text-[16px] sm:text-[15px] text-[14px] md:text-left sm:text-center">
            <span className="text-red-500">•</span>
            Biz har bir qurilmaning haqiqiy ekanligiga va to'liq kafolatli
            yordam bilan ta'minlanganligiga ishonch hosil qilish uchun rasmiy
            distribyutorlar va vakolatli chakana sotuvchilar bilan bevosita
            hamkorlik qilamiz.
          </li>
        </ul>

        {/* statistic */}
        <ul
          className={`flex items-center sm:gap-0 sm:justify-around justify-between md:gap-10 lg:gap-20 mt-11 flex-wrap ${mode ? "text-white" : "text-black"}`}
        >
          <li className="flex flex-col align-center md:text-left text-center">
            <span className="text-red-700 lg:text-[24px] md:text-[22px] sm:text-[20px] text-[18px] font-bold">
              11+
            </span>
            <span className="text-gray-500 text-[15px]">Yillik tajriba</span>
          </li>
          <li className="flex flex-col align-center md:text-left text-center">
            <span className="text-red-700 lg:text-[24px] md:text-[22px] sm:text-[20px] text-[18px] font-bold">
              5K+
            </span>
            <span className="text-gray-500 text-[15px]">Mijozlar</span>
          </li>
          <li className="flex flex-col align-center md:text-left text-center">
            <span className="text-red-700 lg:text-[24px] md:text-[22px] sm:text-[20px] text-[18px] font-bold">
              98%
            </span>
            <span className="text-gray-500 sm:text-[15px] text-[14px]">
              Mijozlar ishonchi
            </span>
          </li>
        </ul>
      </div>
      {/*  */}
      <div
        className={`md:w-[46%] ${mode ? "bg-[#191B21]" : "bg-gray-200"} flex flex-col items-center justify-center rounded-lg md:mt-0 mt-8 md:p-2 p-5`}
      >
        <span className="bg-red-700 p-4 rounded-[50%]">
          <PhoneIcon color={"white"} />
        </span>

        <p
          className={`${mode ? "text-white" : "text-black"} font-medium text-[19px] mt-3`}
        >
          Sizning ishonchli hamkoringiz
        </p>

        <p
          className={`${mode ? "text-white" : "text-black"} w-full max-w-[450px] text-center text-gray-600 sm:text-[15px] text-[14px] sm:mt-6 mt-3`}
        >
          2015-yildan beri mislsiz sifat, kafolat va mijozlarni
          qo'llab-quvvatlashga ega haqiqiy smartfonlarni yetkazib bermoqda.
        </p>
      </div>
    </section>
  );
}
