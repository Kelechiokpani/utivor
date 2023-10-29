import React from "react";
import {Header_Span} from "../../../ReusedComponent/Text_Typography";

const Tracking_Technologies = () => {
  return (
    <div className="mb-6 pt-4 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="lg:px-4">
        <Header_Span
          label="3.4. Tracking Technologies"
          className="uppercase mb-3"
        />
        <p>
          We and our third-party partners may use various technologies to
          collect and store Service Usage Data when you use our Service (as
          discussed above), and this may include using cookies and similar
          tracking technologies. We use this information to measure the
          performance of your online activities on the site, to provide
          analytics information, enhance the effectiveness of our Service, and
          for other purposes described above. Reports are also available to us
          when we send email to you, so we may collect and review that
          information.
        </p>
      </div>
    </div>
  );
};

export default Tracking_Technologies;
