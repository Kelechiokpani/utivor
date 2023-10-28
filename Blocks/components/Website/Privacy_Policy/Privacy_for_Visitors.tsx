import { Header_Span } from "../../ReusedComponent/Text_Typography";

const Personal_Information_Items = [
  `Business contact information (such as your name, phone number, email address and country);`,
  `Professional information (such as your job title, institution or company);`,
  `Nature of your communication;`,
  `Marketing information (such as your contact preferences); and`,
  `Any information you choose to provide to us when completing any ‘free text’ boxes in our forms.`,
];

const Use_of_Personal_Information_Items = [
  `To provide, operate, optimize, and maintain the KreativeRock Sites.`,

  `To send you marketing information, brand/product recommendations and 
   non-transactional communications (e.g., email, telemarketing calls, SMS, or 
   push notifications) about us, in accordance with your marketing preferences, 
   including information about our products, services, promotions or events as 
   necessary for our legitimate interest in conducting direct marketing or to 
   the extent you have provided your prior consent.`,

  `For recruitment purposes if you have applied for a role with KreativeRock.`,

  `To respond to your online inquiries and requests, and to provide you with 
   information and access to resources or services that you have requested 
   from us.`,

  `To manage the KreativeRock Sites and system administration and security.`,

  `To manage event registrations and attendance, including sending related 
   communications to you.`,

  `To register visitors to our offices for security reasons and to manage 
   non-disclosure agreements that visitors may be required to sign.`,

  `To improve the navigation and content of the KreativeRock Sites.`,

  `To identify any server problems or other IT or network issues.`,

  `To process transactions and to set up online accounts.`,

  `To compile aggregated statistics about site usage and to better understand 
   the preferences of our Visitors.`,

  `To help us provide, improve and personalize our marketing activities.`,

  `To facilitate the security and continued proper functioning of the 
   KreativeRock Sites.`,

  `To carry out research and development to improve our KreativeRock Sites, 
   products and services.`,

  `To conduct marketing research, advertise to you, provide personalized 
   information about us on and off our KreativeRock Sites, and to provide 
   other personalized content based on your activities and interests to the 
   extent necessary for our legitimate interests in supporting our marketing 
   activities or advertising our Service or instances where we seek your 
   consent.`,

  `To carry out other legitimate business purposes, as well as other lawful 
   purposes, such as data analysis, fraud monitoring and prevention, 
   identifying usage trends and expanding our business activities in 
   reliance on our legitimate interests.`,

  `To cooperate with public and government authorities, courts or regulators 
   in accordance with our legal obligations under applicable laws to the 
   extent this requires the processing or disclosure of Personal Information 
   to protect our rights or is necessary for our legitimate interest in 
   protecting against misuse or abuse of our KreativeRock Sites and Service, 
   protecting personal property or safety, pursuing remedies available to us 
   and limiting our damages, complying with judicial proceedings, court orders 
   or legal processes, or responding to lawful requests.`,
];

const Public_Information_and_Third_Party_Websites = [
  `Blog: We have public blogs on the KreativeRock Sites. Any information you 
   include in a comment on our blog may be read, collected, and used by 
   anyone. If your Personal Information appears on our blogs and you want it 
   removed, contact us at info@kreativerock.com. If we are unable to remove 
   your information, we will tell you why.`,

  `Social media platforms: The KreativeRock Sites include social media 
   features, such as the Facebook Like button, etc. These features may collect 
   information about your IP address and which page you are visiting on our 
   KreativeRock Site, and they may set a cookie to make sure the feature 
   functions properly. Social media features and widgets are either hosted by 
   a third party or hosted directly on our KreativeRock Site. We also maintain 
   presences on social media platforms, including Facebook, Twitter, Telegram 
   and Instagram. Any information, communications, or materials you submit to 
   us via a social media platform is done at your own risk without any 
   expectation of privacy. We cannot control the actions of other users of 
   these platforms or the actions of the platforms themselves. Your 
   interactions with those features and platforms are governed by the privacy 
   policies of the companies that provide them.`,

  `Links to third-party websites: 
   The KreativeRock Sites include links to other websites, whose privacy 
   practices may be different from ours. If you submit Personal Information to 
   any of those sites, your information is governed by their privacy policies. 
   We encourage you to carefully read the privacy policy of any website you 
   visit.`,

  `Contests and sweepstakes: We may, from time to time, offer surveys, 
   contests, sweepstakes, or other promotions on the KreativeRock Sites or 
   through social media (collectively, "Promotions"). Participation in our 
   Promotions is completely voluntary. Information requested for entry may 
   include Personal Information such as your name, address, date of birth, 
   phone number, email address, username, and similar details. We use the 
   information you provide to administer our Promotions. We may also, unless 
   prohibited by the Promotion’s rules or law, use the information provided to 
   communicate with you, or other people you select, about our Service. We may 
   share this information with our subsidiaries or Affiliates and other 
   organizations or service providers in line with this privacy policy and the 
   rules posted for our Promotions.`,
];

