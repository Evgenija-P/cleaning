import { Affirmative, Calendar, Move } from "../icons";
import AdvantagesItem from "./advantagesItem";

const ADVANTAGES_ELEMENTS = [
  {
    id: "1",
    title: "Move Out Cleaning",
    text: "Our services go beyond the Cleaning will reenergize your home and our of enhance in the most important your life.",
    icon: <Move />,
    color: "orange",
  },
  {
    id: "2",
    title: "Regular & Monthly Cleaning",
    text: "Our services go beyond the Cleaning will reenergize your home and our of enhance in the most important your life.",
    icon: <Calendar />,
    color: "green",
  },
  {
    id: "3",
    title: "Customer Focused Reviews",
    text: "Our services go beyond the Cleaning will reenergize your home and our of enhance in the most important your life.",
    icon: <Affirmative />,
    color: "yellow",
  },
];

const Advantages = () => {
  return (
    <ul className="flex flex-col gap-y-10 mt-[58px]">
      {ADVANTAGES_ELEMENTS.map((item) => (
        <AdvantagesItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default Advantages;
