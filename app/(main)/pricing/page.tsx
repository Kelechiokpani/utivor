"use client";
import SimpleLayout from "../layout";
import Pricing from "../../../Blocks/components/Website/Pricing/Pricing";

const PricingLandingPage =()=> {
    return (
        <SimpleLayout showFooter={true} showNavBar={true}>
          <Pricing/>
        </SimpleLayout>
    );
}

export default PricingLandingPage;
