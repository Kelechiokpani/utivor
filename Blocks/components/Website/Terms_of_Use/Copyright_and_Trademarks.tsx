import React from "react";
import { Header_Top } from "../../ReusedComponent/Text_Typography";

const Copyright_and_Trademarks_Items = [
  `We, together with our licensors, own and control all the copyright and 
   other intellectual property rights in our website and the material on our 
   website; and`,

  `All the copyright and other intellectual property rights in our website and 
   the material on our website are reserved.`,

  `KreativeRock’s logos and our other registered and unregistered trademarks 
   are trademarks belonging to us; we give no permission for the use of these 
   trademarks, and such use may constitute an infringement of our rights.`,

  `The third party registered and unregistered trademarks or service marks on 
   our website are the property of their respective owners and we do not 
   endorse and are not affiliated with any of the holders of any such rights 
   and as such we cannot grant any license to exercise such rights`,
];

const Copyright_and_Trademarks = () => {
  return (
    <div className="mb-6 pt-4 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="lg:px-4">
        <Header_Top
          label="Copyright and Trademarks"
          className="uppercase mb-4"
        />

        <p>Subject to the express provisions of these terms of use:</p>

        <ul className="ml-4">
          {Copyright_and_Trademarks_Items.map((item, idx) => (
            <li key={idx} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Copyright_and_Trademarks;
