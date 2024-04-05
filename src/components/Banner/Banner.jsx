

import { GrSecure } from "react-icons/gr";
// import { IoFastFood } from "react-icons/io5";
// import { GiFoodTruck } from "react-icons/gi";
// import BannerImg from "../../assets/bg/bg3.jpg"
import HeroPng from "../../assets/logo/logopng.png"
// import BgImg from "../../assets/bg/bg2.jpg"


const Banner = () => {
  return (
    <>
      <span id="about"></span>
      <div>
        <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 ">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image section */}
              <div data-aos="zoom-in">
                <img
                  src={HeroPng}
                  alt="biryani img"
                  className="max-w-[630px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)] spin"
                />
              </div>
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1
                  data-aos="fade-up"
                  className="text-3xl sm:text-4xl text-white font-body2"
                >
                  Premium Beer
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-lg text-white font-body2 tracking-wide leading-5"
                >
                "Embark on a flavourful journey with our fusion-inspired brew, crafted to complement the authentic spices of your favourite curries and spicy dishes. Discover the perfect pairing for every palate. Sip, savor, and let the flavors dance with every fiery dish."
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-5">
                    <div data-aos="fade-up" className="flex items-center gap-3">
                      <GrSecure className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100 " />
                      <span className="text-primary font-body2">Premium Beer</span>
                    </div>
                    {/* <div
                      data-aos="fade-up"
                      data-aos-delay="300"
                      className="flex items-center gap-3"
                    >
                      <IoFastFood className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100 " />
                      <span className="text-primary">Hot Beer</span>
                    </div> */}
                    {/* <div
                      data-aos="fade-up"
                      data-aos-delay="500"
                      className="flex items-center gap-3"
                    >
                      <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100" />
                      <span className="text-primary">Cold Beer</span>
                    </div> */}
                  </div>
                  <div
                    data-aos="slide-left"
                    className="border-l-4 border-primary/50 pl-6 space-y-2"
                  >
                    <h1 className="text-2xl font-semibold font-cursive ">
                      Tea Lover
                    </h1>
                    <p className="text-sm text-gray-400 font-body2">
                    "From the finest hops to the purest water, each ingredient is hand-selected to ensure every sip is an experience worth savoring."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
