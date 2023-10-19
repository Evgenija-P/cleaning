import { Affirmative, Calendar, Move } from "../icons";
import AdvantagesItem from "./advantagesItem";

const ADVANTAGES_ELEMENTS = [
  {
    id: "1",
    icon: <Move />,
    color: "orange",
  },
  {
    id: "2",
    icon: <Calendar />,
    color: "green",
  },
  {
    id: "3",
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
