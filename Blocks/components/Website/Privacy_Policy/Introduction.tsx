import React from "react";
import {Header_Span} from "../../../ReusedComponent/Text_Typography";

const Introduction = () => {
  return (
    <div className="mb-6 pt-4 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="lg:px-4">
        <Header_Span label="1. Introduction" className="uppercase mb-3" />
        <p>
          KreativeRock Digital Limited (hereinafter referred to as
          “KreativeRock”) is a complete marketing management company employing
          the use of technology to create innovative business solutions and
          advancement across all sectors and help to position brands for
          sustained business growth.
        </p>

        <p>
          Services provided in KreativeRock Digital Limited include mobile
          texting solutions; digital marketing solutions; brand management and
          email signature management. It is therefore important that the policy
          statement is read thoroughly by users of the platform.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
