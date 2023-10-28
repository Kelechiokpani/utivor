import { Header_Span } from "../../ReusedComponent/Text_Typography";

const Information_We_Collect_Items = [
  {
    heading: "Information we receive about Contacts from our Subscribers:",
    content: `A Subscriber may provide Personal Information about you to us 
               through the Service. When a Subscriber uploads their 
               Distribution List or integrates the Service with another 
               website or service (for example, when a Subscriber chooses to 
               connect their e-commerce account with KreativeRock), or when 
               you sign up for a Subscriber’s Distribution List on a 
               KreativeRock or other signup form, the Subscriber may provide 
               us with certain contact information or other Personal 
               Information about you such as your name, email address, 
               address, or telephone number. You may have the opportunity to 
               update some of this information by electing to update or manage 
               your preferences via an email you receive from a Subscriber.`,
  },
  {
    heading: "Information we collect automatically:",
    content: `When you interact with an email campaign that you receive from a 
              Subscriber, browse or purchase from a Subscriber’s connected 
              store, respond to a Subscriber's survey, or otherwise directly 
              interact with a Subscriber's use of the Service, we may collect 
              information about your device and interaction with the 
              Subscriber's content. We use cookies and other tracking 
              technologies to collect some of this information.`,
  },
  {
    heading: "Device Information:",
    content: `We collect information about the device and applications you use 
              to access content sent through our Service, such as your IP 
              address, your operating system, your browser ID, and other 
              information about your system and connection.`,
  },
  {
    heading: "Usage Data:",
    content: `It is important for us to ensure the security and reliability of 
              the Service we provide. Therefore, we also collect usage data 
              about your interactions with campaigns (and/or emails) and other 
              content delivered through the Service, which may include dates 
              and times you access campaigns (and/or emails) and your browsing 
              activities (such as what pages are viewed, which emails are 
              opened, and how you respond to surveys). This information also 
              allows us to provide our Service, ensure compliance with our 
              Standard Terms of Use and Acceptable Use Policy, to monitor and 
              prevent service abuse, and to ensure we attain certain usage 
              standards and metrics in relation to our Service. We also 
              collect information regarding the performance of the Service, 
              including metrics related to the deliverability of emails and 
              other electronic communications that our Subscribers send 
              through the Service. This information allows us to improve the 
              content and operation of the Service and facilitate research and 
              perform analysis into the use and performance of the Service.`,
  },
  {
    heading: "Information we collect from other sources:",
    content: `From time to time, we may obtain information about you from 
              third-party sources, such as social media platforms, and 
              third-party data providers.`,
  },
];

const Use_of_Personal_Information_Items = [
  `To enforce compliance with our Standard Terms of Use and applicable law. 
   This may include utilizing usage data and developing tools and algorithms 
   that help us prevent violations.`,

  `To protect the rights and safety of Subscribers, third parties, or 
   KreativeRock. For example, sometimes we review the content of our 
   Subscribers’ email campaigns to make sure they comply with our Standard 
   Terms of Use. To improve that process, we have software that helps us find 
   email campaigns that may violate our Standard Terms of Use. We, or our 
   third-party service provider, may review those particular email campaigns, 
   which may include your contact information. This reduces the amount of spam 
   being sent through our servers and helps us maintain high deliverability.`,

  `To meet legal requirements, including complying with court orders, valid 
   discovery requests, valid subpoenas, and other appropriate legal 
   mechanisms.`,

  `To provide information to representatives and advisors, including attorneys 
   and accountants, to help us comply with legal, accounting, or security 
   requirements.`,

  `To prosecute and defend a court, arbitration, or similar legal proceeding.`,

  `To respond to lawful requests by public authorities, including to meet 
   national security or law enforcement requirements.`,

  `To provide, support and improve the Service. For example, this may include 
   sharing your information with third parties in order to provide and support 
   our Service or to make certain features of the Service available to our 
   Subscribers. When we share Personal Information with third parties, we take 
   steps to protect your information in a manner that is consistent with 
   applicable privacy laws.`,

  `To perform data analytics projects, our data analytics projects use data 
   from KreativeRock accounts, including your Personal Information, to provide 
   and improve the Service. We use information, like your purchase history, 
   provided to us by Subscribers, so we can make more informed predictions, 
   decisions, and products for our Subscribers. For example, we use data from 
   KreativeRock accounts to enable product recommendation, audience 
   segmentation, and predicted demographics features for our Subscribers. If 
   you prefer your data not to be used in this manner, you can opt out of data 
   analytics projects at any time.`,

  `To carry out other business purposes. To carry out other legitimate 
   business purposes, as well as other lawful purposes about which we will 
   notify you.`,
];

const Privacy_for_Contacts = () => {
  return (
    <div className="mb-6 pt-4 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="lg:px-4">
        <Header_Span
          label="4. Privacy For Contacts"
          className="uppercase mb-3"
        />
        <div>
          <p>
            This section applies to the information we process about our
            Subscribers’ Contacts as a data controller. Our Service is intended
            for use by our Subscribers. As a result, for much of the Personal
            Information we collect and process about Contacts through the
            Service, we act as a processor on behalf of our Subscribers.
            KreativeRock is not responsible for the privacy or security
            practices of our Subscribers, which may differ from those set forth
            in this privacy policy. Please check with individual Subscribers
            about the policies they have in place. For purposes of this section,
            "you" and "your" refer to Contacts.
          </p>

          <div className="mt-5 mb-6">
            <h5 className="text-800 text-2xl font-bold">
              a) Information We Collect:
            </h5>
            The Personal Information that we may collect or receive about you
            broadly falls into the following categories:
          </div>

          <ul className="ml-4">
            {Information_We_Collect_Items.map((item, idx) => (
              <li key={idx} className="mb-4">
                <h5 className="text-800 text-2xl font-bold">{item.heading}</h5>
                {item.content}
              </li>
            ))}
          </ul>

          <div className="mt-5 mb-4">
            <h5 className="text-800 text-2xl font-bold">
              b) Use of Personal Information
            </h5>
            We may use the Personal Information we collect or receive about you
            in reliance on our (and where applicable, our Subscribers’)
            legitimate interests for the following purposes:
          </div>

          <ul className="ml-4">
            {Use_of_Personal_Information_Items.map((item, idx) => (
              <li key={idx} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Privacy_for_Contacts;
