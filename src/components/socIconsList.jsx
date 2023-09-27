import * as icons from "../icons";

const SOCITEMS = [
  { id: "1", Icon: icons.Fb, href: "#" },
  { id: "3", Icon: icons.Twitter, href: "#" },
  { id: "4", Icon: icons.Inst, href: "#" },
  { id: "5", Icon: icons.LinkId, href: "#" },
];

const SocIconsList = () => {
  return (
    <ul className="flex gap-x-6 justify-between items-center w-[200px]">
      {SOCITEMS.map(({ id, href, Icon }) => (
        <li key={id}>
          <a href={href} rel="noreferrer" className="socList__linc">
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocIconsList;
