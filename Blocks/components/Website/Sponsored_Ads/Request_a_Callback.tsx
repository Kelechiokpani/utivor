"use client"

import React from "react";
import {Header_Top} from "../../../ReusedComponent/Text_Typography";
import Form_Input from "../../../ReusedComponent/Form_Input";


const Request_a_Callback =() =>{
  return (
    <div className="px-4 py-8 md:px-6 lg:px-8">
      <div className="flex justify-content-center">
        <div className="flex flex-column">
          <div className="mb-8">
            <Header_Top label="REQUEST A CALL BACK" />
          </div>
          <div className="flex justify-content-center">
            < Form_Input/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Request_a_Callback