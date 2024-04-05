
import coffee2 from "../../assets/products/beer2.png";
import coffee3 from "../../assets/products/beer3.png";
import coffee4 from "../../assets/products/beer4.png";

const ServicesData = [
  {
    id: 1,
    img: coffee2, 
    name: "Samrat",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: coffee3, 
    name: "Samrat",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    aosDelay: "300",
  },
  {
    id: 3,
    img: coffee4, 
    name: "Samrat",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    aosDelay: "500",
  },
];

const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className=" md:mb-20 mb-0">
        <div className="container">
          {/* Heading section  */}
          <div className="text-center mb-44">
            <h1 className="text-4xl font-bold font-body2 text-primary">
             
            </h1>
          </div>

          {/* Services Card section  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                key={service.id} // Added key prop to resolve React warning
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="rounded-2xl bg-white hover:bg-primary hover:text-black relative shadow-xl duration-high group max-w-[300px] md:mb-0 mb-28"
              >
                <div className="h-[135px] ">
                  <img
                  loading="lazy"
                    src={service.img}
                    alt=""
                    className="max-w-[270px] block mx-auto  transform -translate-y-52 group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full"></div>
                  <h1 className="text-xl font-bold font-body2">{service.name}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
