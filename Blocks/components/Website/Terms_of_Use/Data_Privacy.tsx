import React from "react";
import { Header_Top } from "../../ReusedComponent/Text_Typography";

const Data_Privacy_Items = [
  `End-Users agree to processing of their personal data in accordance with the 
   prompt to complete transaction, submit enquiries or request a quote.`,

  `KreativeRock shall process all personal data obtained from registering on 
   the website, submitting and enquiry, initiating a transaction or by using 
   the website in accordance with the terms of engagement and shall only use 
   these personal data for marketing communications purposes only.`,
];

const Data_Privacy = () => {
  return (
    <div className="mb-6 pt-4 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="lg:px-4">
        <Header_Top label="Data Privacy" className="uppercase mb-4" />

        <p>You acknowledge and agree that:</p>

        <ul className="ml-4">
          {Data_Privacy_Items.map((item, idx) => (
            <li key={idx} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Data_Privacy;
