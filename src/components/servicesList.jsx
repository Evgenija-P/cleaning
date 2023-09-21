import { useState } from "react";
import data from "../data/services.json";
import Button from "./UX/buttons";
import ServiceItem from "./serviceItem";

const ServicesList = () => {
  const [isShowAllServices, setIsShowAllServices] = useState(false);

  return (
    <>
      <div className="grid grid-cols-3 gap-8 mt-[78px]">
        {data.slice(0, 3).map((item) => (
          <ServiceItem item={item} key={item.id} />
        ))}
      </div>
      <div className="mt-[60px]">
        {isShowAllServices ? (
          <Button btnClass={"mx-auto"} clickFn={() => setIsShowAllServices(!isShowAllServices)}>
            Close All Service
          </Button>
        ) : (
          <Button btnClass={"mx-auto"} clickFn={() => setIsShowAllServices(!isShowAllServices)}>
            All Service
          </Button>
        )}
      </div>
    </>
  );
};

export default ServicesList;
