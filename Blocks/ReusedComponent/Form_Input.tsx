import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import { CustomButton } from "./Styled_Button";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


const Services = [
  { value: "one way mobile texting", name: "One way mobile texting" },
  { value: "two way mobile texting", name: "Two way mobile texting" },
  { value: "interactiveSms business", name: "Whatsapp business" },
  { value: "sponsored ads ", name: "Sponsored ads" },
];

const Form_Input = () => {
  const [value, setValue] = useState<any>();
  const router = useRouter();

  const NewRoute = () => {
    router.push("/feedback");
  };
  return (
    <Forms_Style className="grid formgrid p-fluid mt-6">
      <div className="field mb-4 col-12 md:col-6">
        <label htmlFor="Full Name" className="font-medium text-900">
          Full Name
        </label>
        <InputText
          id="Full Name"
          type="text"
          className="border-round-2xl p-3"
        />
      </div>
      <div className="field mb-4 col-12 md:col-6">
        <label htmlFor="Organization Name" className="font-medium text-900">
          Organization Name
        </label>
        <InputText
          id="Organization Name"
          type="text"
          className="border-round-2xl p-3"
        />
      </div>
      <div className="field mb-4 col-12 md:col-12">
        <label htmlFor="Email" className="font-medium text-900">
          Email
        </label>
        <InputText id="Email" type="text" className="border-round-2xl p-3" />
      </div>

      {/*<div className="field mb-4 col-12 md:col-12 ">*/}
      {/*  <label htmlFor="Email" className="font-medium text-900">*/}
      {/*    Phone number*/}
      {/*  </label>*/}
      {/*  <PhoneInput*/}
      {/*    country="NG"*/}
      {/*    placeholder="phone number"*/}
      {/*    onChange={setValue}*/}
      {/*    inputProps={{*/}
      {/*        name: 'phone',*/}
      {/*        required: true,*/}
      {/*        autoFocus: true,*/}
      {/*        className:"w-full"*/}
      {/*    }}*/}
      {/*  />*/}
      {/*</div>*/}

      <div className="field mb-4 col-12 md:col-6">
        <label htmlFor="Service Needed" className="font-medium text-900 ">
          Service Needed
        </label>
        <Dropdown
          value={Services}
          // onChange={(e) => setSelectedCity(e.value)}
          options={Services}
          optionLabel="name"
          placeholder="select a service"
          className="w-full  border-round-2xl p-1"
        />
      </div>

      <div className="field mb-4 col-12 md:col-6">
        <label htmlFor="Website" className="font-medium text-900">
          Website
        </label>
        <InputText id="Website" type="url" className="border-round-2xl p-3" />
      </div>

      <div className="field mb-4 col-12">
        <label htmlFor="bio1" className="font-medium text-900">
          Descriptions
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
          className="custom-blue-button"
          icon="add"
          onClick={NewRoute}
        />
      </div>
    </Forms_Style>
  );
};

export const Forms_Style = styled.div`
  .p-inputtext:enabled:hover {
    border-color: #495057;
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

export default Form_Input;
