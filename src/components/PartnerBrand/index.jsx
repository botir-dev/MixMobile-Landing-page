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
          className={`text-center text-[50px] font-bold w-full max-w-[700px] ${mode === true ? "text-white" : "text-black"}`}
        >
          Biz ishlagan Brendlar
        </h2>
        <p className="text-center w-full max-w-[700px] text-gray-600 text-[19px] mt-3">
          Biz ishlagan eng yaxshi brendlar bilan tanishib chiqing, ularning
          barchasi kafolatlangan haqiqiylik va sifat kafolati bilan.
        </p>
      </div>
      {/* Brands images */}
      <div>
        <ul className="flex items-center justify-between bg-gray-800 gap-8 w-max marquee mt-[30px]">
          {images.map((image, index) => {
            return (
              <li className="list-none" key={index}>
                <img
                  className={`${image === "honor-logo" || image === "infinix-logo" || image === "realme-logo" || image === "oppo-logo" || image === "vivo-logo" || image === "samsung-logo" ? "w-[150px]" : "w-[55px]"}`}
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
