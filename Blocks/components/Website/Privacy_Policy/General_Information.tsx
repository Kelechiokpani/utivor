import React from "react";
import {
  Header_Span,
  Header_Span_sub,
} from "../../ReusedComponent/Text_Typography";

const listItems = [
  `Our service providers: Sometimes, we share your information with our 
   third-party service providers working on our behalf for the purposes 
   described in this privacy policy. For example, companies we’ve hired to 
   help us provide and support our Service or assist in protecting and 
   securing our systems and services and other business-related functions
Other examples include analyzing data, hosting data, engaging technical 
support for our Service, processing payments, and delivering content.
  `,

  `Advertising partners: We may partner with third-party advertising networks, 
   exchanges, and social media platforms (like Google) to display advertising 
   on the KreativeRock Sites or to manage and serve our advertising on other 
   sites. We and our third-party partners may use cookies and other similar 
   tracking technologies, such as pixels and web beacons, to gather 
   information about your activities on the KreativeRock Sites and other sites 
   in order to provide you with targeted advertising based on your browsing 
   activities and interests. 
   In certain cases, we may also share limited Personal Information about our 
   Subscribers with our third-party advertising partners for our own marketing 
   purposes. If you prefer us not to share your Personal Information, you can 
   alter the settings on your account.`,

  `Any competent law enforcement body, regulatory body, government agency, 
   court or other third party where we believe disclosure is necessary (a) as 
   a matter of applicable law or regulation, (b) to exercise, establish, or 
   defend our legal rights, or (c) to protect your vital interests or those 
   of any other person. In certain situations, we may be required to disclose 
   Personal Information in response to lawful requests by public authorities, 
   including to meet national security or law enforcement requirements.`,

  `A potential buyer (and its agents and advisors) in the case of a sale, merger, 
   consolidation, liquidation, reorganization, or acquisition. In that event, any 
   acquirer will be subject to our obligations under this privacy policy, including 
   your rights to access and choice. We will notify you of the change either by 
   sending you an email or posting a notice on our KreativeRock Site.`,

  `Any other person with your consent.`,

  `We may also share anonymized, aggregated information with selected third 
   parties for statistical or research purposes.`,
];

const General_Information = () => {
  return (
    <div className="mb-6 pt-4 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="lg:px-4">
        <Header_Span
          label="6. General Information"
          className="uppercase mb-3"
        />
        <h4 className="text-700 font-bold ml-5 font-italic">
          How We Share Information
        </h4>

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

export default General_Information;
