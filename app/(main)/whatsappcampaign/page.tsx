"use client";
import SimpleLayout from "../layout";
import HeroSection from "../../../Blocks/components/Website/WhatsApp_Campaign/HeroSection";
import Speak_To_An_Expert from "../../../Blocks/components/Website/WhatsApp_Campaign/How_It_Works";
import Why_KreativeRock from "../../../Blocks/components/Website/WhatsApp_Campaign/Why_KreativeRock";
import Features from "../../../Blocks/components/Website/WhatsApp_Campaign/Features";
import How_It_Works from "../../../Blocks/components/Website/WhatsApp_Campaign/How_It_Works";
import Use_Case from "../../../Blocks/components/Website/WhatsApp_Campaign/Use_Case";
import Request_a_Callback from "../../../Blocks/components/Website/Home/Request_a_Callback";


export default function WhatsAppCampaignLandingPage() {
  return (
    <SimpleLayout showNavBar={true} showFooter={true}>
      <HeroSection />
      <Speak_To_An_Expert />
      <Why_KreativeRock />
      <Features />
      <How_It_Works />
      <Use_Case />
      <Request_a_Callback />
    </SimpleLayout>
  );
}

// HomeLandingPage.Container = NavigationLayout;
