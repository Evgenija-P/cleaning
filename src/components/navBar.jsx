import { Logo } from "../icons";
import { useTranslation } from "react-i18next";

const NAV_ELEMENTS = [
  { id: "1", linkId: "#about" },
  { id: "2", linkId: "#services" },
  { id: "3", linkId: "#price" },
  { id: "4", linkId: "#testimonials" },
  { id: "5", linkId: "#contact" },
];

const NavBar = () => {
  const { t } = useTranslation();
  return (
    <nav className="flex gap-x-[280px] items-center">
      <Logo />
      <ul className="flex gap-x-8 text-lg text-main text-opacity-80 w-[565px] justify-between">
        {NAV_ELEMENTS.map((el) => (
          <li key={el.id}>
            <a href={el.linkId} className="cursor-pointer font-semibold hover:text-opacity-100 hover:text-orange">
              {t(`nav.${el.id - 1}`)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
