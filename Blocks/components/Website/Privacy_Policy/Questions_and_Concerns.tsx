import React from "react";
import { Header_Span } from "../../ReusedComponent/Text_Typography";

const email = "info@kreativerock.com";

const Questions_and_Concerns = () => {
  return (
    <div className="mb-6 pt-4 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="lg:px-4">
        <Header_Span
          label="6.6. Questions And Concerns"
          className="uppercase mb-3"
        />
        <p>
          If you have any questions or comments, or if you have a concern about
          the way in which we have handled any privacy matter, please send an
          email to
          <a href={`mailto:${email}`}>{email}</a>
        </p>
      </div>
    </div>
  );
};

export default Questions_and_Concerns;
