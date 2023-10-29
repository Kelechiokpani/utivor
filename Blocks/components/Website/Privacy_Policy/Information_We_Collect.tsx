

const listItems1 = [
  `Business contact information (such as your name, job title, organization, 
   location, phone number, email address, and country);`,

  `Marketing information (such as your contact preferences`,

  `Account log-in credentials (such as your email address or username
    and password when you sign up for an account with us);`,

  `Troubleshooting and support data (which is data you provide or we otherwise 
   collect in connection with support queries we receive from you. This may 
   include contact or authentication data, the content of your chats and other 
   communications with us, and the product or service you are using related to 
   your help inquiry); and`,

  `Payment information (including your credit card numbers and associated 
   identifiers and billing address).`,
];

const Information_We_Collect = () => {
  return (
    <div className="mb-6 pt-4 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="lg:px-4">
        <div>
          <p>
            <strong>3.1 Information We Collect:</strong> The Personal
            Information that we collect depends on the context of your
            interactions with KreativeRock, your KreativeRock account settings,
            the products and features you use, your location, and applicable
            law. The Personal Information collected herein are divided into:
          </p>
          <p>
            <strong>a) Information you provide to us:</strong> You (or your
            organization) may provide certain Personal Information to us when
            you sign up for a KreativeRock account and use the Service, consult
            with our customer service team, send us an email, integrate the
            Service with another website or service (for example, when you
            choose to connect your e-marketing account with KreativeRock), or
            communicate with us in any other way.
          </p>
          <strong>This Information May Include:</strong>

          <ul className="ml-4">
            {listItems1.map((item, idx) => (
              <li key={idx} className="mb-2">
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-4">
            <strong> b) Information we collect automatically:</strong> When you
            use the Service, we and our third-party partners may automatically
            collect or receive certain information about your device and usage
            of the Service (collectively “Service Usage Data”). We also use
            cookies and other tracking technologies to collect some of this
            information.
          </p>
        </div>
        <div className="mt-6">
          <h4 className="text-800 font-bold mb-3">
            Service Usage Data may include:
          </h4>

          <ul className="ml-4">
            <li className="mb-2">
              <strong>Device Information:</strong> We collect information about
              the device and applications you use to access the Service, such as
              your IP address, your operating system, your browser ID,
              viewfinder size, and other information about your system and
              connection. If you use our Mobile App, we may also collect
              information about the cellular network associated with your mobile
              device, your mobile device’s operating system or platform, the
              type of mobile device you use, your mobile device’s name and
              unique device ID, and information about the features of our Mobile
              App that you accessed.
            </li>

            <li className="mb-2">
              <strong> Log Data:</strong> When you use the Service, we and our
              third-party partners may automatically collect or receive certain
              information about your device and usage of the Service
              (collectively “Service Usage Data”). We also use cookies and other
              tracking technologies to collect some of this information.
            </li>

            <li className="mb-2">
              <strong> Usage Data:</strong> We collect usage data about you
              whenever you interact with our Service, which may include the
              dates and times you access the Service and your browsing
              activities (such as what portions of the Service you used, session
              duration, links clicked, non-sensitive text entered, and mouse
              movements). We also collect information regarding the performance
              of the Service, including metrics related to deliverability of
              emails and other communications you send through the Service. If
              you are using our Mobile App, we may collect information about how
              often you use the Mobile App and other performance data. This
              information allows us to improve the content and operation of the
              Service, and facilitate research and analysis of the Service.
            </li>
          </ul>
        </div>

        <p className="mt-4">
          <strong>c) Information we collect from other sources:</strong> From
          time to time, we may obtain information about you from third-party
          sources, such as public databases, social media platforms, third-party
          data providers, and our joint marketing partners. Examples of the
          information we receive from other sources include demographic
          information (such as age and gender), device information (such as IP
          addresses), location (such as information about your use of social
          media websites, page view information and search results and links).
          We use this information, alone or in combination with other personal
          information we collect, to enhance our ability to provide relevant
          marketing and content to you and to develop and provide you with more
          relevant products, features, and service.
        </p>
      </div>
    </div>
  );
};

export default Information_We_Collect;
