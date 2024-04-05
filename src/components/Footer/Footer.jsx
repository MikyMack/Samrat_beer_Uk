
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "Products",
    link: "/products",
  },
  {
    title: "About Us",
    link: "/about",
  },
];

const Footer = () => {
  return (
    <div className="text-black bg-gradient-to-r from-white via-primary to-black">
    <div className="min-h-[300px]">
      <div className="container grid md:grid-cols-3 gap-8 pt-5">
        {/* Logo and Description */}
        <div className="py-8 px-4 md:col-span-1">
          <a href="#" className="font-semibold text-2xl sm:text-3xl font-body2">
            COCHIN BREWS
          </a>
          <p className="pt-4 font-body2">
          where every drop of liquid gold is a testament to our dedication to craft and tradition.
          </p>
        </div>
  
        {/* Footer Links */}
        <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8 md:pl-10">
          <div className="py-8 px-4">
            <h1 className="text-xl font-semibold mb-3 font-body2">Important Links</h1>
            <ul className="space-y-3">
              {FooterLinks.map((data, index) => (
                <li key={index}>
                  <a href={data.link} className="inline-block hover:scale-105 duration-200 font-body2">
                    {data.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
  
          {/* Company Address */}
          <div className="py-8 px-4 sm:col-span-2">
            <h1 className="text-xl font-body2 mb-3">Address</h1>
            <div>
              <p className="mb-3 font-body2">Suite 4 Marlborough House 32-36, Hazelwood Road, Northampton, England, NN1 1LN</p>
              <p >info@cochinbrews.com</p>
  
              {/* Social links */}
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl hover:text-purple-400 duration-300" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl hover:text-blue-800 duration-200" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl hover:text-blue-600 duration-200" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Footer;
