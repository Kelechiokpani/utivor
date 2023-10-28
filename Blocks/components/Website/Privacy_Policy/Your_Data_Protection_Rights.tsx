import React from "react";
import { Header_Span } from "../../ReusedComponent/Text_Typography";

const listItems = [
  `To access; correct; update; port; delete; restrict; or object to our 
   processing of your Personal Information.
  `,

  `You can manage your individual account and profile settings within the 
   dashboard provided through the KreativeRock platform, or you may contact 
   us directly by emailing us at info@kreativerock.com. You can also manage 
   information about your Contacts within the dashboard provided through the 
   KreativeRock platform to assist you with responding to requests to 
   access, correct, update, port or delete information that you receive 
   from your Contacts. Note, if any of your Contacts wish to exercise any 
   of these rights, they should contact you directly, or contact us as 
   described in the “Privacy for Contacts” section below. You can also 
   contact us at any time to update your own marketing preferences. 
   KreativeRock takes reasonable steps to ensure that the data we collect 
   is reliable for its intended use, accurate, complete and up to date. `,

  `The right to complain about the collection and use of Personal 
   Information.`,

  `Similarly, if Personal Information is collected or processed on the basis 
   of consent, the data subject can withdraw their consent at any time. 
   Withdrawing your consent will not affect the lawfulness of any processing 
   we conducted prior to your withdrawal, nor will it affect the processing of 
   your Personal Information conducted in reliance on lawful processing 
   grounds other than consent. If you receive these requests from Contacts, 
   you can segment your lists within the KreativeRock platform to ensure 
   that you only market to Contacts who have not opted out of receiving such 
   marketing.`,
];

const Your_Data_Protection_Rights = () => {
  return (
    <div className="mb-6 pt-4 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="lg:px-4">
        <Header_Span
          label="3.6. Your Data Protection Rights"
          className="uppercase mb-3"
        />
        <p>
          Based on the Nigeria Data Protection Regulation (2019) and other
          relevant Nigerian laws, regulations or international conventions
          applicable to Nigeria, you have the right:
        </p>

        <ul className="ml-4">
          {listItems.map((item, idx) => (
            <li key={idx} className="mb-2">
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-6 text-center font-bold font-italic">
          We respond to all requests we receive from individuals wishing to
          exercise their data protection rights in accordance with applicable
          data protection law. We may ask you to verify your identity in order
          to help us respond efficiently to your request. If we receive a
          request from one of your Contacts, we will either direct the Contact
          to reach out to you, or, if appropriate, we may respond directly to
          their request.
        </p>
      </div>
    </div>
  );
};

export default Your_Data_Protection_Rights;
