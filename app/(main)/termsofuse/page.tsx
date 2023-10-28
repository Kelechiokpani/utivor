"use client";
import styled from "styled-components";
import SimpleLayout from "../layout";
import {Header_Top} from "../../../Blocks/ReusedComponent/Text_Typography";
import Introduction from "../../../Blocks/components/Website/Terms_of_Use/Introduction";
import Important_Notice from "../../../Blocks/components/Website/Terms_of_Use/Important_Notice";
import Registration_and_Account from "../../../Blocks/components/Website/Terms_of_Use/Registration_and_Account";
import Listing_Terms from "../../../Blocks/components/Website/Terms_of_Use/Listing_Terms";
import Returns_and_Refunds from "../../../Blocks/components/Website/Terms_of_Use/Returns_and_Refunds";
import Our_Rights_to_Use_Your_Content
  from "../../../Blocks/components/Website/Terms_of_Use/Our_Rights_to_Use_Your_Content";
import Use_of_Website from "../../../Blocks/components/Website/Terms_of_Use/Use_of_Website";
import Copyright_and_Trademarks from "../../../Blocks/components/Website/Terms_of_Use/Copyright_and_Trademarks";
import Data_Privacy from "../../../Blocks/components/Website/Terms_of_Use/Data_Privacy";
import Indemnification from "../../../Blocks/components/Website/Terms_of_Use/Indemnification";
import General_Terms from "../../../Blocks/components/Website/Terms_of_Use/General_Terms";
import Company_Information from "../../../Blocks/components/Website/Terms_of_Use/Company_Information";

const RegisterLandingPage = () => {
  return (
    <SimpleLayout showNavBar={true} showFooter={true} isLandingPage={true}>
      <Container className="py-8">
        <Header_Top label="Terms of Use" className="mb-4 uppercase" />
        <Introduction />
        <Important_Notice />
        <Registration_and_Account />
        <Listing_Terms />
        <Returns_and_Refunds />
        <Our_Rights_to_Use_Your_Content />
        <Use_of_Website />
        <Copyright_and_Trademarks />
        <Data_Privacy />
        <Indemnification />
        <General_Terms />
        <Company_Information />
      </Container>
    </SimpleLayout>
  );
};

export default RegisterLandingPage;

const Container = styled.div`
  background-color: #f4f9fe;
`;
