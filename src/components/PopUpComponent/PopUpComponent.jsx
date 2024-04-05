import { useState } from "react";
import PropTypes from "prop-types";
import Navbar from "../Navbar/Navbar";
import bgImage from "../../assets/bg/bg2.jpg";
import ThankYouPage from "./ThankYou";

const PopUpComponent = ({ onConfirm }) => {
  const [isOver18, setIsOver18] = useState(null);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleConfirm = (response) => {
    setIsOver18(response);
    if (!response) {
      setShowThankYou(true);
    } else {
      onConfirm(response);
    }
  };

  return (
    <div className="overflow-y-hidden">
      <Navbar />
      {showThankYou ? (
        <ThankYouPage />
      ) : (
        <div 
          className="fixed  w-full h-full flex justify-center items-center " loading="lazy"
          style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}
        >
          
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 font-body2">Are you above 18?</h2>
            <div className="flex justify-between">
              <button
                className="bg-primary hover:opacity-70 text-white font-semibold py-2 px-4 rounded font-body2"
                onClick={() => handleConfirm(true)}
              >
                Yes
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded font-body2"
                onClick={() => handleConfirm(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

PopUpComponent.propTypes = {
  onConfirm: PropTypes.func.isRequired,
};

export default PopUpComponent;
