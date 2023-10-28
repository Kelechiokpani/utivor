import React from "react";
import { Header_Span } from "../../ReusedComponent/Text_Typography";

const listItems = [
  `In order to send an email campaign or use certain features in your account, 
   you need to upload a Distribution List that provides us information about 
   your Contacts, such as their names and email addresses. We use and process 
   this information to provide the Service in accordance with our contract with 
   you or your organization and this privacy policy.`,

  `A Distribution List can be created in a number of ways, including by 
   importing Contacts, such as indirectly or directly from your email client. 
   We do not, under any circumstances, sell your Distribution Lists. If 
   someone on your Distribution List complains or contacts us, we might then 
   contact that person. `,

  `If we detect abusive or illegal behavior related to your Distribution 
   List, we may share your Distribution List or portions of it with Internet 
   Service Providers or anti-spam organizations to the extent permitted or 
   required by applicable law.`,

  `If a Contact chooses to use the Forward to a Friend (FTF) link in an 
   email campaign a Subscriber sends, it will allow the Contact to share 
   the Subscriber’s email content with individuals not on the Subscriber’s 
   Distribution List. When a Contact forwards an email to a friend, we do 
   not store the Contact’s email address or their friend’s email address, 
   and no one is added to any Distribution List as a result of the FTF link. 
   The Subscriber who created the email campaign only sees an aggregate 
   number of times their email campaign was forwarded by a Contact and does 
   not have access to the email addresses used to share or receive that 
   forwarded content.`,
];

const Subscribers_Distribution_Lists = () => {
  return (
    <div className="mb-6 pt-4 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="lg:px-4">
        <Header_Span
          label="3.5. Subscriber's Distribution Lists"
          className="uppercase mb-3"
        />

        <ul className="ml-4">
          {listItems.map((item, idx) => (
            <li key={idx} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Subscribers_Distribution_Lists;
