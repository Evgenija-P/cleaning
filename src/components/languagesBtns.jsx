import { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguagesBtns = () => {
  const { i18n } = useTranslation();
  const [isOpenLangBtns, setIsOpenLangBtns] = useState(false);

  return (
    <div className="w-[80px] relative">
      <button
        onMouseOver={() => setIsOpenLangBtns(true)}
        onMouseLeave={() => setIsOpenLangBtns(false)}
        className="w-full uppercase cursor-pointer font-semibold text-lg mx-auto px-2"
      >
        {i18n.language}
      </button>

      {isOpenLangBtns && (
        <div
          onMouseLeave={() => setIsOpenLangBtns(false)}
          onMouseOver={() => setIsOpenLangBtns(true)}
          className="w-[60px] flex flex-col gap-y-2 absolute top-[25px] bg-bgHero p-2 rounded-md shadow-md z-20"
        >
          <button
            className={`cursor-pointer font-semibold text-main text-opacity-80  hover:text-opacity-100 hover:text-orange text-lg`}
            aria-label="Ukrainian switch button"
            onClick={() => i18n.changeLanguage("ua")}
          >
            UA
          </button>
          <div className="w-full h-[2px] bg-blue rounded-sm" />
          <button
            className={`cursor-pointer font-semibold text-main text-opacity-80  hover:text-opacity-100 hover:text-orange text-lg`}
            aria-label="English switch button"
            onClick={() => i18n.changeLanguage("en")}
          >
            EN
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguagesBtns;
