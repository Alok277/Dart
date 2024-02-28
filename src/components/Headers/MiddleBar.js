import React from "react";

const MiddleBar = () => {
  return (
    <div className="max-md:flex  bg-[#fefbf6] border-b-[1px] border-t-[1px] border-solid border-[#252525] m-0 p-0 align-baseline text-[#252525]">
      <ul className="flex justify-between w-full">
        <li className="mr-auto ml-3">
          <a href="http://www.w3.org/2000/svg">
            <div className=" inline-flex items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2rem"
                height="2rem"
                viewBox="0 0 64 64"
                className="my-1"
              >
                <path
                  fill="#1b75bb"
                  d="M54 10H10C3.373 10 0 14.925 0 21v11h64V21c0-6.075-3.373-11-10-11"
                ></path>
                <path
                  fill="#f9cb38"
                  d="M0 43c0 6.075 3.373 11 10 11h44c6.627 0 10-4.925 10-11V32H0z"
                ></path>
              </svg>
              <span className="ml-2 font-poppins text-sm align-middle font-semibold m-0 p-0">
                We stand with Ukraine
              </span>
            </div>
          </a>
        </li>
        <li className="flex items-right m-0 p-0 align-baseline cursor-pointer">
          <a
            href="http://www.w3.org/2000/svg"
            className="hover:bg-[#0fd03b] border-l border-solid border-[#252525]   block text-[12px] font-normal tracking-wide uppercase px-3 py-1  opacity-100 decoration-none no-underline flex items-center"
          >
            <span className="mx-auto">BRIGHTLOCAL ACADEMY</span>
          </a>
        </li>
        <li className="flex">
          <a
            className=" hover:bg-[#0fd03b] border-l border-solid border-[#252525]  block text-[12px] font-normal tracking-wide uppercase px-3 py-1  opacity-100 decoration-none no-underline flex items-center"
            href="http://www.w3.org/2000/svg"
          >
            <span className="mx-auto">HELP CENTER</span>
          </a>
        </li>
        <li className="flex ">
          <a
            className=" hover:bg-[#0fd03b] border-l border-solid border-[#252525]  block text-[12px] font-normal tracking-wide uppercase px-3 py-1  opacity-100 decoration-none no-underline flex items-center"
            href="http://www.w3.org/2000/svg"
          >
            <span className="mx-auto">CONTACT SUPPORT</span>
          </a>
        </li>
        <li className="flex">
          <a
            className=" hover:bg-[#0fd03b] border-l border-r border-solid border-[#252525] inline-block block text-[12px] font-normal tracking-wide uppercase px-3 py-1  opacity-100 decoration-none no-underline flex items-center"
            href="http://www.w3.org/2000/svg"
          >
            <span className="mx-auto">LOGIN</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MiddleBar;
