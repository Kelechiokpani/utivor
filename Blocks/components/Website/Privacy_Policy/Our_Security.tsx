import React from "react";
import { Header_Span } from "../../ReusedComponent/Text_Typography";

const Our_Security = () => {
  return (
    <div className="mb-6 pt-4 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="lg:px-4">
        <Header_Span label="6.2. Our Security" className="uppercase mb-3" />
        <p>
          We take appropriate and reasonable technical and organizational
          measures designed to protect Personal Information from loss, misuse,
          unauthorized access, disclosure, alteration, and destruction, taking
          into account the risks involved in the processing and the nature of
          the Personal Information.
        </p>

        <p>
          KreativeRock accounts require a username and password to log in.
          Subscribers must keep their username and password secure, and never
          disclose it to a third party. Because the information in a
          Subscriber’s KreativeRock account is private, account passwords are
          hashed, which means we cannot see a Subscriber’s password. We cannot
          resend forgotten passwords either. We will only provide Subscribers
          with instructions on how to reset them.
        </p>
      </div>
    </div>
  );
};

export default Our_Security;
