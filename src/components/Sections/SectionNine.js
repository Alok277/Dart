import React from "react";

const SectionNine = () => {
  return (
    <section className="section bg-[#cff6d8]">
      <div className="panel-content">
        <div className="cd-header font-poppins">
          <div className="text-center ">
            <h2 className="text-pretty font-poppins h2">
              Why do marketers love BrightLocal?
            </h2>

            <p className="text-pretty font-poppins font-normal text-[1.3125rem] leading-8">
              BrightLocal doesn’t offer everything under the sun, only what you
              need to get local done.
            </p>
            <p className="text-pretty font-poppins font-normal text-[1.3125rem] leading-8 mt-3">
              Our mission is simple:
              <em className="font-bold">
                give marketers everything they need to excel at local SEO, at an
                unbeatable price.
              </em>
            </p>
          </div>
        </div>

        <div className="cd-container-cols-3 grid gap-x-6 gap-y-6 items-center mx-auto my-0 max-w-[1152px] grid-cols-3 ">
          <article className="article my-0 h-[20rem] bg-[#fff]">
            <div className="cd-text-container">
              <div className="cd-testimonal-micro px-4 ">
                <div className="">
                <h2 className="text-pretty font-poppins none-h2  text-sm">
                Easy to use
            </h2>
                 
                  <p className="text-pretty font-poppins font-normal  leading-8">
                  BrightLocal doesn’t leave you drowning in data. It
                      uncovers insights so you can take action.
                  </p>
                
                </div>
              </div>
            </div>
          </article>
          <article className="article h-[20rem] bg-[#fff] ">
            <div className="cd-text-container  ">
              <div className="cd-testimonal-micro  px-4 ">
                <div className="">
                <h2 className="text-pretty font-poppins none-h2  text-sm">
                Flexible pricing
            </h2>
                 
                  <p className="text-pretty font-poppins font-normal  leading-8">
                  BrightLocal doesn’t box you into one-size-fits-all
                      subscriptions. You can pay for what you need with flexible
                      pricing.
                  </p>
                
                 
             
                </div>
              </div>
            </div>
          </article>
          <article className="article h-[20rem] bg-[#fff]">
            <div className="cd-text-container  ">
              <div className="cd-testimonal-micro  px-4 ">
                <div className="">
                <h2 className="text-pretty font-poppins none-h2  text-sm">
                All under one roof
            </h2>
                 
                  <p className="text-pretty font-poppins font-normal  leading-8">
                  Save time, cut costs, and streamline your process with all
                    the tools you need to manage 100s of locations, under one
                    roof.
                  </p>
                 
                
                </div>
              </div>
            </div>
          </article>
        </div>
      
      </div>
    </section>
  );
};

export default SectionNine;
