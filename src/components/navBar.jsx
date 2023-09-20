import { Logo } from "../icons";

const NAV_ELEMENTS = [
  { name: "Home", linkId: "#home" },
  { name: "About", linkId: "#about" },
  { name: "Services", linkId: "#services" },
  { name: "Blog", linkId: "#blog" },
  { name: "Testimonials", linkId: "#testimonials" },
  { name: "Contact", linkId: "#contact" },
];

const NavBar = () => {
  return (
    <nav className="flex gap-x-[280px] items-center">
      <Logo />
      <ul className="flex gap-x-8 text-lg text-main text-opacity-80 w-[565px] justify-between">
        {NAV_ELEMENTS.map((el) => (
          <li key={el.name}>
            <a href={el.linkId} className="cursor-pointer hover:text-opacity-100 hover:font-semibold">
              {el.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
