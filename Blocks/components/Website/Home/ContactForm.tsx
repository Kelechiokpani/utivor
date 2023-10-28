import { useState } from "react";

import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import { useRouter } from "next/navigation";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import styled from "styled-components";
import { CustomButton } from "../../ReusedComponent/Styled_Button";

// import PhoneInput from "react-phone-number-input/input";

const Services = [
  { value: "one way mobile texting", name: "One Way Mobile Texting" },
  { value: "two way mobile texting", name: "Two Way Mobile Texting" },
  { value: "interactiveSms business", name: "WhatsApp Business" },
  { value: "sponsored ads", name: "Sponsored Ads" },
];

const Form_Input = () => {
  const [value, setValue] = useState<any>();
  const router = useRouter();

  const NewRoute = () => {
    router.push("/sign_up");
  };
  return (
    <Forms_Style className="grid formgrid p-fluid mt-6">
      <div className="field mb-4 col-12 md:col-6">
        <label htmlFor="Full Name" className="font-medium text-900">
          First name
        </label>
        <InputText
          id="First Name"
          type="text"
          className="border-round-2xl p-3"
          placeholder="First name"
        />
      </div>
      <div className="field mb-4 col-12 md:col-6">
        <label htmlFor="Organization Name" className="font-medium text-900">
          Last name
        </label>
        <InputText
          id="Last name"
          type="text"
          className="border-round-2xl p-3"
          placeholder="Last name"
        />
      </div>

      <div className="field mb-4 col-12 md:col-12">
        <label htmlFor="Service Needed" className="font-medium text-900 ">
          Service Needed
        </label>
        <Dropdown
          value={Services}
          // onChange={(e) => setSelectedCity(e.value)}
          options={Services}
          optionLabel="name"
          placeholder="Select a City"
          className="w-full  border-round-2xl p-1"
        />
      </div>

      <div className="field mb-4 col-12 md:col-12">
        <label htmlFor="Email" className="font-medium text-900">
          Email
        </label>
        <InputText
          id="Email"
          type="text"
          className="border-round-2xl p-3"
          placeholder="you@company.com"
        />
      </div>

      <div className="field mb-4 col-12 md:col-12">
        <label htmlFor="Email" className="font-medium text-900">
          Phone number
        </label>
        <PhoneInput
          country="NG"
          defaultCountry="NG"
          name="phone"
          placeholder="phone number"
          onChange={setValue}
          className="w-full"
          style={{ height: "55px" }}
        />
      </div>

      <div className="field mb-4 col-12">
        <label htmlFor="bio1" className="font-medium text-900">
          Description
        </label>
        <InputTextarea
          id="bio1"
          rows={5}
          autoResize={true}
          className="border-round-2xl p-3"
        />
      </div>

      <div className="col-12">
        <CustomButton
          label={`SUMBIT`}
          className="custom-blue-button w-12"
          icon="add"
          onClick={NewRoute}
        />
      </div>
    </Forms_Style>
  );
};

export const Forms_Style = styled.div`
  .p-inputtext:enabled:hover {
    border-color: transparent;
  }

  .p-inputtext:enabled:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: none;
    border-color: #495057;
  }

  .PhoneInputCountry {
    background: #ffffff;
    margin-right: 0.02em;
    padding: 8px 16px;
    border-radius: 15px 1px 1px 15px;
    border: 1px solid #ced4da;
  }

  .PhoneInputCountrySelect {
    padding: 0.5rem;
  }

  .PhoneInputInput {
    padding: 15px;
    border-radius: 1px 15px 15px 1px;
    border: 0.7px solid #ced4da;
  }
  .PhoneInputInput:enabled:focus {
    //border-color: #495057;
    //border-color: #495057;
    //border-color: #495057;
    border: 0.1px solid #495057;
  }
`;

export default function ContactForm() {
  return (
    <div className="col-12 md:col-6 md:px-2">
      <div className="col-12">
        <Form_Input />
      </div>
    </div>
  );
}
