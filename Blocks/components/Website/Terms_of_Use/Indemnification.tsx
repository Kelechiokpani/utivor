import React from "react";
import {Header_Top} from "../../../ReusedComponent/Text_Typography";

const Indemnification_Items = [
  `Any and all losses, damages, costs, liabilities and expenses (including 
   without limitation legal expenses and any amounts paid by us to any third 
   party in settlement of a claim or dispute) incurred or suffered by us and 
   arising directly or indirectly out of your use of our platform or any 
   breach by you of any provision of these general terms and conditions or 
   the KreativeRock codes, policies or guidelines; and`,

  `Any VAT liability or other tax liability that we may incur in relation to 
   any sale, supply or purchase made through our website, where that liability 
   arises out of your failure to pay, withhold, declare or register to pay any 
   VAT or other tax properly due in any jurisdiction.`,
];

const Indemnification = () => {
  return (
    <div className="mb-6 pt-4 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="lg:px-4">
        <Header_Top label="Indemnification" className="uppercase mb-4" />

        <p>
          You hereby indemnify us, and undertake to keep us indemnified,
          against:
        </p>

        <ul className="ml-4 mb-4">
          {Indemnification_Items.map((item, idx) => (
            <li key={idx} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Indemnification;
