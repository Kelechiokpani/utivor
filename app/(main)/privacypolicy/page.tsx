"use client";
import SimpleLayout from "../layout";
import styled from "styled-components";
import {Header_Top} from "../../../Blocks/ReusedComponent/Text_Typography";
import Introduction from "../../../Blocks/components/Website/Privacy_Policy/Introduction";
import Definition_Of_Terms from "../../../Blocks/components/Website/Privacy_Policy/Definition_Of_Terms";
import Privacy_for_Subscribers from "../../../Blocks/components/Website/Privacy_Policy/Privacy_for_Subscribers";
import Information_We_Collect from "../../../Blocks/components/Website/Privacy_Policy/Information_We_Collect";
import Use_of_Personal_Information from "../../../Blocks/components/Website/Privacy_Policy/Use_of_Personal_Information";
import Third_Party_Integrations from "../../../Blocks/components/Website/Privacy_Policy/Third_Party_Integrations";
import Tracking_Technologies from "../../../Blocks/components/Website/Privacy_Policy/Tracking_Technologies";
import Subscribers_Distribution_Lists
  from "../../../Blocks/components/Website/Privacy_Policy/Subscribers_Distribution_Lists";
import Your_Data_Protection_Rights from "../../../Blocks/components/Website/Privacy_Policy/Your_Data_Protection_Rights";
import Privacy_for_Contacts from "../../../Blocks/components/Website/Privacy_Policy/Privacy_for_Contacts";
import Privacy_For_Visitors from "../../../Blocks/components/Website/Privacy_Policy/Privacy_for_Visitors";
import General_Information from "../../../Blocks/components/Website/Privacy_Policy/General_Information";
import Your_Choices_and_Opt_Outs from "../../../Blocks/components/Website/Privacy_Policy/Your_Choices_and_Opt_Outs";
import Our_Security from "../../../Blocks/components/Website/Privacy_Policy/Our_Security";
import Cookies from "../../../Blocks/components/Website/Privacy_Policy/Cookies";
import Retention_of_Data from "../../../Blocks/components/Website/Privacy_Policy/Retention_of_Data";
import Changes_to_This_Policy from "../../../Blocks/components/Website/Privacy_Policy/Changes_to_This_Policy";
import Questions_and_Concerns from "../../../Blocks/components/Website/Privacy_Policy/Questions_and_Concerns";

const RegisterLandingPage = () => {
  return (
    <SimpleLayout showNavBar={true} showFooter={true} isLandingPage={true}>
      <Container className="py-8">
        <Header_Top label="KreativeRock Privacy" className="mb-6 uppercase" />
        <Introduction />
        <Definition_Of_Terms />
        <Privacy_for_Subscribers />
        <Information_We_Collect />
        <Use_of_Personal_Information />
        <Third_Party_Integrations />
        <Tracking_Technologies />
        <Subscribers_Distribution_Lists />
        <Your_Data_Protection_Rights />
        <Privacy_for_Contacts />
        <Privacy_For_Visitors />
        <General_Information />
        <Your_Choices_and_Opt_Outs />
        <Our_Security />
        <Cookies />
        <Retention_of_Data />
        <Changes_to_This_Policy />
        <Questions_and_Concerns />
      </Container>
    </SimpleLayout>
  );
};

export default RegisterLandingPage;

const Container = styled.div`
  background-color: #f4f9fe;
`;
