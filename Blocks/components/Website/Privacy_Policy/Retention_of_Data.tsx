import React from "react";
import {Header_Span} from "../../../ReusedComponent/Text_Typography";

const listItems = [
  `Whether we have a legal or contractual need to retain the data.`,
  `Whether the data is necessary to provide our Service.`,
  `Whether our Subscribers have the ability to access and delete the data within their KreativeRock accounts.`,
  `Whether our Subscribers would reasonably expect that we would retain the data until they remove it or until their KreativeRock accounts are closed or terminated.`,
];

const Retention_of_Data = () => {
  return (
    <div className="mb-6 pt-4 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="lg:px-4">
        <Header_Span
          label="6.4. Retention of Data"
          className="uppercase mb-3"
        />
        <p>
          We retain Personal Information where we have an ongoing legitimate
          business or legal need to do so. Our retention periods will vary
          depending on the type of data involved, but, generally, we'll refer to
          these criteria in order to determine retention period:
        </p>

        <ul className="ml-4">
          {listItems.map((item, idx) => (
            <li key={idx} className="mb-2">
              {item}
            </li>
          ))}
        </ul>

        <p>
          When we have no ongoing legitimate business need to process your
          Personal Information, we will either delete or anonymize it or, if
          this is not possible (for example, because your Personal Information
          has been stored in backup archives), then we will securely store your
          Personal Information and isolate it from any further processing until
          deletion is possible.
        </p>
      </div>
    </div>
  );
};

export default Retention_of_Data;