const Privacy_For_Visitors = () => {
  return (
    <div className="mb-6 pt-4 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="lg:px-4">
        <Header_Span
          label="5. Privacy For Visitors"
          className="uppercase mb-3"
        />
        <div>
          <p>
            This section applies to Personal Information that we collect and
            process when you visit the KreativeRock Sites, and in the usual
            course of our business, such as in connection with our recruitment,
            events, sales and marketing activities or when you visit our
            offices. In this section, "you" and "your" refer to Visitors.
          </p>

          <div className="mt-5 mb-4">
            <h5 className="text-800 text-xl font-bold">
              a) Information We Collect:
            </h5>
          </div>

          <ul className="mt-5 ml-4 mb-4">
            <li>
              <h5 className="text-800 text-xl font-bold">
                Information you provide to us on the KreativeRock Sites or
                otherwise:
              </h5>
              Our KreativeRock Sites offer various ways to contact us, such as
              through form submissions, email or phone, to inquire about our
              company and Service. For example, we may ask you to provide
              certain Personal Information when you express an interest in
              obtaining information about us or our Service, take part in
              surveys, subscribe to marketing, apply for a role with
              KreativeRock, or otherwise contact us. We may also collect
              Personal Information from you in person when you attend our events
              or trade shows, if you visit our offices (where you will be
              required to register as a visitor and provide us with certain
              information that may also be shared with our service providers) or
              via a phone call with one of our sales representatives. You may
              choose to provide additional information when you communicate with
              us or otherwise interact with us, and we may keep copies of any
              such communications for our records.
            </li>
          </ul>

          <div className="mt-5 mb-4">
            <h5 className="text-800 text-xl font-bold">
              The Personal Information we collect may include:
            </h5>
          </div>

          <ol className="ml-4" style={{ listStyleType: "lower-alpha" }}>
            {Personal_Information_Items.map((item, idx) => (
              <li key={idx} className="mb-2">
                {item}
              </li>
            ))}
          </ol>

          <ul className="mt-5 ml-4 mb-4">
            <li>
              <h5 className="text-800 text-xl font-bold">
                Information we collect automatically through the KreativeRock
                Sites
              </h5>
              When you visit our KreativeRock Sites or interact with our emails,
              we and our third-party partners use cookies and similar
              technologies such as pixels or web beacons, alone or in
              conjunction with cookies, to collect certain information
              automatically from your browser or device. This information may be
              considered Personal Information under applicable data protection
              laws.
            </li>
          </ul>

          <p className="font-bold">
            The information we collect automatically includes:
          </p>

          <ul className="ml-4">
            <li className="mb-2">
              <strong>Device information:</strong> such as your IP address, your
              browser, operating system, device information, unique device
              identifiers, mobile network information, request information
              (speed, frequency, the site from which you linked to us
              (“referring page”), the name of the website you choose to visit
              immediately after ours (called “exit page”), information about
              other websites you have recently visited, the web browser you used
              (software used to browse the internet) including its type and
              language), and viewfinder size and scripts errors.
            </li>

            <li>
              <strong>Usage data:</strong> such as information about how you
              interact with our emails, KreativeRock Sites, and other websites
              (such as the pages and files viewed, session duration, links
              clicked, searches, non-sensitive text entered, mouse movements,
              operating system and system configuration information and
              date/time stamps associated with your usage).
            </li>
          </ul>

          <div className="mt-5 mb-4">
            <h5 className="text-800 text-xl font-bold">
              b) Use of Personal Information
            </h5>
            We may use the information we collect through our KreativeRock Sites
            and in connection with our events and marketing activities (alone or
            in combination with other data we collect) for a range of reasons in
            reliance on our legitimate interests, including:
          </div>

          <ul className="ml-4">
            {Use_of_Personal_Information_Items.map((item, idx) => (
              <li key={idx} className="mb-2">
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-5 mb-4">
            <h5 className="text-800 text-xl font-bold">
              c) Public Information and Third-Party Websites
            </h5>
          </div>

          <ul className="ml-4">
            {Public_Information_and_Third_Party_Websites.map((item, idx) => (
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

export default Privacy_For_Visitors;
