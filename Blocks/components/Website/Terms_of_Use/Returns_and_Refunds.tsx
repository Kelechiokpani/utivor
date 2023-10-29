import React from "react";
import {Header_Top} from "../../../ReusedComponent/Text_Typography";

const Returns_and_Refunds_Items = [
  `All sales are final! As a result, KreativeRock does not offer returns and 
   does not accept returns. We will however advise the users to use any other 
   service that we offer within the set-fee they seek refund for.
  `,
];

const Returns_and_Refunds = () => {
  return (
    <div className="mb-6 pt-4 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="lg:px-4">
        <Header_Top label="Listing Terms" className="uppercase mb-4" />

        <p>You acknowledge and agree that:</p>

        <ul className="ml-4">
          {Returns_and_Refunds_Items.map((item, idx) => (
            <li key={idx} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Returns_and_Refunds;
