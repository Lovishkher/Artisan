import Link from "next/link";
/* eslint-disable react/no-unescaped-entities */

const FooterComponent = () => {
  return (
    <footer className="sm:h-screen overflow-hidden py-24 bg-black">
      <div
        id="container"
        className=" px-6 sm:px-24 overflow-hidden w-full h-full"
      >
        <div className="w-full h-full justify-center items-center flex flex-col mb-6 sm:mb-0">
          <p className="font-bebas leading-none text-white text-[12vw] leading-none">
            Let's talk{" "}
          </p>
          <ul className="flex justify-center sm:flex-row items-center sm:gap-6">
            <li className="flex gap-3 border-2 border-white hover:bg-white text-white hover:text-black duration-300 mx-3 rounded-full px-3 py-1">
              <Link href="https://wa.me/+919855512434" target="_blank">
                Whatsapp
              </Link>
            </li>
            <li className="flex gap-3 border-2 border-white hover:bg-white text-white hover:text-black duration-300 mx-3 rounded-full px-3 py-1">
              <Link href="https://www.facebook.com/house.interior.design.596208?mibextid=ZbWKwL" target="_blank">
                Facebook
              </Link>
            </li>
            <li className="flex gap-3 border-2 border-white hover:bg-white text-white hover:text-black duration-300 mx-3 rounded-full px-3 py-1">
              <Link href="https://www.instagram.com/interiordesignmag?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
