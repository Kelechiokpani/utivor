import React from "react";
import { Header_Top } from "../../ReusedComponent/Text_Typography";

const Listing_Terms_Items = [
  `You will undergo the process of filling the questionnaire set-up form with 
   true and accurate details of your project.
  `,

  `You must use the published items for the sole purpose it was approved 
   only.`,

  `After a short code or long number has been assigned to you, you will only 
   use the code for the purpose it is meant for.`,

  `That all participants will get value for a promise made to them. And this 
   promise has to be fulfilled and born by you.`,
];

const Listing_Terms = () => {
  return (
    <div className="mb-6 pt-4 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="lg:px-4">
        <Header_Top label="Listing Terms" className="uppercase mb-4" />

        <p>You acknowledge and agree that:</p>

        <ul className="ml-4">
          {Listing_Terms_Items.map((item, idx) => (
            <li key={idx} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Listing_Terms;
