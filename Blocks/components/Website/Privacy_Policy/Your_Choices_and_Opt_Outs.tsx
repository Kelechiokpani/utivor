import React from "react";
import { Header_Span } from "../../ReusedComponent/Text_Typography";

const Your_Choices_and_Opt_Outs = () => {
  return (
    <div className="mb-6 pt-4 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="lg:px-4">
        <Header_Span
          label="6.1. Retention of Data"
          className="uppercase mb-3"
        />
        <p>
          We retain Personal Information where we have an ongoing legitimate
          business or legal need to do so. Our retention periods will vary
          depending on the type of data involved, but, generally, we'll refer to
          these criteria in order to determine retention period:
        </p>

        <ul className="ml-4">
          <li className="mb-2">
            <strong>Marketing: </strong>Subscribers and Visitors who have opted
            in to our marketing emails can opt out of receiving marketing emails
            from us at any time by clicking the "unsubscribe" link at the bottom
            of our marketing messages.
          </li>
        </ul>

        <p>
          Also, all opt-out requests can be made by emailing us using the
          contact details provided in the "Questions and Concerns" section
          below.
          <strong>
            <em>
              Please note that some communications (such as service messages,
              account notifications, and billing information) are considered
              transactional and necessary for account management, and
              Subscribers cannot opt out of these messages unless you cancel
              your KreativeRock account.
            </em>
          </strong>
        </p>

        <ul className="ml-4">
          <li className="mb-2">
            <strong>Personalized Advertising: </strong>SWe may share limited
            Personal Information of our Subscribers with third-party advertising
            networks, exchanges, and social media platforms (like Google) to
            display advertising on the KreativeRock Sites or to manage and serve
            our advertising on other sites. If you are a Subscriber and prefer
            us not to share your Personal Information, you can alter the
            settings on your account.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Your_Choices_and_Opt_Outs;
