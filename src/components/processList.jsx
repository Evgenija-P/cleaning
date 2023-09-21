import data from "../data/process.json";
import ProcessItem from "./processItem";

const ProcessList = () => {
  return (
    <div className="flex">
      {data.map((item) => (
        <ProcessItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ProcessList;
