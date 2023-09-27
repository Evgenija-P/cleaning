const LINCS = [
  { id: "2", name: "Our Services", href: "#services" },
  { id: "1", name: "About", href: "#about" },
  { id: "6", name: "How We Work", href: "#how" },
  { id: "3", name: "Contact Us", href: "#contact" },

  { id: "4", name: "Pricing", href: "#price" },
  { id: "7", name: "Testimonials", href: "#testimonials" },
  { id: "8", name: "Why We", href: "#why" },
  { id: "5", name: "FAQ", href: "#faq" },
];

const FooterLincsList = () => {
  return (
    <ul className="grid grid-cols-4 gap-y-3 gap-x-8 justify-between h-full">
      {LINCS.map((el) => (
        <li key={el.id} className="text-xl text-footerGrey leading-[1.7] hover:text-darkOrange cursor-pointer">
          {el.name}
        </li>
      ))}
    </ul>
  );
};

export default FooterLincsList;
