import { useState } from "react";
import logo from "../../assets/logo/FullLogo.png";
import { IoIosBeer } from "react-icons/io";
import { Link } from "react-router-dom";
import StaggerText from "react-stagger-text"
import { HiMenuAlt3, HiX } from "react-icons/hi";


const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Products",
    link: "/products",
  },
  {
    id: 3,
    name: "About Us",
    link: "/about",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div className="shadow-md relative ">
        <div className=" flex justify-between items-center h-16 md:h-20 lg:h-24 bg-transparent">
          {/* Logo */}

          <div
            data-aos="fade-down"
            data-aos-once="true"
            className="ml-6 md:ml-10 flex flex-row items-center"
          >
            <Link to="/">
              <a href="#" className="px-2 md:px-4 text-primary font-bold text-xl md:text-4xl  flex justify-center items-center gap-2 tracking-wide font-body2">
                <img src={logo} alt="Logo" className="w-10 md:w-20 " />
                <StaggerText staggerType='letter' staggerDuration={0.4} startDelay={500}>
                  COCHIN BREWS
                </StaggerText>
              </a>
            </Link>
          </div>
          {/* Links */}
          <div
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="300"
            className="flex justify-between items-center gap-4 mr-6 md:mr-10"
          >
            <ul className="hidden md:flex items-center gap-4">
              {Menu.map((menu) => (
                <li key={menu.id}>
                  <Link to={menu.link}>
                    <a
                      className="inline-block text-base md:text-lg lg:text-xl px-2 font-body2 text-white hover:text-primary duration-200 relative group"
                    >
                      <span>{menu.name}</span>
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 md:hidden">
              {showMenu ? (
                <HiX
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all text-primary "
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all  text-primary"
                  size={30}
                />
              )}
            </div>
            <button className="hidden bg-primary hover:scale-105 duration-200 text-black px-4 py-2 font-body2 rounded-full md:flex items-center gap-3">
              Contact us
              <IoIosBeer className="text-xl text-black drop-shadow-sm cursor-pointer" />
            </button>

          </div>
        </div>
      </div>
      {showMenu && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50" onClick={toggleMenu}>
          <div className="bg-white bg-opacity-90 w-4/5 p-4 shadow-md rounded-lg">
            <ul className="flex flex-col gap-4">
              {Menu.map((menu) => (
                <li key={menu.id}>
                  <Link to={menu.link}>
                    <a className={`block text-lg font-body2 ${window.location.pathname === menu.link ? 'text-primary' : 'text-black'} hover:text-primary duration-200`}>
                      {menu.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            <button className="absolute top-4 right-4" onClick={toggleMenu}>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;