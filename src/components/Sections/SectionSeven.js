

import React, { useEffect, useState, useRef } from "react";
import "./section.css";

const imageData = [
  {
    src:
      "https://www.brightlocal.com/wp-content/uploads/2023/12/04-auditlocations.svg",
    width: 560,
    height: 359,
  },
  {
    src:
      "https://www.brightlocal.com/wp-content/uploads/2023/12/05-track-rankings-1.svg",
    width: 1,
    height: 1,
  },
  {
    src:
      "https://www.brightlocal.com/wp-content/uploads/2023/12/06-generate-white-label-reports.svg",
    width: 560,
    height: 400,
  },
  {
    src:
      "https://www.brightlocal.com/wp-content/uploads/2023/09/04.buildabrilliantonlinereputation.png",
    width: 1120,
    height: 1000,
  },
  {
    src: "/assets/images/scrollfifth.svg",
    width: 560,
    height: 359,
  },
];

const SectionSeven = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollItemsRef = useRef([]);

  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

    
      const totalHeight = document.documentElement.scrollHeight;
      const sectionHeight = totalHeight / imageData.length;

   
      let visibleIndex = Math.floor((scrollPosition*2 + windowHeight / 2) / sectionHeight);

     
      if (visibleIndex < 0) {
        visibleIndex = 0;
      } else if (visibleIndex >= imageData.length) {
        visibleIndex = imageData.length - 1;
      }

      if (visibleIndex !== currentIndex) {
        setCurrentIndex(visibleIndex);
      }
      console.log(currentIndex)
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentIndex]);
  
 




  return (
    <section className="pt-8 pb-24 mt-24 pl-8 pr-8 relative scroll-m-[73px] block">
      <div className="grid gap-y-8 gap-x-8 my-0 mx-auto max-w-[1152px] grid-cols-12 items-center">
        <div className="head col-start-1 col-end-13">
          <div className="text-center">
            <h2 className="text-pretty text-center hyphens-manual text-custom leading-11 relative font-poppins font-semibold">
              Everything you need to do local SEO from start to finish
            </h2>
          </div>
        </div>
        <section className="orient flex col-start-1 col-end-13  relative min-h-screen   pb-10 ">
          <div className="img-container flex-1  order-1 ml-0 relative  mt-0 mr-8 mb-8   ">
            <div className="bottom-0  overflow-hidden sticky top-[150px] min-h-screen flex flex-col pb-20">
              {/* Mapping through the images */}
              {imageData.map((image, index) => (
                <div
                  key={index}
                  ref={(el) => (scrollItemsRef.current[index] = el)}
                  className={`image-container ${
                    index === currentIndex ? "visible" : "invisible"
                  } items-center bottom-0 flex justify-center  left-0 opacity-100 absolute right-0 top-0 scale-100 origin-center duration-1000 transition-transform ease-out`}
                >
                  <div className="opacity-100 w-[100%] ">
                    <img
                      src={image.src}
                      className="h-auto max-w-[100%] w-[100%] overflow-x-clip overflow-y-clip overflow-clip"
                      width={image.width}
                      height={image.height}
                      alt=""
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
         
               <div className="content-container  order-2  flex-1 mt-0 mb-8 ml-8 mr-8">
            <div className="hidden ">
            <img
                src="https://www.brightlocal.com/wp-content/uploads/2023/12/04-auditlocations.svg"
                className="h-auto max-w-[100%] w-[100%] overflow-x-clip overflow-y-clip overflow-clip"
                alt="none"
              />
            </div>
            <div className="scroll-item flex items-center justify-center flex-col min-h-screen   pb-32">
              <div className="scroll-item-content">
                <div className="">
                  <div className="text-left pb-1">
                    <h3 className="text-custom-sm leading-5 font-semibold font-poppins">
                      Audit locations to uncover your biggest opportunities
                    </h3>
                    <div className="text-left text-[1rem] leading-6 pt-[1rem] ">
                      <p className="text-left text-[1rem] leading-5">
                        No more guesswork. BrightLocal’s auditing tools crawl
                        300+ data points across local search, citations, and
                        Google Business Profile to flag issues—and highlight
                        your biggest opportunities to improve.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="py-[1rem] px-0">
                  <ul className="text-[1rem] leading-7 mb-4 mt-4 ml-0 p-0 relative block">
                    <li className=" text-left bullet-green mb-0 pr-0 pt-0 pb-4 pl-10 relative">
                      <p className="font-normal text-pretty font-poppins text-[1.25] leading-5">
                        Track listings and find citation opportunities
                      </p>
                    </li>
                    <li className="text-left bullet-green mb-0 pr-0 pt-0 pb-4 pl-10 relative">
                      <p className="font-normal text-pretty font-poppins text-[1.25] leading-5">
                        Optimize your Google Business Profile
                      </p>
                    </li>
                    <li className="text-left bullet-green mb-0 pr-0 pt-0 pb-4 pl-10 relative">
                      <p className="font-normal text-pretty font-poppins text-[1.25] leading-5">
                        In minutes, see how to rank higher
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="">
                  <a
                    href="https://www.brightlocal.com/local-seo-tools/auditing/"
                    title="Tools to audit local SEO"
                    target=""
                    role="button"
                    className="bg-[#fff] text-[#252525] text-pretty text-center border-2 border-solid border-[#252525]  text-lg whitespace-nowrap  items-center rounded-[130px] shadow-[0_4px_0_#252525] inline-flex flex-wrap font-poppins font-semibold justify-center mt-1 opacity-100 overflow-hidden px-5 py-3  relative  no-underline cursor-pointer hover:duration-300 max-sm:mt-4 hover:mt-3 hover:shadow-none translate-y-[-4px] leading-5"
                  >
                    Tools to audit local SEO{" "}
                  </a>
                  {/* <a href="/Start/free/trial/" class="bg-[#0fd03b] text-[#252525] text-pretty text-center border-2 border-solid border-[#252525]  text-lg whitespace-nowrap  items-center rounded-[130px] shadow-[0_4px_0_#252525] inline-flex flex-wrap font-poppins font-semibold justify-center mt-2 opacity-100 overflow-hidden px-5 py-3  relative  no-underline cursor-pointer hover:duration-300 max-sm:mt-4 hover:mt-3 hover:shadow-none">Start a free trial</a> */}
                </div>
              </div>
            </div>
            <div className="hidden ">
              <img
                src="https://www.brightlocal.com/wp-content/uploads/2023/12/05-track-rankings-1.svg"
                className="h-auto max-w-[100%] w-[100%] overflow-x-clip overflow-y-clip overflow-clip"
                alt="second"
              />
            </div>
            <div className="scroll-item flex items-stretch justify-center  flex-col min-h-screen  pb-32 ref={el => scrollItemsRef.current[index] = el}">
              <div className="scroll-item-content">
                <div className="">
                  <div className="text-left pb-1">
                    <h3 className="text-custom-sm leading-5 font-semibold font-poppins">
                      Track rankings to find ways to continually improve
                    </h3>
                    <div className="text-left text-[1rem] leading-6 pt-[1rem] ">
                      <p className="text-left text-[1rem] leading-5">
                        Go beyond basic rank tracking. Track specific keywords
                        in target locations and monitor where—and why—you rank
                        among competitors to find ways to optimize your
                        visibility and climb rankings.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="py-[1rem] px-0">
                  <ul className="  text-[1rem] leading-7 mb-0 mt-4 p-0 relative block">
                    <li className=" text-left bullet-green  mb-0 pr-0 pt-0 pb-4 pl-10 relative">
                      <p className="font-normal text-pretty font-poppins text-[1.25] leading-5">
                        See where you rank all over the city/state/region
                      </p>
                    </li>
                    <li className="text-left bullet-green  mb-0 pr-0 pt-0 pb-4 pl-10 relative">
                      <p className="font-normal text-pretty font-poppins text-[1.25] leading-5">
                        Keep tabs on competitors
                      </p>
                    </li>
                    <li className="text-left bullet-green  mb-0 pr-0 pt-0 pb-4 pl-10 relative">
                      <p className="font-normal text-pretty font-poppins text-[1.25] leading-5">
                        Spot ways to continually improve
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="">
                  <a
                    href="https://www.brightlocal.com/local-seo-tools/auditing/"
                    title="Tools to audit local SEO"
                    target=""
                    role="button"
                    className="bg-[#fff] text-[#252525] text-pretty text-center border-2 border-solid border-[#252525]  text-lg whitespace-nowrap  items-center rounded-[130px] shadow-[0_4px_0_#252525] inline-flex flex-wrap font-poppins font-semibold justify-center mt-1 opacity-100 overflow-hidden px-5 py-3  relative  no-underline cursor-pointer hover:duration-300 max-sm:mt-4 hover:mt-3 hover:shadow-none translate-y-[-4px] leading-5"
                  >
                    Tools to help you rank higher{" "}
                  </a>
                  {/* <a href="/Start/free/trial/" class="bg-[#0fd03b] text-[#252525] text-pretty text-center border-2 border-solid border-[#252525]  text-lg whitespace-nowrap  items-center rounded-[130px] shadow-[0_4px_0_#252525] inline-flex flex-wrap font-poppins font-semibold justify-center mt-2 opacity-100 overflow-hidden px-5 py-3  relative  no-underline cursor-pointer hover:duration-300 max-sm:mt-4 hover:mt-3 hover:shadow-none">Start a free trial</a> */}
                </div>
              </div>
            </div>
            <div className="hidden ">
              <img
                src="https://www.brightlocal.com/wp-content/uploads/2023/12/06-generate-white-label-reports.svg"
                className="h-auto max-w-[100%] w-[100%] overflow-x-clip overflow-y-clip overflow-clip"
                alt="third"
              />
            </div>
            <div className="scroll-item flex items-stretch justify-center flex-col min-h-screen   pb-32 ref={el => scrollItemsRef.current[index] = el}">
              <div className="scroll-item-content">
                <div className="">
                  <div className="text-left pb-1">
                    <h3 className="text-custom-sm leading-5 font-semibold font-poppins">
                      Generate reports in your own branding that anyone can
                      understand
                    </h3>
                    <div className="text-left text-[1rem] leading-6 pt-[1rem] ">
                      <p className="text-left text-[1rem] leading-5">
                        Forget sinking time into generating and sharing reports
                        people struggle to understand. With BrightLocal, you can
                        generate sharable reports that show the impact of your
                        work and start conversations in minutes.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="py-[1rem] px-0">
                  <ul className="text-[1rem] leading-7 mb-0 mt-4 p-0 relative block">
                    <li className="text-left bullet-green  mb-0 pr-0 pt-0 pb-4 pl-10 relative">
                      <p className="font-normal text-pretty font-poppins text-[1.25] leading-5">
                        See where you rank all over the city/state/region
                      </p>
                    </li>
                    <li className="text-left bullet-green  mb-0 pr-0 pt-0 pb-4 pl-10 relative">
                      <p className="font-normal text-pretty font-poppins text-[1.25] leading-5">
                        White-label everything
                      </p>
                    </li>
                    <li className="text-left bullet-green  mb-0 pr-0 pt-0 pb-4 pl-10 relative">
                      <p className="font-normal text-pretty font-poppins text-[1.25] leading-5">
                        Share with a URL in a click
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="">
                  <a
                    href="https://www.brightlocal.com/local-seo-tools/auditing/"
                    title="Tools to audit local SEO"
                    target=""
                    role="button"
                    className="bg-[#fff] text-[#252525] text-pretty text-center border-2 border-solid border-[#252525]  text-lg whitespace-nowrap  items-center rounded-[130px] shadow-[0_4px_0_#252525] inline-flex flex-wrap font-poppins font-semibold justify-center mt-1 opacity-100 overflow-hidden px-5 py-3  relative  no-underline cursor-pointer hover:duration-300 max-sm:mt-4 hover:mt-3 hover:shadow-none translate-y-[-4px] leading-5"
                  >
                    Reports that give you all rankings{" "}
                  </a>
                  {/* <a href="/Start/free/trial/" class="bg-[#0fd03b] text-[#252525] text-pretty text-center border-2 border-solid border-[#252525]  text-lg whitespace-nowrap  items-center rounded-[130px] shadow-[0_4px_0_#252525] inline-flex flex-wrap font-poppins font-semibold justify-center mt-2 opacity-100 overflow-hidden px-5 py-3  relative  no-underline cursor-pointer hover:duration-300 max-sm:mt-4 hover:mt-3 hover:shadow-none">Start a free trial</a> */}
                </div>
              </div>
            </div>
            <div className="hidden ">
              <img
                src="https://www.brightlocal.com/wp-content/uploads/2023/09/04.buildabrilliantonlinereputation.png"
                className="h-auto max-w-[100%] w-[100%] overflow-x-clip overflow-y-clip overflow-clip"
                alt="four"
              />
            </div>
            <div className="scroll-item flex items-stretch justify-center flex-col min-h-screen   pb-32 ref={el => scrollItemsRef.current[index] = el}">
              <div className="scroll-item-content">
                <div className="">
                  <div className="text-left pb-1">
                    <h3 className="text-custom-sm leading-5 font-semibold font-poppins">
                      Collect, respond, and monitor reviews with ease
                    </h3>
                    <div className="text-left text-[1rem] leading-6 pt-[1rem] ">
                      <p className="text-left text-[1rem] leading-5">
                        One of the best ways to improve local rankings is by
                        building a solid reputation. BrightLocal gives you
                        everything you need to collect, respond, monitor, and
                        display reviews—across multiple platforms—all under one
                        roof.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="py-[1rem] px-0">
                  <ul className="text-[1rem] leading-7 mb-0 mt-4 p-0 relative block">
                    <li className="text-left bullet-green  mb-0 pr-0 pt-0 pb-4 pl-10 relative">
                      <p className="font-normal text-pretty font-poppins text-[1.25] leading-5">
                        Never miss a review with 80+ review sites tracked
                      </p>
                    </li>
                    <li className="text-left bullet-green  mb-0 pr-0 pt-0 pb-4 pl-10 relative">
                      <p className="font-normal text-pretty font-poppins text-[1.25] leading-5">
                        Scale review generation via SMS, email, and in-store
                        campaigns
                      </p>
                    </li>
                    <li className="text-left bullet-green  mb-0 pr-0 pt-0 pb-4 pl-10 relative">
                      <p className="font-normal text-pretty font-poppins text-[1.25] leading-5">
                        Convert more website visitors with easy-to-install
                        review widgets
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="">
                  <a
                    href="https://www.brightlocal.com/local-seo-tools/auditing/"
                    title="Tools to audit local SEO"
                    target=""
                    role="button"
                    className="bg-[#fff] text-[#252525] text-pretty text-center border-2 border-solid border-[#252525]  text-lg whitespace-nowrap  items-center rounded-[130px] shadow-[0_4px_0_#252525] inline-flex flex-wrap font-poppins font-semibold justify-center mt-1 opacity-100 overflow-hidden px-5 py-3  relative  no-underline cursor-pointer hover:duration-300 max-sm:mt-4 hover:mt-3 hover:shadow-none translate-y-[-4px] leading-5"
                  >
                    Tools to help you build a brilliant reputation{" "}
                  </a>
                  {/* <a href="/Start/free/trial/" class="bg-[#0fd03b] text-[#252525] text-pretty text-center border-2 border-solid border-[#252525]  text-lg whitespace-nowrap  items-center rounded-[130px] shadow-[0_4px_0_#252525] inline-flex flex-wrap font-poppins font-semibold justify-center mt-2 opacity-100 overflow-hidden px-5 py-3  relative  no-underline cursor-pointer hover:duration-300 max-sm:mt-4 hover:mt-3 hover:shadow-none">Start a free trial</a> */}
                </div>
              </div>
            </div>
            <div className="hidden ">
              <img src="" className="h-auto max-w-[100%] w-[100%] overflow-x-clip overflow-y-clip overflow-clip" alt="five" />
            </div>
            <div className="scroll-item flex items-stretch justify-center flex-col min-h-screen   pb-32 ref={el => scrollItemsRef.current[index] = el}">
              <div className="scroll-item-content">
                <div className="">
                  <div className="text-left pb-1">
                    <h3 className="text-custom-sm leading-5 font-semibold font-poppins">
                      Manage listings for multiple locations, all in one place
                    </h3>
                    <div className="text-left text-[1rem] leading-6 pt-[1rem] ">
                      <p className="text-left text-[1rem] leading-5">
                        Building citations. Updating opening hours. Making sure
                        listings are up to date… it all takes time. And as you
                        scale, traditional listing services can get seriously
                        expensive. BrightLocal’s hybrid approach to listings
                        management gives you everything you need to grow and
                        manage 100s of locations at an unbeatable price.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="py-[1rem] px-0">
                  <ul className="text-[1rem] leading-7 mb-0 mt-4 p-0 relative block">
                    <li className="text-left bullet-green  mb-0 pr-0 pt-0 pb-4 pl-10 relative">
                      <p className="font-normal text-pretty font-poppins text-[1.25] leading-5">
                        Identify, build, and update listings on 100s of
                        sites—with no recurring fees!
                      </p>
                    </li>
                    <li className="text-left bullet-green  mb-0 pr-0 pt-0 pb-4 pl-10 relative">
                      <p className="font-normal text-pretty font-poppins text-[1.25] leading-5">
                        Sync changes like opening hours in one click
                      </p>
                    </li>
                    <li className="text-left bullet-green  mb-0 pr-0 pt-0 pb-4 pl-10 relative">
                      <p className="font-normal text-pretty font-poppins text-[1.25] leading-5">
                        Schedule posts to Google Business Profile in advance
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="">
                  <a
                    href="https://www.brightlocal.com/local-seo-tools/auditing/"
                    title="Tools to audit local SEO"
                    target=""
                    role="button"
                    className="bg-[#fff] text-[#252525] text-pretty text-center border-2 border-solid border-[#252525]  text-lg whitespace-nowrap  items-center rounded-[130px] shadow-[0_4px_0_#252525] inline-flex flex-wrap font-poppins font-semibold justify-center mt-1 opacity-100 overflow-hidden px-5 py-3  relative  no-underline cursor-pointer hover:duration-300 max-sm:mt-4 hover:mt-3 hover:shadow-none translate-y-[-4px] leading-5"
                  >
                    Deliver a smarter way to manage listings{" "}
                  </a>
                  {/* <a href="/Start/free/trial/" class="bg-[#0fd03b] text-[#252525] text-pretty text-center border-2 border-solid border-[#252525]  text-lg whitespace-nowrap  items-center rounded-[130px] shadow-[0_4px_0_#252525] inline-flex flex-wrap font-poppins font-semibold justify-center mt-2 opacity-100 overflow-hidden px-5 py-3  relative  no-underline cursor-pointer hover:duration-300 max-sm:mt-4 hover:mt-3 hover:shadow-none">Start a free trial</a> */}
                </div>
              </div>
            </div>
          </div>
         
        </section>
      </div>
    </section>
  );
};

export default SectionSeven;



