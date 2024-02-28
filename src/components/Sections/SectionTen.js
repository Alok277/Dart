import React from "react";

const SectionTen = () => {
  return (
    <section className="pt-8 max-sm:pb-24 pl-8 pr-8 relative scroll-m-[73px] block mt-32 ">
      <div className="grid gap-x-16 gap-y-8 items-center mx-auto my-0 grid-cols-12 max-w-[1152px]">
        <div className="twi grid items-center self-center col-span-6 align-baseline">
          <div className="">
            <img
              class="img-respond"
              src="https://www.brightlocal.com/wp-content/uploads/2023/12/09-book-a-demo-1.svg"
              alt="ten"
            />
          </div>
        </div>
        <div className="twi grid items-center self-center col-span-6  align-baseline">
          <div className="text-container ">
            <div className="gm-header text-left">
              <h2 className="text-wrap hyphens-manual font-poppins font-semibold block mt-3 mb-1 ml-0 mr-0 custom-before text-custom">
                Need help? Our local search experts are here to support you
              </h2>
              <div className="text-inner text-left pt-2">
                <p className="font-normal whitespace-normal break-words hyphens-manual text-[1rem] leading-6 mt-4 mb-2 font-poppins">
                  Whether you’re a multi-location brand, a scaling agency, or
                  opening your first location, our team of local experts are on
                  hand to support you.
                </p>
                {/* <p className="font-normal pt-2 text-[1rem] leading-6 hyphens-manual whitespace-normal break-words mt-4 mb-2 font-poppins">
              They might show you where you rank generally, but not why—in specific locations—and point out the actions you need to take to improve.
              </p>
              <p className="font-bold pt-2 text-[1rem] leading-6 hyphens-manual whitespace-normal break-words mt-4 mb-2 font-poppins">
              Traditional SEO tools:
              </p> */}
                <ul className="list-disc  pl-6">
                  <li className="font-normal pt-2 text-[1rem] leading-6 hyphens-manual whitespace-normal break-words mt-4 mb-2 font-poppins">
                    Free local SEO training
                  </li>
                  <li className="font-normal pt-2 text-[1rem] leading-6 hyphens-manual whitespace-normal break-words mt-4 mb-2 font-poppins">
                    Live chat support 23 hours a day
                  </li>
                  <li className="font-normal pt-2 text-[1rem] leading-6 hyphens-manual whitespace-normal break-words mt-4 mb-2 font-poppins">
                    <a href="https://www.brightlocal.com/book-a-demo/">
                      {" "}
                      Unlimited demos
                    </a>
                    and walkthroughs
                  </li>
                  <li className="font-normal pt-2 text-[1rem] leading-6 hyphens-manual whitespace-normal break-words mt-4 mb-2 font-poppins">
                    Done-for-you listing migration services
                  </li>
                </ul>
              </div>
              <div className="cd-cta-global m-2">
                <div className="block text-left gap-4 pb-6 h-20">
                  <div className="inline-block  text-center ">
                    <a
                      href="https://www.brightlocal.com/small-businesses/"
                      title="Are you a small local business looking to rank higher?"
                      target=""
                      role="button"
                      className="cta button button-subheading-outer  white bg-[#fff] transition-all text-pretty items-center border-2 border-solid border-[#252525] rounded-[130px] shadow-[0_4px_0_#252525] inline-flex flex-wrap font-poppins text-[1.125rem] font-semibold justify-center mt-2 leading-5 opacity-100 overflow-hidden px-3 py-4 relative text-center translate-y-[-4px] cursor-pointer hover:duration-300 max-sm:mt-4  hover:shadow-none  "
                    >
                      Talk to a local search expert today{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTen;
