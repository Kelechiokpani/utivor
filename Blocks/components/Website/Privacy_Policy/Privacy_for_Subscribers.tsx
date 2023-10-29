import {Header_Span} from "../../../ReusedComponent/Text_Typography";

const Privacy_for_Subscribers = () => {
  return (
    <div className="mb-2 pt-4 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="lg:px-4">
        <Header_Span
          label="3. Privacy For Subscribers"
          className="uppercase mb-3"
        />
        <div>
          <p>
            This applies to the personal information we collect and process from
            a subscriber or a potential subscriber through the provision of the
            Service, including features offered through the Service. If you are
            not a Subscriber, the Visitors or Contacts section of this policy
            may be applicable to you and your data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy_for_Subscribers;
