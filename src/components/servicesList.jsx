import { useState } from "react";
import { useTranslation } from "react-i18next";
import data from "../data/services.json";
import Button from "./UX/buttons";
import ServiceItem from "./serviceItem";

const ServicesList = () => {
  const { t } = useTranslation();
  const [isShowAllServices, setIsShowAllServices] = useState(false);

  return (
    <>
      <div className="grid grid-cols-3 gap-8 mt-[78px]">
        {!isShowAllServices
          ? data.slice(0, 3).map((item) => <ServiceItem item={item} key={item.id} />)
          : data.map((item) => <ServiceItem item={item} key={item.id} />)}
      </div>
      <div className="mt-[60px]">
        {isShowAllServices ? (
          <Button style={"regular"} btnClass={"mx-auto"} clickFn={() => setIsShowAllServices(!isShowAllServices)}>
            {t(`service.btn_close`)}
          </Button>
        ) : (
          <Button style={"regular"} btnClass={"mx-auto"} clickFn={() => setIsShowAllServices(!isShowAllServices)}>
            {t(`service.btn_open`)}
          </Button>
        )}
      </div>
    </>
  );
};

export default ServicesList;
