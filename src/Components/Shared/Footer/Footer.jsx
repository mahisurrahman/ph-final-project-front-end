import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className="h-[400px] bg-[#111827] w-full flex justify-center">
        <div className="h-full bg-[#1F2937] w-full">
          <div className="flex flex-col justify-center py-28 font-font-inter text-center">
            <h1 className="uppercase text-2xl text-white font-normal ">
              Contact US
            </h1>
            <p className="text-white ">
              123 ABS Street, Uni 21, Bangladesh <br /> +88 123456789 <br /> Mon
              - Fri: 08:00 - 22:00 <br /> Sat - Sun: 10:00 - 23:00
            </p>
          </div>
        </div>
        <div className="h-full w-full">
          <div className="flex flex-col justify-center py-28 font-font-inter text-center">
            <h1 className="uppercase text-2xl text-white font-normal ">
              Follow Us
            </h1>
            <p className="text-white my-5">Join Us on Social Media</p>
            <div className="flex gap-6 justify-center items-center text-2xl text-white my-5">
              <FaFacebookF className="hover:cursor-pointer hover:text-yellow-500 hover:duration-700"></FaFacebookF>
              <FaInstagram className="hover:cursor-pointer hover:text-yellow-500 hover:duration-700"></FaInstagram>
              <FaTwitter className="hover:cursor-pointer hover:text-yellow-500 hover:duration-700"></FaTwitter>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#151515] text-white text-center py-2">
        <p className="font-font-inter">Copyright © CulinaryCloud. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
