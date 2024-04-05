import { useState, useEffect } from "react";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Services from "../components/Services/Services";
import PopUpComponent from "../components/PopUpComponent/PopUpComponent";

export default function Home() {
  const [isOver18, setIsOver18] = useState(false); 

  useEffect(() => {
    const confirmed = localStorage.getItem("isOver18");
    if (confirmed) {
      setIsOver18(true);
    } else {
      setIsOver18(null); 
    }
  }, []);

  const handleConfirm = (response) => {
    setIsOver18(response);
    localStorage.setItem("isOver18", response ? "true" : "false");
  };

  return (
    <div>
      {isOver18 === null && <PopUpComponent onConfirm={handleConfirm} />} 
      {isOver18 && (
        <>
          <Navbar />
          <Hero />
          <Services />
          <Banner />
          <Footer />
        </>
      )}
    </div>
  );
}
