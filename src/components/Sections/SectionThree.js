import React from "react";
import "./section.css";

const SectionThree = () => {
  return (
    <section className="section ">
      <div className="panel-content">
        <div className="cd-header font-poppins">
          <div className="text-center ">
            <h2 className="text-pretty font-poppins h2">
              BrightLocal helps agencies {}
              <span className="text-[#0ca62f]">scale</span>
              {} and multi-location brands {}
              <span className="text-[#0ca62f]">grow</span>
            </h2>
          </div>
        </div>
        <div className="cd-container-cols-2">
          <article className="artist ">
            <figure className="img">
              <img
                class="img-respond"
                src="https://www.brightlocal.com/wp-content/uploads/2023/12/Scaling-Agencies-1.svg"
                alt="Scaling Agencies (1)"
                width="1"
                height="1"
                loading="lazy"
              />
            </figure>
            <div className="cd-text-container">
              <div className="inner">
                <div className="cd-copy">
                  <header className="pt-1 block ">
                    <h5 className="h5 font-poppins">For Scaling Agencies</h5>
                  </header>
                  <div className="text font-poppins">
                    <p className="p-s">
                      See how agencies use BrightLocal to save 80% of time spent
                      on auditing, reporting, and ranking locations—with a
                      streamlined way to do local SEO from start to finish.
                    </p>
                  </div>
                </div>
                <div className="cd-cta">
                  {/* <a
                    href="https://www.brightlocal.com/agencies/"
                    className="button button-std-green  a"
                    title="Solutions for Agencies"
                    target=""
                    role="button"
                  >
                    Solutions for Agencies
                    <span className="after-class"></span>
                  </a> */}
                  <a
                    href="https://www.brightlocal.com/agencies/"
                    className="button button-std-green  a"
                    title="Solutions for Agencies"
                    target=""
                    role="button"
                  >
                    Solutions for Agencies
                    <span className="after-class"></span>
                  </a>
                </div>
              </div>
              <div className="cd-testimonal-micro">
                <div className="cd-test-inner">
                  <div className="quote">
                    "What used to take the agency 10 hours manually we can now
                    do in 10 minutes with BrightLocal."
                  </div>
                  <div className="info">
                    <div className="author-image">
                      <img
                        src="https://d317jr06u12xtj.cloudfront.net/2018/12/Matthew-Travers.png"
                        alt="Matthew Travers"
                        className="author-inner-image"
                        width="32"
                        height="32"
                      />
                    </div>
                    <div className="company">
                      Matthew Travers
                      <br />
                      Executive VP, Lead to Conversion
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className="artist ">
            <figure className="img">
              <img
                class="img-respond"
                src="https://www.brightlocal.com/wp-content/uploads/2023/12/Scaling-Agencies-1.svg"
                alt="Scaling Agencies (1)"
                width="1"
                height="1"
                loading="lazy"
              />
            </figure>
            <div className="cd-text-container">
              <div className="inner">
                <div className="cd-copy">
                  <header className="pt-1 block ">
                    <h5 className="h5 font-poppins">
                      For Multi-Location Brands
                    </h5>
                  </header>
                  <div className="text font-poppins">
                    <p className="p-s">
                      See how marketers use BrightLocal to rank, manage, and
                      optimize their locations—to outrank competitors and drive
                      more customers through the door.
                    </p>
                  </div>
                </div>
                <div className="cd-cta">
                  {/* <a
                    href="https://www.brightlocal.com/agencies/"
                    className="button button-std-green  a"
                    title="Solutions for Agencies"
                    target=""
                    role="button"
                  >
                    Solutions for Agencies
                    <span className="after-class"></span>
                  </a> */}
                  <a
                    href="https://www.brightlocal.com/agencies/"
                    className="button button-std-green  a"
                    title="Solutions for Agencies"
                    target=""
                    role="button"
                  >
                    Solutions for Brands
                    <span className="after-class"></span>
                  </a>
                </div>
              </div>
              <div className="cd-testimonal-micro">
                <div className="cd-test-inner">
                  <div className="quote">
                    "Thanks to BrightLocal I was able to achieve completely
                    dominant positions of 1st, 2nd, and 3rd across multiple
                    cities."
                  </div>
                  <div className="info">
                    <div className="author-image">
                      <img
                        src="https://www.brightlocal.com/wp-content/uploads/2023/11/Angus-Matthews-128x128.jpg"
                        alt="Matthew Travers"
                        className="author-inner-image"
                        width="32"
                        height="32"
                      />
                    </div>
                    <div className="company">
                      Angus Matthews
                      <br />
                      Marketing Manager, Orchard Care Homes
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div className="cd-cta-global m-2">
          <div className="block text-center gap-4 pb-6 h-20">
            <div className="inline-block  text-center ">
              <a
                href="https://www.brightlocal.com/small-businesses/"
                title="Are you a small local business looking to rank higher?"
                target=""
                role="button"
                className="cta button button-subheading-outer  white bg-[#fff] transition-all text-pretty items-center border-2 border-solid border-[#252525] rounded-[130px] shadow-[0_4px_0_#252525] inline-flex flex-wrap font-poppins text-[1.125rem] font-semibold justify-center mt-2 leading-5 opacity-100 overflow-hidden px-3 py-4 relative text-center translate-y-[-4px] cursor-pointer hover:duration-300 max-sm:mt-4  hover:shadow-none  "
              >
                Are you a small local business looking to rank higher?{" "}
              </a>
              <sub className="block text-[0.875rem] leading-5 pt-2 border-0 m-0 p-0 align-baseline font-poppins ">
                Keep reading... our tools work great for you, too.
              </sub>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
