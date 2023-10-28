import React from "react";
import { Header_Span } from "../../ReusedComponent/Text_Typography";

const Changes_to_This_Policy = () => {
  return (
    <div className="mb-6 pt-4 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="lg:px-4">
        <Header_Span
          label="6.5. Changes to This Policy"
          className="uppercase mb-3"
        />
        <p>
          We may change this privacy policy at any time and from time to time.
          The most recent version of the privacy policy is reflected by the
          version date located at the top of this privacy policy. All updates
          and amendments are effective immediately upon notice, which we may
          give by any means, including, but not limited to, by posting a revised
          version of this privacy policy or other notice on the KreativeRock
          Sites. We encourage you to review this privacy policy often to stay
          informed of changes that may affect you. Our electronically or
          otherwise properly stored copies of this privacy policy are each
          deemed to be the true, complete, valid, authentic, and enforceable
          copy of the version of this privacy policy that was in effect on each
          respective date you visited the KreativeRock Site.
        </p>
      </div>
    </div>
  );
};

export default Changes_to_This_Policy;
