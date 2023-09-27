import SocIconsList from "../socIconsList";

const Footer = () => {
  return (
    <section className="bg-bgHero">
      <div className="min-h-[482px] mx-auto container py-[120px] relative">
        <ul>
          <li className="flex flex-col">
            <p>Our services go beyond the basic services reenergize your home.</p>
            <SocIconsList />
          </li>
          <li>Lincs</li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
