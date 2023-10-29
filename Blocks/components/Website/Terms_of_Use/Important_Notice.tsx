import React from "react";
import {Header_Top} from "../../../ReusedComponent/Text_Typography";

const Important_Notice = () => {
  return (
    <div className="mb-6 pt-4 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="lg:px-4">
        <Header_Top label="Important Notice" className="uppercase mb-4" />
        <p>
          If you are not yet 18 years old, you must obtain your parents’ or
          legal guardians’ consent and permission to be bound by the terms of
          our Site prior to you using any aspect of our services listed on the
          Site. To use our texting system, you must be duly registered
          organization operating your business from the counties that our
          texting system covers to have access to local rates in those
          countries.{" "}
        </p>
      </div>
    </div>
  );
};

export default Important_Notice;
