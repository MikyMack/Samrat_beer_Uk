
import bgImage from "../../assets/bg/bg1.jpg"
import logo from "../../assets/logo/FullLogo.png";
import StaggerText from "react-stagger-text"


const Hero = () => {

    return (
        <>
            <div className="hero-container overflow-hidden"> 
                    <div className="relative h-screen w-full">
                        <img loading="lazy"
                            src={bgImage}
                            alt="image 1"
                            className="h-[700px] w-full object-cover"
                        />
                        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/65">

                            <div className="container pb-8 sm:pb-0">
                                <div className="grid grid-cols-1 sm:grid-cols-2">

                                    <div className="flex flex-col text-white justify-center gap-6 pb-44 md:pb-10 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
                                        <h1
                                            data-aos="fade-up"
                                            data-aos-once="true"
                                            className="text-3xl sm:text-2xl lg:text-6xl  font-body"
                                        >
                                            <StaggerText staggerType='letter' staggerDuration={0.4} startDelay={500}>
                                            Crafting moments, one sip at a time                                         
                                            </StaggerText>

                                        </h1>
                                    </div>

                                    <div
                                        data-aos="zoom-in"
                                        data-aos-duration="300"
                                        className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 "
                                    >
                                        <img
                                            data-aos-once="true"
                                            src={logo}
                                            alt="beer img"
                                            className="w-[150px] sm:w-[300px] sm:scale-125 mx-auto "
                                        />
                                        <div
                                            data-aos="fade-left"
                                            className="bg-gradient-to-r from-primary to-secondary p-3 rounded-xl absolute top-10 left-10"
                                        >
                                        </div>
                                        <div
                                            data-aos="fade-right"
                                            data-aos-offset="0"
                                            className="bg-gradient-to-r from-primary to-secondary p-3 rounded-xl absolute bottom-10 right-10"
                                        >                                     
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

export default Hero;
