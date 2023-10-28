"use client";
import SimpleLayout from "../layout";
import HeroSection from "../../../Blocks/components/Website/Sponsored_Ads/HeroSection";
import Why_Digital_Marketing from "../../../Blocks/components/Website/Sponsored_Ads/Why_Digital_Marketing";
import What_We_Can_Do from "../../../Blocks/components/Website/Sponsored_Ads/What_We_Can_Do";
import Services from "../../../Blocks/components/Website/Sponsored_Ads/Services";
import Stragety_and_Management from "../../../Blocks/components/Website/Sponsored_Ads/Stragety_and_Management";
import Why_Use_Us from "../../../Blocks/components/Website/Sponsored_Ads/Why_Use_Us";
import Request_a_Callback from "../../../Blocks/components/Website/Home/Request_a_Callback";


const HomeLandingPage = () => {
  return (
    <SimpleLayout showNavBar={true} showFooter={true}>
      <HeroSection />
      <Why_Digital_Marketing />
      <What_We_Can_Do />
      <Services />
      <Stragety_and_Management />
      <Why_Use_Us />
      <Request_a_Callback />
    </SimpleLayout>
  );
};

export default HomeLandingPage;
