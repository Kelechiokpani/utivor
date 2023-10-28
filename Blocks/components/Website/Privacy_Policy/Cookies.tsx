import React from "react";
import { Header_Span } from "../../ReusedComponent/Text_Typography";

const Cookies = () => {
  return (
    <div className="mb-6 pt-4 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="lg:px-4">
        <Header_Span label="6.3. Cookies" className="uppercase mb-3" />
        <p>
          Cookies are small files placed on your computer’s hard drive that
          enables the website to identify your computer as you view different
          pages. Cookies allow websites and applications to store your
          preferences in order to present contents, options or functions that
          are specific to you. Like most interactive websites, our website uses
          cookies to enable the tracking of your activity for the duration of a
          session. Our website uses only encrypted session cookies which will be
          erased after a predefined period or once the user logs out of the
          platform and closes the browser. Session cookies do not collect
          information from the user’s computer. They will typically store
          information in the form of a session identification that does not
          personally identify the user.
        </p>
      </div>
    </div>
  );
};

export default Cookies;
