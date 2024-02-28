import React from "react";
import "./section.css";

const SectionFour = () => {
  return (
    <section className="pt-8 max-sm:pb-24 pl-8 pr-8 relative scroll-m-[73px] block mt-32">
      <div className="grid gap-x-16 gap-y-8 items-center mx-auto my-0 grid-cols-12 max-w-[1152px]">
        <div className="twi grid items-center self-center col-span-6  align-baseline">
          <div className="text-container ">
            <div className="gm-header text-left">
              <h2 className="text-pretty hyphens-manual font-poppins font-semibold block mt-3 mb-2 ml-0 mr-0 custom-before text-custom">
                Tired of guessing how to improve local rankings?
              </h2>
              <div className="text-inner text-left pt-2">
                <p className="font-normal whitespace-normal break-words hyphens-manual text-[1rem] leading-6 mt-4 mb-3 font-poppins">
                  You’re a marketer, agency owner, or local business owner. You
                  don’t have time to manually do a laundry list of things that{" "}
                  <em>might</em> improve your rankings.
                </p>
                <p className="font-normal pt-2 text-[1rem] leading-6 hyphens-manual whitespace-normal break-words mt-4 mb-4 font-poppins">
                  Instead, you want to know the immediate actions you can take
                  to drive results.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="twi grid items-center self-center col-span-6 align-baseline">
            <div className="">
            <img src="/assets/images/ranking.svg" alt="ranking"/>

            </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
