import React from "react";
import { Header_Top } from "../../ReusedComponent/Text_Typography";

const Registration_and_Account_Items = [
  `You may register on our website by completing and submitting the 
   registration form on the website.`,

  `You represent and warrant that all information provided in the registration 
   form is complete, accurate and completely true.`,

  `You agree that your KreativeRock account shall be used exclusively by you 
   and you shall not transfer your account or password to any third party. 
   If you authorize any third party to manage your account on your behalf this 
   shall be at your own risk.`,

  `You agree that on the KreativeRock Mobile Texting solutions, you must be 
   operating from the local country at which you indicated on the form during 
   the registration.`,

  `You agree to:`,

  `Keep your password confidential.`,

  `Notify us in writing immediately you become aware of any disclosure of your 
   password; and`,

  `Be responsible for any activity on the website arising out of any failure 
   to keep your password confidential, and that you may be held liable for any 
   losses arising out of such a failure.`,
];

const Registration_and_Account = () => {
  return (
    <div className="mb-6 pt-4 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="lg:px-4">
        <Header_Top
          label="Registration and Account"
          className="uppercase mb-4"
        />

        <ul className="ml-4">
          {Registration_and_Account_Items.map((item, idx) => (
            <li key={idx} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Registration_and_Account;
