import CountUp from "react-countup";
import { useTranslation } from "react-i18next";

const INDICATORS = [
  { value: "345", id: "1" },
  { value: "1450", id: "2" },
  { value: "100", id: "3" },
  { value: "40", id: "4" },
];

const IndicatorsList = () => {
  const { t } = useTranslation();
  return (
    <ul className="w-[730px] md:w-full flex gap-x-[60px] mt-[92px] mb-[91px]">
      {INDICATORS.map(({ value, id }) => (
        <li key={value} className="flex flex-col gap-y-3 text-center">
          <p className="text-4xl font-bold">
            <CountUp end={value} />+
          </p>

          <p className="text-xl">{t(`category.${id - 1}`)}</p>
        </li>
      ))}
    </ul>
  );
};

export default IndicatorsList;
