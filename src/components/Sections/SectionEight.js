import React from "react";

const SectionEight = () => {
  return (
    <section className="section ">
      <div className="panel-content">
        <div className="cd-header font-poppins">
          <div className="text-center ">
            <h2 className="text-pretty font-poppins h2">
              Scale and grow with BrightLocal
            </h2>

            <p className="text-pretty font-poppins font-normal text-[1.3125rem] leading-8">
              10,000+ marketers—like you—use BrightLocal as a streamlined way to
              do local SEO from start to finish.
            </p>
          </div>
        </div>

        <div className="cd-container-cols-3 grid gap-x-4 gap-y-4 mx-auto my-0 max-w-[1152px] grid-cols-3">
          <article className="article my-0  bg-[#cff6d8]">
            
            <iframe
              title="Video 1"
              width="100%"
              height="auto"
              src="https://www.youtube.com/watch?v=Op4EMZXWjyE&list=RDF73urNJ-3U8&index=27"
              frameborder="0"
              allowfullscreen
            ></iframe>
           
            <div className="cd-text-container bg-[#cff6d8]">
              <div className="cd-testimonal-micro  bg-[#cff6d8]">
                <div className="cd-test-inner">
                  <div className="quote">
                    "It was thanks to BrightLocal that I was able to achieve
                    completely dominant positions of 1st, 2nd, and 3rd."
                  </div>
                  <div className="info text-center">
                    {/* <div className="author-image">
                    <img
                      src="https://d317jr06u12xtj.cloudfront.net/2018/12/Matthew-Travers.png"
                      alt="Matthew Travers"
                      className="author-inner-image"
                      width="32"
                      height="32"
                    />
                  </div> */}
                    <div className="company text-center">
                      Angus Matthew
                      <br />
                      Group Marketing Manager Orchard Care Homes
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className="article ">
            <figure className="img">
            <iframe
              title="Video 1"
              width="100%"
              height="auto"
              src="https://www.youtube.com/watch?v=Op4EMZXWjyE&list=RDF73urNJ-3U8&index=27"
              frameborder="0"
              allowfullscreen
            ></iframe>
              
            </figure>
            <div className="cd-text-container  bg-[#cff6d8]">
              <div className="cd-testimonal-micro">
                <div className="cd-test-inner">
                  <div className="quote">
                    "For my business BrightLocal is foundational. It means
                    everything... leads, reporting, fulfilment, and growth."
                  </div>
                  <div className="info text-center">
                    {/* <div className="author-image">
                    <img
                      src="https://d317jr06u12xtj.cloudfront.net/2018/12/Matthew-Travers.png"
                      alt="Matthew Travers"
                      className="author-inner-image"
                      width="32"
                      height="32"
                    />
                  </div> */}
                    <div className="company text-center">
                      Jono Long
                      <br />
                      CEO Faithworks Marketing
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className="article ">
            <figure className="img">
            <iframe
              title="Video 1"
              width="100%"
              height="auto"
              src="https://www.youtube.com/watch?v=Op4EMZXWjyE&list=RDF73urNJ-3U8&index=27"
              frameborder="0"
              allowfullscreen
            ></iframe>
            </figure>
            <div className="cd-text-container  bg-[#cff6d8]">
              <div className="cd-testimonal-micro">
                <div className="cd-test-inner">
                  <div className="quote">
                    "BrightLocal is the only platform I've found that ties
                    everything I need for local SEO into one easy-to-use
                    platform + it's affordable."
                  </div>
                  <div className="info text-center">
                    {/* <div className="author-image">
                    <img
                      src="https://d317jr06u12xtj.cloudfront.net/2018/12/Matthew-Travers.png"
                      alt="Matthew Travers"
                      className="author-inner-image"
                      width="32"
                      height="32"
                    />
                  </div> */}
                    <div className="company text-center">
                      JD Hilditch
                      <br />
                      CEO/Director of Marketing Voyage Media Works
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
                Want to see more success stories?{" "}
              </a>
              <sub className="block text-[0.875rem] leading-5 pt-2 border-0 m-0 p-0 align-baseline font-poppins ">
                Chect out our Case Studies.
              </sub>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionEight;
