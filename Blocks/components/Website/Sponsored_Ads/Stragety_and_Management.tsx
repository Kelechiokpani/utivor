import React from "react";

import image1 from "../../../../public/image/website/sponsored_ads/content_marketing.svg";
import image2 from "../../../../public/image/website/sponsored_ads/social_media_marketing.svg";
import Image_and_Text from "../../../ReusedComponent/Image_and_Text";

const Stragety_and_Management_Items = [
  {
    label: "Content Marketing & Management",
    subLabel: "Strategy",
    description: `A good content strategy should bridge the gap between the 
    content you produce and what your consumers want. Content is the life blood of your 
    business as it attracts tones of qualified leads and sales to your business when 
    it’s done right. If  you want to create the right type of prioritized content at 
    the right time, then you need a winning content marketing strategy & management. 
    We'll evaluate your brand and create a winning strategy that works.`,
    image: image1,
    imageOnRight: true,
  },
  {
    label: "Social Media & Digital Identity ",
    subLabel: "Management",
    description: `Many prospective customers rely on digital platforms to connect, discover, 
    research, educate and firm purchase decisions even before engaging with that organization. 
    Each platforms have their unique audience that can help achieve your goal. 
    We will leverage these platforms to help you achieve your goals.`,
    image: image2,
  },
];

export default function Stragety_and_Management() {
  return (
    <div className="px-6 lg:px-6 surface-0 mb-0">
      {Stragety_and_Management_Items.map((item, idx) => (
        <Image_and_Text
          label={item.label}
          subLabel={item.subLabel ?? ""}
          image={item.image}
          description={item.description}
          imageOnRight={item?.imageOnRight}
          key={idx}
        />
      ))}
    </div>
  );
}
