import { Call } from "../../icons";
import NavBar from "../navBar";

const Header = () => {
  return (
    <section className="py-8 container mx-auto">
      <div className="flex gap-x-[195px] items-center">
        <NavBar />
        <div className="flex items-center justify-center gap-x-3">
          <div className="rounded-full w-8 h-8 border-blue border-[1px] flex items-center justify-center">
            <Call />
          </div>
          <ul className="flex flex-col">
            <li className="text-base">Call us now</li>
            <li className="text-lg">
              <a href="tel:+1 (243) 421 4121">+1 (243) 421 4121</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Header;
