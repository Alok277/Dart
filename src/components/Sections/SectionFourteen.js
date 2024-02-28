import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoPeopleCircle } from "react-icons/io5";

const SectionFourteen = () => {
  return (
    <section className="bg-[#e7faeb] grid my-0 mx-auto pb-24 pt-24 mt-12">
      <div className="col-start-1 col-end-9 flex items-start pr-12 gap-8">
        <img
          width="200"
          height="100"
          src="https://www.brightlocal.com/wp-content/uploads/2023/09/GLOBEY-MAILPERSON.png"
          className=""
          alt="Globey Mailperson"
          decoding="async"
          loading="lazy"
          srcset="https://www.brightlocal.com/wp-content/uploads/2023/09/GLOBEY-MAILPERSON-145x120.png 145w, https://www.brightlocal.com/wp-content/uploads/2023/09/GLOBEY-MAILPERSON-181x150.png 181w, https://www.brightlocal.com/wp-content/uploads/2023/09/GLOBEY-MAILPERSON.png 283w"
          sizes="(max-width: 283px) 100vw, 283px"
        />
        <div className="text-left ">
          <h2 className="text-pretty font-poppins none-h2 ">
            Sign Up For Our
            <br /> Newsletter
          </h2>
          <div className="text-left">
            <p className="mb-0 pb-0 text-[1.5rem] inline-block text-pretty font-poppins font-normal leading-6 relative">
              <b>Join 55,000+ savvy marketers</b>
            </p>
          </div>
          <div className="text-left pt-8">
            <p className="mb-0 pb-0 text-[1.1rem] inline-block text-pretty font-poppins font-normal leading-5 relative">
              Get the latest local SEO news, research, and tactical advice sent
              to your inbox.
            </p>
          </div>
        </div>
      </div>

      <div className="col-start-10 col-end-13">
        <h2 className="text-pretty font-poppins font-semibold text-left text-[1.5rem] pb-4">
          Facebook Community
        </h2>
        <img
          width="300"
          height="250"
          src="https://www.brightlocal.com/wp-content/uploads/2024/01/fb-group-local-pack-Email-header.svg"
          class=""
          alt="Fb Group Local Pack Email Header"
          decoding="async"
          loading="lazy"
        />
        <h2 className="text-pretty font-poppins font-semibold text-left text-[1.5rem] pb-4">
          Connect With Us
        </h2>
        <div className="flex gap-2 ">
          <a
            href="https://twitter.com/brightlocal"
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter"
            className="text-[2rem]"
          >
            <i class="icon-twitter"><FaSquareXTwitter /></i>
          </a>
          <a
            href="https://www.facebook.com/brightlocal/"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
            className="text-[2rem]"
          >
            <i class="icon-facebook"><FaFacebook/></i>
          </a>
          <a
            href="https://www.linkedin.com/company/bright-local-seo"
            target="_blank"
            rel="noopener noreferrer"
            title="Linkedin"
            className="text-[2rem]"
          >
            <i className="icon-linkedin"><FaLinkedin/></i>
          </a>
          <a
            href="https://www.instagram.com/brightlocal/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="text-[2rem]"
          >
            <i class="icon-instagram"><FaInstagramSquare/></i>
          </a>
          <a
            href="https://www.youtube.com/user/BrightLocalSEO"
            target="_blank"
            rel="noopener noreferrer"
            title="YouTube"
            className="text-[2rem]"
          >
            <i class="icon-youtube"><FaYoutube/></i>
          </a>
          
          <a href="https://www.facebook.com/groups/thelocalpack" className="text-[2rem]" target="_blank" rel="noopener noreferrer" title="The Local Pack">
<i class="icon-localpack"><IoPeopleCircle/></i>
</a>
          
        </div>
      </div>
    </section>
  );
};

export default SectionFourteen;
