export default function index({ mode }) {
  let images = [
    "apple-logo",
    "google-logo",
    "honor-logo",
    "infinix-logo",
    "motorola-logo",
    "oneplus-logo",
    "oppo-logo",
    "realme-logo",
    "redmagic-logo",
    "samsung-logo",
    "vivo-logo",
    "xiaomi-logo",
    "apple-logo",
    "google-logo",
    "honor-logo",
    "infinix-logo",
    "motorola-logo",
    "oneplus-logo",
    "oppo-logo",
    "realme-logo",
    "redmagic-logo",
    "samsung-logo",
    "vivo-logo",
    "xiaomi-logo",
  ];
  return (
    <div className="mt-12">
      {/* Content */}
      <div className="flex flex-col items-center container w-full max-w-[1200px] px-2 mx-auto ">
        <h2
          className={`text-center lg:text-[50px] md:text-[40px] sm:text-[35px] text-[25px]  font-bold w-full max-w-[700px] ${mode === true ? "text-white" : "text-black"}`}
        >
          Biz ishlagan Brendlar
        </h2>
        <p className="text-center w-full max-w-[700px] text-gray-600 lg:text-[19px] md:text-[18px] sm:text-[17px] text-[16px] leading-5 mt-3">
          Biz ishlagan eng yaxshi brendlar bilan tanishib chiqing, ularning
          barchasi kafolatlangan haqiqiylik va sifat kafolati bilan.
        </p>
      </div>
      {/* Brands images */}
      <div>
        <ul
          className={`flex items-center bg-gray-800 w-max marquee mt-[30px] lg:gap-8 md:gap-6 sm:gap-5 gap-4`}
        >
          {images.map((image, index) => {
            return (
              <li className="list-none" key={index}>
                <img
                  className={`${image === "honor-logo" || image === "infinix-logo" || image === "realme-logo" || image === "oppo-logo" || image === "vivo-logo" || image === "samsung-logo" ? "lg:w-[150px] md:w-[125px] sm:w-[105px] w-[80px]" : "lg:w-[55px] md:w-[45px] sm:w-[35px] w-[30px]"}`}
                  src={`/${image}.png`}
                  alt={`${image} logo`}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
