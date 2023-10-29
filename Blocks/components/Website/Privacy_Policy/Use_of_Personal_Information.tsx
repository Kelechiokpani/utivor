import React from "react";
import {Header_Span} from "../../../ReusedComponent/Text_Typography";

const listItems = [
  `To bill and collect money owed to us by you to perform our contact with you 
   for the use of the Service or where we have not entered into a contract 
   with you, in accordance with our legitimate interests to operate and 
   administer our Service. This includes sending you emails, invoices, 
   receipts, notices of delinquency, and alerting you if we need a different 
   credit card number. We use third parties for secure credit card transaction 
   processing, and those third parties collect billing information to process 
   your orders and credit card payments. To learn more about the steps we take 
   to safeguard that data, see the “Our Security” section of this privacy policy.`,

  `To send you system alert messages in reliance on our legitimate interests 
   in administering the Service and providing certain features. For example, 
   we may inform you about temporary or permanent changes to our Service, such 
   as planned outages, or send you account, security or compliance 
   notifications, such as new features, version updates, releases, 
   abuse warnings, and changes to this privacy policy.`,

  `To send you system alert messages in reliance on our legitimate interests 
   in administering the Service and providing certain features. For example, 
   we may inform you about temporary or permanent changes to our Service, such 
   as planned outages, or send you account, security or compliance 
   notifications, such as new features, version updates, releases, abuse 
   warnings, and changes to this privacy policy.`,

  `To communicate with you about your account and provide customer support to 
   perform our contract with you for the use of the Service or where we have 
   not entered into a contract with you, in reliance on our legitimate 
   interests in administering and supporting our Service. For example, if you 
   use our Mobile Apps, we may ask you if you want to receive push 
   notifications about activity in your account. If you have opted in to 
   these push notifications and no longer want to receive them, you may turn 
   them off through your operating system.`,

  `To enforce compliance with our Standard Terms of Use and applicable law, 
   and to protect the rights and safety of our Subscribers in reliance on our 
   legitimate interest to protect against misuse or abuse of our Service and 
   to pursue remedies available. This may include developing tools and 
   algorithms that help us prevent violations. For example, sometimes we 
   review the content our Subscribers send or display to ensure it complies 
   with our Standard Terms of Use. To improve that process, we have software 
   that helps us find content that may violate our Standard Terms of Use. We 
   may or our third-party service provider may also review content that our 
   Subscribers send or display. This benefits all Subscribers who comply 
   with our Standard Terms of Use because it reduces abuse and helps us 
   maintain a reliable platform. Please do not use KreativeRock to send or 
   display confidential information.`,

  `To meet legal requirements, including complying with court orders, valid 
   discovery requests, valid subpoenas, and other appropriate legal 
   mechanisms.`,

  `To provide information to representatives and advisors, including lawyers 
   and accountants, to help us comply with legal, accounting, or security 
   requirements in reliance on our legitimate interests.`,

  `To prosecute and defend a court, arbitration, or similar legal proceeding.`,

  `To respond to lawful requests by public authorities, including meeting up 
   national security or law enforcement requirements.`,

  `To provide, support and improve the Service to perform our contract with 
   you for the use of the Service or where we have not entered into a contract
   with you, in reliance on our legitimate interests in administering and 
   improving the Service and providing certain features. For example, this 
   may include improving the navigation and content of the Service and 
   sharing your information with third parties in order to provide and 
   support our Service or to make certain features of the Service available 
   to you. When we share your Personal Information with third parties, we 
   take steps to protect your information in a manner that is consistent with 
   our obligations under applicable privacy laws.`,

  `To provide suggestions to you and to provide tailored features within our 
   Service that optimize and personalize your experience in reliance on our 
   legitimate interests in administering the Service and providing certain 
   features. This includes adding features that compare Subscribers’ email 
   campaigns, using data to suggest other marketers your Contacts may be 
   interested in, or using data to recommend products or services that you 
   may be interested in or that may be relevant to you or your Contacts. 
   Some of these suggestions are generated through analysis of the data used 
   in our data analytics projects, as described below.`,

  `To perform data analytics projects in reliance on our legitimate business 
   interests in improving and enhancing our products and services for our 
   Subscribers. Our data analytics projects use data from KreativeRock 
   accounts, including Personal Information of Contacts, to provide and 
   improve the Service. We use information like your sending habits and 
   your Contacts’ purchase history, so we can make more informed predictions, 
   decisions, and products for our Subscribers. For example, we use data from 
   KreativeRock accounts to enable product recommendation, audience 
   segmentation, and predicted demographics features for our Subscribers. If 
   you or your Contact prefers not to have their data used for this purpose, 
   you can alter the settings on your account to opt out of data analytics 
   projects, or your Contact can opt out of data analytics projects at any 
   time. As always, we take the privacy of Personal Information seriously, 
   and will continue to implement appropriate safeguards to protect this 
   Personal Information from misuse or unauthorized disclosure.`,

  `To combine and anonymize data about our Subscribers and our Subscriber's 
   use of the Service in order to create aggregate, anonymized statistics 
   which we may use to provide certain features within the Service and for 
   promoting and improving the Service in reliance on our legitimate 
   interests.`,

  `To personalize the Service, content, and advertisements we serve to you 
   in reliance on our legitimate interests in supporting our marketing 
   activities and providing certain features within the Service. We and our 
   third-party marketing and advertising partners may use your Personal 
   Information to serve you specifically, such as to deliver gifts and 
   promotional materials, marketing information, product recommendations, 
   non-transactional communications (e.g., email, telemarketing calls, SMS, 
   or push notifications), and personalized advertising about us, in 
   accordance with your applicable marketing preferences and this privacy 
   policy.`,
];

const Use_of_Personal_Information = () => {
  return (
    <div className="mb-6 pt-4 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="lg:px-4">
        <Header_Span
          label="3.2. Use of Personal Information"
          className="uppercase mb-3"
        />
        <p>
          We may use the Personal Information we collect or receive through the
          Service (alone or in conjunction with other data we source) for the
          purposes and on the legal bases identified below:
        </p>

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

export default Use_of_Personal_Information;
