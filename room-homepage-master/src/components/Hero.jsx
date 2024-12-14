import { useEffect, useRef, useState } from "react";
import {
  angleLeft,
  angleRight,
  arrow,
  imageAboutDark,
  imageAboutLight,
  imagesArrMobile,
  imagesArrDesktop,
  navLinks,
  logo,
} from "../constants";
const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [imgSrs, setImgSrs] = useState(imagesArrMobile);
  const imgRef = useRef(null);
  let slideQuantity = 0;
  let index = 1;

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const handleSlider = (direction) => {
    const { current } = imgRef;

    if (direction === "left") {
      if (index <= imgSrs.length - 2) return;
      index--;
      slideQuantity += 100;
      current.style.transform = `translateX(${slideQuantity}%`;
    } else if (direction === "right") {
      if (index >= imgSrs.length) return;
      index++;
      slideQuantity -= 100;
      current.style.transform = `translateX(${slideQuantity}%`;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    windowWidth > 768
      ? setImgSrs(imagesArrDesktop)
      : setImgSrs(imagesArrMobile);

    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  return (
    <main className="font-poppins w-full min-h-[100vh] flex flex-col overflow-hidden ">
      <div className="lg:flex w-full h-full flex-1">
        <div className="relative flex 1 basis-[50%]">
          <div className="hidden lg:block bg-red w-full absolute z-50">
            {/* desktopNavbar */}
            <ul className="hidden lg:flex items-center text-white gap-5 py-[4rem] px-[3rem] ">
              <img
                className="object-contain w-[70px] h-[70px] cursor-pointer"
                src={logo}
                alt=""
              />
              {navLinks.map((item) => (
                <li
                  className="list-nav ml-[1.2rem] font-bold cursor-pointer py-[0.5rem]"
                  key={item.id}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Hero 1 */}
          <div className="relative w-full h-full">
            <div
              ref={imgRef}
              className="image-grid relative w-full h-full z-[-1] "
            >
              {windowWidth > 1024
                ? imagesArrDesktop.map((imgSrc, index) => (
                    <img
                      className="imgdesk w-full h-full object-cover"
                      key={index}
                      src={imgSrc}
                      alt=""
                    />
                  ))
                : imagesArrMobile.map((imgSrc, index) => (
                    <img
                      className="imgmobile w-full h-full object-cover"
                      key={index}
                      src={imgSrc}
                      alt=""
                    />
                  ))}
            </div>
          </div>

          <div className="absolute bottom-0 right-0 flex gap-[2rem]  bg-zinc-950 lg:hidden">
            {/* Navigation buttons */}
            <button
              onClick={() => handleSlider("left")}
              className="py-[1rem] px-[1rem]"
            >
              <img src={angleLeft} alt="left-btn" />
            </button>
            <button
              onClick={() => handleSlider("right")}
              className="py-[1rem] px-[1rem]"
            >
              <img src={angleRight} alt="right-btn" />
            </button>
          </div>
        </div>

        <div className="bg-slate-50 text-black  flex-1 relativ lg:flex lg:flex-col">
          {/* Contents */}
          <div className="py-[3rem] px-[2rem] lg:flex-1 lg:flex flex-col justify-center">
            <h1 className="h1 font-spartan">
              Discover Innovative ways to decorate
            </h1>
            <p className="my-[1.2rem] font-bold text-color-darkGray  leading-7 font-spartan">
              {" "}
              We provide unmatched quality, comfort, and style for property
              owners across the country. Our experts combine form and function
              in bringing your vision to life. Create a room in your own style
              with our collection and make your property a reflection of you and
              what you love.
            </p>
            <button className="flex mt-[2rem] items-center hover:text-color-darkGray transition-colors">
              <p className="tracking-[1rem] font-[600]"> SHOP NOW</p>
              <img className="object-contain" src={arrow} alt="arrow" />
            </button>
          </div>

          <div className="hidden lg:flex *:duration-300 ">
            {/* Navigation buttons */}
            <button
              onClick={() => handleSlider("left")}
              className="py-[2rem] px-[2rem] hover:bg-color-veryDarkGray bg-zinc-950"
            >
              <img src={angleLeft} alt="left-btn" />
            </button>
            <button
              onClick={() => handleSlider("right")}
              className=" py-[2rem] px-[2rem] hover:bg-color-veryDarkGray bg-zinc-950"
            >
              <img src={angleRight} alt="right-btn" />
            </button>
          </div>
        </div>
      </div>

      <div className="lg:flex">
        <div className="flex-1">
          {/* CONTENT 1 */}
          <img
            className="object-cover w-full h-full"
            src={imageAboutDark}
            alt="dark"
          />
        </div>

        <div className="py-[3rem] px-[2rem] bg-white flex-1 basis-[10%]">
          {/* CONTENT 2 */}
          <h2 className=" tracking-[0.3rem] text-[0.9rem] text-black font-[900] lg:tracking-[10px] lg:text-[1rem]">
            ABOUT OUR FURNITURE
          </h2>
          <p className="mt-[2rem] text-black font-bold text-color-darkGray">
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>

        <div className="flex-1">
          {/* CONTENT 3 */}
          <img
            className="object-cover w-full h-full"
            src={imageAboutLight}
            alt="light"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
