import React, { useState } from "react";

const AppBar = () => {
  const [toggle,setToggle]=useState(true)
  const toggleHandler=()=>{
    setToggle(!toggle)
  }
  return (
    // block
    <>
  {toggle &&  <div
      className=" flex justify-between  flex-col sm:flex-row 
    mx-0 p-6 size-full  relative h-auto   transition-all duration-300 ease-in-out bg-[#0fd03b] "
    >
      <div className="flex items-center max-sm:m-auto">
        <div
          className="h-10 w-10 mr-6 bg-center bg-no-repeat bg-cover rounded-full max-sm:hidden"
          style={{
            backgroundImage:
              'url("https://www.brightlocal.com/wp-content/themes/brig…2023/dist/images/icons-2023/header/icon-promo.svg")',
            backgroundColor: "white",
          }}
        ></div>

        <div className=" border-0 m-0 p-0 align-baseline text-center ">
          <h3 className="before:block before:h-0 before:-mt-1 before:w-0 font-bold mb-2 text-lg md:text-left sm:text-center">
            GOOGLE ANALYTICS 4: ESSENTIALS FOR LOCAL SEO
          </h3>
          <p className="text-pretty font-poppins m-0 p-0 break-normal hyphens-manual text-base md:text-left sm:text-center">
            Enroll in BrightLocal Academy's new, free video course
          </p>
        </div>
      </div>
      <div className=" flex max-sm:m-auto   items-center border-0 m-0 p-0  align-baseline box-border relative">
        <button className="min-[820px]:ml-2 bg-[#fff] text-sm whitespace-nowrap  items-center border-2 border-solid border-[#252525] rounded-[130px] shadow-[0_4px_0_#252525] inline-flex flex-wrap font-poppins font-semibold justify-center mt-2 opacity-100 overflow-hidden px-4 py-2  relative text-center no-underline cursor-pointer hover:duration-300 max-sm:mt-4 hover:mt-3 hover:shadow-none">
          START TODAY
        </button>
        <button onClick={toggleHandler} className="bg-transparent ml-2  text-[#fff]  rounded-[130px] whitespace-nowrap text-sm max-[968px]:w-auto items-center border-2 border-solid border-[#fff] shadow-[0_4px_0_#252525]  inline-flex flex-wrap font-poppins font-semibold justify-center mt-2 opacity-100 overflow-hidden px-4 py-2   relative text-center no-underline cursor-pointer hover:duration-300 max-sm:mt-4 hover:mt-3 hover:shadow-none">
          Close
        </button>
      </div>
    </div>}
    </>
  );
        
};

export default AppBar;


// import React from "react";

// const AppBar = () => {
//   return (
//     <div className="flex justify-between flex-col sm:flex-row mx-0 p-6 size-full relative h-auto  transition-all duration-300 ease-in-out bg-[#0fd03b]">
//       <div className="flex items-center max-sm:m-auto">
//         <div
//           className="h-10 w-10 mr-6 bg-center bg-no-repeat bg-cover rounded-full max-sm:hidden"
//           style={{
//             backgroundImage:
//               'url("https://www.brightlocal.com/wp-content/themes/brig…2023/dist/images/icons-2023/header/icon-promo.svg")',
//             backgroundColor: "white",
//           }}
//         ></div>

//         <div className="border-0 m-0 p-0 align-baseline text-center">
//           <h3 className="before:block before:h-0 before:-mt-1 before:w-0 font-bold mb-2 text-lg md:text-left sm:text-center">
//             GOOGLE ANALYTICS 4: ESSENTIALS FOR LOCAL SEO
//           </h3>
//           <p className="text-pretty font-poppins m-0 p-0 break-normal hyphens-manual text-base md:text-left sm:text-center">
//             Enroll in BrightLocal Academy's new, free video course
//           </p>
//         </div>
//       </div>
//       <div className="flex max-sm:mx-auto max-sm:my-0 max-sm:items-center max-sm:p-2 max-sm:box-border  items-center border-2 m-0 p-0 align-baseline box-border relative">
//         <button
//           className="min-[820px]:ml-2 bg-[#fff] text-sm whitespace-nowrap items-center border-2 border-solid border-[#252525] rounded-[130px] shadow-[0_4px_0_#252525] inline-flex flex-wrap font-poppins font-semibold justify-center mt-2 opacity-100 overflow-hidden px-4 py-2 max-sm:py-2 max-sm:px-2 max-sm:mt-4 max-sm:hover:mt-3 relative text-center no-underline cursor-pointer hover:duration-300 hover:mt-3  hover:shadow-none"
         
//         >
//           START TODAY
//         </button>
//         <button
//           className="bg-transparent ml-2 text-[#fff] rounded-[130px] whitespace-nowrap text-sm max-[968px]:w-auto items-center border-2 border-solid border-[#fff] shadow-[0_4px_0_#252525] inline-flex flex-wrap font-poppins font-semibold justify-center mt-2 opacity-100 overflow-hidden px-4 py-2 max-sm:py-2 max-sm:px-2 max-sm:mt-4 max-sm:hover:mt-3 relative text-center no-underline cursor-pointer hover:duration-300 hover:mt-3 hover:shadow-none"
      
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AppBar;

