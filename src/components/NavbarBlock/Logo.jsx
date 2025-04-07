import React from "react";
import AuraBeatsLogo from "../../assets/AuraBeatsLogo.png";

const Logo = () => {
  return (
    <aside className="basis-[15%]">
      <figure className="w-full h-full flex justify-center items-center">
        <img
          src={AuraBeatsLogo}
          alt="AuraBeatsLogo"
          className="w-[100px] h-[60px]"
        />
      </figure>
    </aside>
  );
};

export default Logo;