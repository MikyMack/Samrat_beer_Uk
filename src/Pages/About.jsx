
import BannerImg from "../../../my-project/src/assets/bg/bg1.jpg";
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

const About = () => {
  return (
    <div className=" duration-300">
              <Navbar />
      <div className="container mt-20 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
          <div data-aos="fade-up">
            <img
              src={BannerImg}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)] mx-auto"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <div data-aos="zoom-in" className="flex items-center gap-4">
                <div className="text-primary text-7xl ">
                  <h1 className="font-bold font-body2">01</h1>
                </div>
                <div>
                  <p className="text-primary font-body2">COCHIN BREWS</p>
                  <h1 className="text-2xl sm:text-4xl font-bold text-white">About us</h1>
                </div>
              </div>
              <p data-aos="fade-up" className="leading-8 tracking-wide text-gray-200 font-body2">
              "From the finest hops to the purest water, each ingredient is hand-selected to ensure every sip is an experience worth savoring."
              </p>
              <p data-aos="fade-up" data-aos-delay="300" className="text-gray-200 font-body2">
              where every drop of liquid gold is a testament to our dedication to craft and tradition.
              </p>
              <button data-aos="fade-up" className="button-outline text-primary font-body2">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
