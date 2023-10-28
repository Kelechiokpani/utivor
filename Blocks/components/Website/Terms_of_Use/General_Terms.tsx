import React from "react";
import { Header_Top } from "../../ReusedComponent/Text_Typography";

const General_Terms_Items_1 = [
  `We do not confirm the identity of all account holders on KreativeRock 
   website.`,

  `We do not check, audit, or monitor all information contained in listings.`,
];

const General_Terms_Items_2 = [
  `The completeness or accuracy of the information published on our website.`,

  `That the website will operate without fault; or`,

  `That the website or any service on the website will remain available.`,

  `We reserve the right to discontinue or alter any or all of our services, 
   and to stop publishing our website, at any time in our sole discretion with 
   notice or explanation.`,

  `If you breach these General Terms and Conditions, or if we reasonably 
   suspect that you have breached these general terms and conditions in any 
   way, we may:`,

  `Temporarily suspend your access to our website.`,

  `Permanently prohibit you from accessing our website.`,

  `Block computers using your IP address from accessing our website.`,

  `Contact any or all of your internet service providers and request that they 
   block your access to our website.`,

  `Suspend or delete your account on our website; and/or`,

  `Commence legal action against you.`,

  `Where we suspend, prohibit or block your access to our website or a part of 
   our website you must not take any action to circumvent such suspension or 
   prohibition or blocking (including without limitation creating and/or using 
   a different account).`,

  `These terms of use shall constitute the entire agreement between you and us 
   in relation to your use of our platform and shall supersede all previous 
   understandings and agreements between you and us in relation to your use of 
   our website.`,
];

const General_Terms = () => {
  return (
    <div className="mb-6 pt-4 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="lg:px-4">
        <Header_Top label="General Terms" className="uppercase mb-4" />

        <p>You acknowledge that:</p>

        <ul className="ml-4 mb-4">
          {General_Terms_Items_1.map((item, idx) => (
            <li key={idx} className="mb-2">
              {item}
            </li>
          ))}
        </ul>

        <p>We do not warrant or represent:</p>

        <ul className="ml-4">
          {General_Terms_Items_2.map((item, idx) => (
            <li key={idx} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default General_Terms;
