
import styled from "styled-components";

import reportingImg from "../../../../public/image/website/landing_page/reporting.svg";
import complianceImg from "../../../../public/image/website/landing_page/compliance.svg";
import aiImg from "../../../../public/image/website/landing_page/ai.svg";
import messagingSolutionsImg from "../../../../public/image/website/landing_page/messaging-solutions.svg";
import marketingInterventionImg from "../../../../public/image/website/landing_page/marketing-intervention.svg";
import socialMediaManagementImg from "../../../../public/image/website/landing_page/social-media-management.svg";





import {Header_Top, Header_Top_Span, HR_Line} from "../../../ReusedComponent/Text_Typography";
import Card from "../../../ReusedComponent/Card";

const Why_Use_KreativeRock_Items = [
  {
    title: "Excellent Reporting",
    content: `Monitor & evaluate your effort in real time with our robust reporting system & analytics.`,
    icon: reportingImg,
  },
  {
    title: "Multi-Telco Compliance",
    content: `We meet global texting standards that allows real time interaction & messaging delivery.`,
    icon: complianceImg,
  },
  {
    title: "Conversational Artificial Intelligence",
    content: `We pull compelling messages and visuals to influence that gut feeling & differentiate your brand.`,
    icon: aiImg,
  },
  {
    title: "Excellent Reporting",
    content: `Easy to use & manage direct messaging & two-way messaging communication with customers in a unique way.`,
    icon: messagingSolutionsImg,
  },
  {
    title: "Tailored Digital Strategy & Marketing Intervention",
    content: `Maximize market opportunities for your business through digital marketing technologies. 
              Reach the right audience, drive results & maximize your campaign investments.`,
    icon: marketingInterventionImg,
  },
  {
    title: "Social Media Management",
    content: `Improve the quality of your email send with actionable call-to-action.`,
    icon: socialMediaManagementImg,
  },
];

const Why_Use_KreativeRock = () => {
  return (
    <Container className="text-700 lg:text-center justify-content-center lg:p-8">
      <div className=" p-6 lg:px-8">
        <Header_Top label="Why Use KreativeRock Digital?" />
        <HR_Line className="w-8 md:w-6 lg:w-3 mb-3" />

        <Header_Top_Span
          label={`Built with your business in mind`}
          className="font-light lg:text-2xl"
        />
      </div>

      <div className="grid grid-nogutter p-2">
        {Why_Use_KreativeRock_Items.map((item,index) => (
          <Card index={index} key={index} title={item.title} content={item.content} icon={item.icon} />
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  background: #f9fcff;
  color: #000;
  padding-bottom: 10px;
  padding-top: 10px;
  line-height: 164%;
`;

export default Why_Use_KreativeRock;
