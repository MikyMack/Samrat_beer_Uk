
import logo from "../../assets/logo/FullLogo.png"; 
import { ThreeDots } from 'react-loading-icons'
import StaggerText from "react-stagger-text"

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <img src={logo}  alt="Website Logo" className="md:w-48 w-28 mb-8" /> 
      <div className="mb-10">
      <p className="px-2 md:px-4 text-primary font-bold text-xl md:text-4xl flex justify-center items-center gap-2 tracking-wide font-body2">
              <StaggerText  staggerType='letter' staggerDuration={0.4}  startDelay={500}>
              COCHIN BREWS
              </StaggerText>
             
            </p>
      </div>
     <ThreeDots  />
    </div>
  );
}