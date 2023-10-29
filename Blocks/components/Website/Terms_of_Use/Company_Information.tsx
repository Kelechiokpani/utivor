import React from "react";
import {Header_Top} from "../../../ReusedComponent/Text_Typography";

const email = "info@kreativerock.com";

const Company_Information = () => {
  return (
    <div className="mb-6 pt-4 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="lg:px-4">
        <Header_Top label="Company Information" className="uppercase mb-4" />
        <p>
          This Site is run by KreativeRock Digital Limited, based in Nigeria
          (West Africa). We are a private company incorporated in accordance
          with the laws of the Federal Republic of Nigeria with registration
          number RC 1441363. We are VAT registered.
        </p>

        <p>
          KreativeRock operates from 77 Ojuelegba Road Surulere, Lagos State,
          Nigeria.
        </p>

        <p>Telephone: +234.809.420.0003, +234.806.370.3219</p>

        <p>
          <a href={`mailto:${email}`}>{email}</a>
          <a href="www.kreativerock.com">www.kreativerock.com</a>
        </p>

        <p>Website: www.kreativerock.com</p>
      </div>
    </div>
  );
};

export default Company_Information;
