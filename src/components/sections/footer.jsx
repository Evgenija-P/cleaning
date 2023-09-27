import FooterLincsList from "../footerLincsList";
import SocIconsList from "../socIconsList";
import logoKiwiCode from "../../images/kiwicode_white.png";

const Footer = () => {
  return (
    <section className="bg-bgHero relative">
      <div className="mx-auto container py-[120px] relative px-[100px]">
        <ul className="flex gap-x-[100px] h-[120px] items-start justify-between">
          <li className="flex flex-col justify-between gap-y-5">
            <p className="w-[400px] text-2xl text-footerGrey">
              Our services go beyond the basic services reenergize your home.
            </p>
            <SocIconsList />
          </li>
          <li>
            <FooterLincsList />
          </li>
        </ul>
        <ul className="w-[90%] flex justify-between absolute bottom-0 pb-5">
          <li>
            <p className="absolute bottom-4 text-footerGrey">© Copyright 2022 by Ranu Hasan</p>
          </li>
          <li className="flex gap-x-4 flex-col lg:flex-row h-[55px] items-center justify-center absolute bottom-4 right-0">
            <p className="text-base text-txt-main-white opacity-[0.6] text-center">Designed and Development by</p>
            <a href="#">
              <img src={logoKiwiCode} alt="Logo KiwiCode Solution" className="h-[80px]" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
