import React from "react";
import { Header_Top } from "../../ReusedComponent/Text_Typography";

const Our_Rights_to_Use_Your_Content_Items = [
  `You hereby waive all your moral rights in your content to the maximum 
   extent permitted by applicable law; and you warrant and represent that all 
   other moral rights in your content have been waived to the maximum extent 
   permitted by applicable law.`,

  `Without prejudice to our other rights under these terms and conditions, 
   if you breach our rules on content in any way, or if we reasonably suspect 
   that you have breached our rules on content, we may delete, unpublish or 
   edit any or all of your content`,
];

const Our_Rights_to_Use_Your_Content = () => {
  return (
    <div className="mb-6 pt-4 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="lg:px-4">
        <Header_Top
          label="Our Rights to Use Your Content"
          className="uppercase mb-4"
        />

        <p>You acknowledge and agree that:</p>

        <ul className="ml-4">
          {Our_Rights_to_Use_Your_Content_Items.map((item, idx) => (
            <li key={idx} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Our_Rights_to_Use_Your_Content;
