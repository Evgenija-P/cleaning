import CountUp from "react-countup";

const INDICATORS = [
  { value: "345", category: "Project Done" },
  { value: "1450", category: "Satisfied Clients" },
  { value: "100", category: "Awards Winner" },
  { value: "40", category: "Team Members" },
];

const IndicatorsList = () => {
  return (
    <ul className="w-[730px] md:w-full flex gap-x-[60px] mt-[92px] mb-[91px]">
      {INDICATORS.map(({ value, category }) => (
        <li key={value} className="flex flex-col gap-y-3 text-center">
          <p className="text-4xl font-bold">
            <CountUp end={value} />+
          </p>

          <p className="text-xl">{category}</p>
        </li>
      ))}
    </ul>
  );
};

export default IndicatorsList;
