import {InputText} from "primereact/inputtext";
import {CustomButton} from "../../../ReusedComponent/Styled_Button";
import React from "react";


const Create_Sender_Mask =({setShowForm}:any)=>{
    return(
        <div className='lg:w-8 mt-5'>
            <div>
                <label htmlFor="Sender Mask" className="block text-900 font-medium mb-2"> *Sender Mask</label>
                <InputText
                    id="senderMask"
                    type="text"
                    placeholder="Sender Mask"
                    className="w-full mb-3 p-3" />
            </div>
            <div className="relative w-full flex justify-content-end">
                <CustomButton
                    label={`Cancel`}
                    className="bg-gray-500 mt-3 mr-4 w-4 h-3rem capitalize"
                    icon="add"
                    onClick={() => setShowForm(false)}
                />
                <CustomButton
                    label={`Confirm`}
                    className="custom-blue-button mt-3 w-4 h-3rem capitalize"
                    icon="add"
                    onClick={() => setShowForm(false)}
                />
            </div>
        </div>
    )
}

export default Create_Sender_Mask