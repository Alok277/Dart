import React, { useEffect, useState } from "react";
import './sectiontwo.css'

const SectionTwo = () => {
    const [translateX, setTranslateX] = useState(0);
    const contentWidth = 113 * 14;
    
  
      // Width of each item multiplied by the total number of items

    useEffect(() => {
        const interval = setInterval(() => {
          setTranslateX(prevTranslateX => {
            // Reset translateX to 0 when it reaches half of the content width
            if (prevTranslateX <= -contentWidth / 2.9) {
              return 0;
            }
            return prevTranslateX - 1;
          });
        }, 10); // Adjust the speed of the animation here
      
        return () => clearInterval(interval);
      }, [contentWidth]);
  return (
    <section className="pb-8 max-sm:pt-24 max-md:px-8 px-8 relative scroll-mt-[73px] block font-poppins align-baseline mt-16">
      <div className=" panel-content grid grid-cols-12 gap-x-4 gap-y-2 md:gap-x-16 md:gap-y-8 mx-0 my-auto max-w-[1152px]">
        <div className="md:col-span-12 col-start-1 col-end-13">
          <div>
            <div className="text-center ">
              <h5 className="m-0 p-0 text-pretty hyphens-manual  text-lg md:text-xl lg:text-2xl xl:text-3xl font-poppins font-semibold leading-5 text-center">
                Used daily by 10,000+ marketers, agencies, and multi-location
                brands
              </h5>
            </div>
          </div>
        </div>
        <div className="overflow-hidden relative md:col-span-12 col-span-12 ">
          <div
            className="absolute bottom-0 left-0 top-0 z-20 w-14 h-full bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/wp-content/themes/brightlocal-2023/dist/images/backgrounds/logo-anim-grad-left.svg')`,
            }}
          ></div>
          <div className="flex items-center relative touch-pan-y w-[100%] select-none overflow-hidden  ">
            <div
              className="scr-ticker-item keen-slider__slide min-h-[100%] overflow-hidden relative w-[100%] "
              style={{
                transform: `translate3d(${translateX}px, 0, 0)`,
                minWidth: "113px",
                maxWidth: "113px",
              }}
            >
              <div className="scr-ticker-inner select-none">
                <img
                  class="img-respond h-auto max-w-[100%] w-[100%] overflow-clip "
                  srcset="https://www.brightlocal.com/wp-content/uploads/2023/10/hilton-1-logo.png 414w,                                                        https://www.brightlocal.com/wp-content/uploads/2023/10/hilton-1-logo.png 768w,                                                        https://www.brightlocal.com/wp-content/uploads/2023/10/hilton-1-logo.png 1024w"
                  sizes="(max-width: 414px) 100vw,                                                        (max-width: 768px) 50vw,                                                        33.3vw"
                  alt="Hilton 1 Logo"
                  loading="lazy"
                  width="320"
                  height="auto"
                />
              </div>
            </div>
            
            <div
              className="scr-ticker-item keen-slider__slide min-h-[100%] overflow-hidden relative w-[100%]"
              style={{
                transform: `translate3d(${translateX}px, 0, 0)`,
                minWidth: "113px",
                maxWidth: "113px",
              }}
            >
              <div className="scr-ticker-inner select-none">
                <img
                  class="img-respond h-auto max-w-[100%] w-[100%] overflow-clip "
                  srcset="https://www.brightlocal.com/wp-content/uploads/2023/10/Sterlingsky-logo.png 414w,                                                        https://www.brightlocal.com/wp-content/uploads/2023/10/Sterlingsky-logo.png 768w,                                                        https://www.brightlocal.com/wp-content/uploads/2023/10/Sterlingsky-logo.png 1024w"
                  sizes="(max-width: 414px) 100vw,                                                        (max-width: 768px) 50vw,                                                        33.3vw"
                  alt="Hilton 1 Logo"
                  loading="lazy"
                  width="320"
                  height="auto"
                />
              </div>
            </div>
         
            <div
              className="scr-ticker-item keen-slider__slide min-h-[100%] overflow-hidden relative w-[100%] "
              style={{
                transform: `translate3d(${translateX}px, 0, 0)`,
                minWidth: "113px",
                maxWidth: "113px",
              }}
            >
              <div className="scr-ticker-inner select-none">
                <img
                  class="img-respond h-auto max-w-[100%] w-[100%] overflow-clip "
                  srcset="https://www.brightlocal.com/wp-content/uploads/2023/10/Specsavers-1-logo.png 414w,                                                        https://www.brightlocal.com/wp-content/uploads/2023/10/Specsavers-1-logo.png 768w,                                                        https://www.brightlocal.com/wp-content/uploads/2023/10/Specsavers-1-logo.png 1024w"
                  sizes="(max-width: 414px) 100vw,                                                        (max-width: 768px) 50vw,                                                        33.3vw"
                  alt="Hilton 1 Logo"
                  loading="lazy"
                  width="320"
                  height="auto"
                />
              </div>
            </div>
            
            <div
              className="scr-ticker-item keen-slider__slide min-h-[100%] overflow-hidden relative w-[100%] "
              style={{
                transform: `translate3d(${translateX}px, 0, 0)`,
                minWidth: "113px",
                maxWidth: "113px",
              }}
            >
              <div className="scr-ticker-inner select-none">
                <img
                  class="img-respond h-auto max-w-[100%] w-[100%] overflow-clip "
                  srcset="https://www.brightlocal.com/wp-content/uploads/2023/10/valvoline-logo.png 414w,                                                        https://www.brightlocal.com/wp-content/uploads/2023/10/valvoline-logo.png 768w,                                                        https://www.brightlocal.com/wp-content/uploads/2023/10/valvoline-logo.png 1024w"
                  sizes="(max-width: 414px) 100vw,                                                        (max-width: 768px) 50vw,                                                        33.3vw"
                  alt="Hilton 1 Logo"
                  loading="lazy"
                  width="320"
                  height="auto"
                />
              </div>
            </div>
         
            <div
              className="scr-ticker-item keen-slider__slide min-h-[100%] overflow-hidden relative w-[100%] "
              style={{
                transform: `translate3d(${translateX}px, 0, 0)`,
                minWidth: "113px",
                maxWidth: "113px",
              }}
            >
              <div className="scr-ticker-inner select-none">
                <img
                  class="img-respond h-auto max-w-[100%] w-[100%] overflow-clip "
                  srcset="https://www.brightlocal.com/wp-content/uploads/2023/10/iProspect-logo.png 414w,                                                        https://www.brightlocal.com/wp-content/uploads/2023/10/iProspect-logo.png 768w,                                                        https://www.brightlocal.com/wp-content/uploads/2023/10/iProspect-logo.png 1024w"
                  sizes="(max-width: 414px) 100vw,                                                        (max-width: 768px) 50vw,                                                        33.3vw"
                  alt="Hilton 1 Logo"
                  loading="lazy"
                  width="320"
                  height="auto"
                />
              </div>
            </div>
          
            <div
              className="scr-ticker-item keen-slider__slide min-h-[100%] overflow-hidden relative w-[100%] "
              style={{
                transform: `translate3d(${translateX}px, 0, 0)`,
                minWidth: "113px",
                maxWidth: "113px",
              }}
            >
              <div className="scr-ticker-inner select-none">
                <img
                  class="img-respond h-auto max-w-[100%] w-[100%] overflow-clip "
                  srcset="https://www.brightlocal.com/wp-content/uploads/2023/10/home-depot-2-logo.png 414w,                                                        https://www.brightlocal.com/wp-content/uploads/2023/10/home-depot-2-logo.png 768w,                                                        https://www.brightlocal.com/wp-content/uploads/2023/10/home-depot-2-logo.png 1024w"
                  sizes="(max-width: 414px) 100vw,                                                        (max-width: 768px) 50vw,                                                        33.3vw"
                  alt="Hilton 1 Logo"
                  loading="lazy"
                  width="320"
                  height="auto"
                />
              </div>
            </div>
            
            <div
              className="scr-ticker-item keen-slider__slide min-h-[100%] overflow-hidden relative w-[100%] "
              style={{
                transform: `translate3d(${translateX}px, 0, 0)`,
                minWidth: "113px",
                maxWidth: "113px",
              }}
            >
              <div className="scr-ticker-inner select-none">
                <img
                  class="img-respond h-auto max-w-[100%] w-[100%] overflow-clip "
                  srcset="https://www.brightlocal.com/wp-content/uploads/2023/10/Staylisted-logo.png 414w,                                                        https://www.brightlocal.com/wp-content/uploads/2023/10/Staylisted-logo.png 768w,                                                        https://www.brightlocal.com/wp-content/uploads/2023/10/Staylisted-logo.png 1024w"
                  sizes="(max-width: 414px) 100vw,                                                        (max-width: 768px) 50vw,                                                        33.3vw"
                  alt="Hilton 1 Logo"
                  loading="lazy"
                  width="320"
                  height="auto"
                />
              </div>
            </div>
         
            <div
              className="scr-ticker-item keen-slider__slide min-h-[100%] overflow-hidden relative w-[100%] "
              style={{
                transform: `translate3d(${translateX}px, 0, 0)`,
                minWidth: "113px",
                maxWidth: "113px",
              }}
            >
              <div className="scr-ticker-inner select-none">
                <img
                  class="img-respond h-auto max-w-[100%] w-[100%] overflow-clip "
                  srcset="https://www.brightlocal.com/wp-content/uploads/2023/10/Krispy-Kreme-logo.png 414w,                                                        https://www.brightlocal.com/wp-content/uploads/2023/10/Krispy-Kreme-logo.png 768w,                                                        https://www.brightlocal.com/wp-content/uploads/2023/10/Krispy-Kreme-logo.png 1024w"
                  sizes="(max-width: 414px) 100vw,                                                        (max-width: 768px) 50vw,                                                        33.3vw"
                  alt="Hilton 1 Logo"
                  loading="lazy"
                  width="320"
                  height="auto"
                />
              </div>
            </div>
          
            <div
              className="scr-ticker-item keen-slider__slide min-h-[100%] overflow-hidden relative w-[100%] "
              style={{
                transform: `translate3d(${translateX}px, 0, 0)`,
                minWidth: "113px",
                maxWidth: "113px",
              }}
            >
              <div className="scr-ticker-inner select-none">
                <img
                  class="img-respond h-auto max-w-[100%] w-[100%] overflow-clip "
                  srcset="https://www.brightlocal.com/wp-content/uploads/2023/10/Wagamama-logo.png 414w,                                                        https://www.brightlocal.com/wp-content/uploads/2023/10/Wagamama-logo.png 768w,                                                        https://www.brightlocal.com/wp-content/uploads/2023/10/Wagamama-logo.png 1024w"
                  sizes="(max-width: 414px) 100vw,                                                        (max-width: 768px) 50vw,                                                        33.3vw"
                  alt="Hilton 1 Logo"
                  loading="lazy"
                  width="320"
                  height="auto"
                />
              </div>
            </div>
           
            <div
              className="scr-ticker-item keen-slider__slide min-h-[100%] overflow-hidden relative w-[100%] "
              style={{
                transform: `translate3d(${translateX}px, 0, 0)`,
                minWidth: "113px",
                maxWidth: "113px",
              }}
            >
              <div className="scr-ticker-inner select-none">
                <img
                  class="img-respond h-auto max-w-[100%] w-[100%] overflow-clip "
                  srcset="https://www.brightlocal.com/wp-content/uploads/2023/11/NaNDOS-logo.png 414w,                                                        https://www.brightlocal.com/wp-content/uploads/2023/11/NaNDOS-logo.png 768w,                                                        https://www.brightlocal.com/wp-content/uploads/2023/11/NaNDOS-logo.png 1024w"
                  sizes="(max-width: 414px) 100vw,                                                        (max-width: 768px) 50vw,                                                        33.3vw"
                  alt="Hilton 1 Logo"
                  loading="lazy"
                  width="320"
                  height="auto"
                />
              </div>
            </div>
            
            <div
              className="scr-ticker-item keen-slider__slide min-h-[100%] overflow-hidden relative w-[100%] "
              style={{
                transform: `translate3d(${translateX}px, 0, 0)`,
                minWidth: "113px",
                maxWidth: "113px",
              }}
            >
              <div className="scr-ticker-inner select-none">
                <img
                  class="img-respond h-auto max-w-[100%] w-[100%] overflow-clip "
                  srcset="https://www.brightlocal.com/wp-content/uploads/2023/11/Kumon-logo.png 414w,                                                        https://www.brightlocal.com/wp-content/uploads/2023/11/Kumon-logo.png 768w,                                                        https://www.brightlocal.com/wp-content/uploads/2023/11/Kumon-logo.png 1024w"
                  sizes="(max-width: 414px) 100vw,                                                        (max-width: 768px) 50vw,                                                        33.3vw"
                  alt="Hilton 1 Logo"
                  loading="lazy"
                  width="320"
                  height="auto"
                />
              </div>
            </div>
            
            <div
              className="scr-ticker-item keen-slider__slide min-h-[100%] overflow-hidden relative w-[100%] "
              style={{
                transform: `translate3d(${translateX}px, 0, 0)`,
                minWidth: "113px",
                maxWidth: "113px",
              }}
            >
              <div className="scr-ticker-inner select-none">
                <img
                  class="img-respond h-auto max-w-[100%] w-[100%] overflow-clip "
                  srcset="https://www.brightlocal.com/wp-content/uploads/2023/10/Fitness-First-logo.png 414w,                                                        https://www.brightlocal.com/wp-content/uploads/2023/10/Fitness-First-logo.png 768w,                                                        https://www.brightlocal.com/wp-content/uploads/2023/10/Fitness-First-logo.png 1024w"
                  sizes="(max-width: 414px) 100vw,                                                        (max-width: 768px) 50vw,                                                        33.3vw"
                  alt="Hilton 1 Logo"
                  loading="lazy"
                  width="320"
                  height="auto"
                />
              </div>
            </div>
            
            <div
              className="scr-ticker-item keen-slider__slide min-h-[100%] overflow-hidden relative w-[100%] "
              style={{
                transform: `translate3d(${translateX}px, 0, 0)`,
                minWidth: "113px",
                maxWidth: "113px",
              }}
            >
              <div className="scr-ticker-inner select-none">
                <img
                  class="img-respond h-auto max-w-[100%] w-[100%] overflow-clip "
                  srcset="https://www.brightlocal.com/wp-content/uploads/2023/10/Halfords-logo.png 414w,                                                        https://www.brightlocal.com/wp-content/uploads/2023/10/Halfords-logo.png 768w,                                                        https://www.brightlocal.com/wp-content/uploads/2023/10/Halfords-logo.png 1024w"
                  sizes="(max-width: 414px) 100vw,                                                        (max-width: 768px) 50vw,                                                        33.3vw"
                  alt="Hilton 1 Logo"
                  loading="lazy"
                  width="320"
                  height="auto"
                />
              </div>
            </div>

            
            <div
              className="scr-ticker-item keen-slider__slide min-h-[100%] overflow-hidden relative w-[100%] "
              style={{
                transform: `translate3d(${translateX}px, 0, 0)`,
                minWidth: "113px",
                maxWidth: "113px",
              }}
            >
              <div className="scr-ticker-inner select-none">
                <img
                  class="img-respond h-auto max-w-[100%] w-[100%] overflow-clip "
                  srcset="https://www.brightlocal.com/wp-content/uploads/2023/10/Smilesavvy-logo.png 414w,                                                        https://www.brightlocal.com/wp-content/uploads/2023/10/Smilesavvy-logo.png 768w,                                                        https://www.brightlocal.com/wp-content/uploads/2023/10/Smilesavvy-logo.png 1024w"
                  sizes="(max-width: 414px) 100vw,                                                        (max-width: 768px) 50vw,                                                        33.3vw"
                  alt="Hilton 1 Logo"
                  loading="lazy"
                  width="320"
                  height="auto"
                />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
