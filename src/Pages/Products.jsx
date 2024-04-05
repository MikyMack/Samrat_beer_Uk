import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Img1 from "../../src/assets/products/beer2.png";
import Img2 from "../../src/assets/products/beer3.png";
import Img3 from "../../src/assets/products/beer4.png";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Beer",
    description:
      "From the finest hops to the purest water, each ingredient is hand-selected to ensure every sip is an experience worth savoring.",
  },
  {
    id: 2,
    img: Img2,
    title: "Beer",
    description:
    "From the finest hops to the purest water, each ingredient is hand-selected to ensure every sip is an experience worth savoring.",
  },
  {
    id: 3,
    img: Img3,
    title: "Beer",
    description:
    "From the finest hops to the purest water, each ingredient is hand-selected to ensure every sip is an experience worth savoring.",
  },
];

const TopProducts = () => {
  return (
    <div>
    <Navbar />

      <div className="container mt-10">
        {/* Header section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary font-body2">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl text-white font-body2">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400 font-body2">
          Crafting moments, one sip at a time
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 mb-20 place-items-center">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              className="rounded-2xl bg-white  hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[150px]">
                <img
                loading='lazy'
                  src={data.img}
                  alt=""
                  className="max-w-[180px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center font-body2">
                <h1 className="text-xl">{data.title}</h1>
                <p className="text-gray-800 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>           
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TopProducts;
