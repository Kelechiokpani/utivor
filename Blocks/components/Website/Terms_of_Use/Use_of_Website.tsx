import React from "react";
import { Header_Top } from "../../ReusedComponent/Text_Typography";

const Use_of_Website_Items_1 = [
  `View pages from our website in a web browser.`,

  `Download pages from our website for caching in a web browser.`,

  `Print pages from our website for your own personal and non-commercial use, 
   providing that such printing is not systematic or excessive.`,

  `Stream audio and video files from our website using the media player on our 
   website.`,

  `Except as expressly permitted by these general terms and conditions, you 
   must not edit or otherwise modify any material on our website. Unless you 
   own or control the relevant rights in the material, you must not:`,

  `Republish material from our website (including republication on another 
   website).`,

  `Sell, rent or sub-license material from our website.`,

  `We reserve the right to suspend or restrict access to our website, to areas 
   of our website and/or to functionality upon our website. We may, for 
   example, suspend access to the website during server maintenance or when we 
   update the website. You must not circumvent or bypass, or attempt to circumvent 
   or bypass, any access restriction measures on the website.`,
];

const Use_of_Website_Items_2 = [
  `Use our website in any way or take any action that causes, or may cause, 
   damage to the website or impairment of the performance, availability, 
   accessibility, integrity, or security of the website.`,

  `Use our website in any way that is unethical, unlawful, illegal, 
   fraudulent, or harmful, or in connection with any unlawful, illegal, 
   fraudulent, or harmful purpose or activity.`,

  `Hack or otherwise tamper with our website.`,

  `Probe, scan or test the vulnerability of our website without our permission.`,

  `Circumvent any authentication or security systems or processes on or 
   relating to our website.`,

  `Use our website to copy, store, host, transmit, send, use, publish or 
   distribute any material which consists of (or is linked to) any spyware, 
   computer virus, Trojan horse, worm, keystroke logger, rootkit or other 
   malicious computer software.`,

  `Impose an unreasonably large load on our website resources (including 
   bandwidth, storage capacity and processing capacity).`,

  `Decrypt or decipher any communications sent by or to our website without 
   our permission.`,

  `Access or otherwise interact with our website using any robot, spider, or 
   other automated means, except for the purpose of search engine indexing.`,

  `Do anything that interferes with the normal use of our website.`,
];

const Use_of_Website = () => {
  return (
    <div className="mb-6 pt-4 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="lg:px-4">
        <Header_Top label="Use of Website" className="uppercase mb-4" />

        <p>
          You may only use our website for your own personal and business
          purposes, and you may:
        </p>

        <ul className="ml-4 mb-4">
          {Use_of_Website_Items_1.map((item, idx) => (
            <li key={idx} className="mb-2">
              {item}
            </li>
          ))}
        </ul>

        <p>You must not:</p>

        <ul className="ml-4">
          {Use_of_Website_Items_2.map((item, idx) => (
            <li key={idx} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Use_of_Website;
