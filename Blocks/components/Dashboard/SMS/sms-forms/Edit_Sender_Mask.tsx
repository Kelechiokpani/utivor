import {InputText} from "primereact/inputtext";
import React from "react";
import {CustomButton} from "../../../../ReusedComponent/Styled_Button";


const Edit_Sender_Mask =({setVisible,selectedItemId,selectedItemName}:any)=>{
    return(
        <div className='mt-5'>
            <div>
                <label htmlFor="Sender Mask" className="block text-900 font-medium mb-2"> *Sender Mask</label>
                <InputText
                    id={selectedItemId}
                    defaultValue={selectedItemName}
                    type="text"
                    placeholder="Sender Mask"
                    className="w-full mb-3 p-3" />
            </div>
            <div className="relative w-full flex justify-content-end">
                <CustomButton
                    label={`Cancel`}
                    className="bg-gray-500 mt-3 mr-4 w-4 h-3rem capitalize"
                    icon="add"
                    onClick={() => setVisible(false)}
                />
                <CustomButton
                    label={`Confirm`}
                    className=" mt-3 w-4 h-3rem capitalize"
                    icon="add"
                    onClick={() => setVisible(false)}
                />
            </div>
        </div>
    )
}

export default Edit_Sender_Mask