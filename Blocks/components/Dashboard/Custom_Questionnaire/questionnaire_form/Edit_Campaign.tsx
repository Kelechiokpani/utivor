import {InputText} from "primereact/inputtext";
import React from "react";
import {CustomButton} from "../../../../ReusedComponent/Styled_Button";


const Edit_Campaign =({setVisible,selectedItemId,selectedItemName}:any)=>{
    return(
        <div className='mt-5'>
            <div>
                <label htmlFor="Campaign" className="block text-900 font-medium mb-2"> *Campaign</label>
                <InputText
                    id={selectedItemId}
                    defaultValue={selectedItemName}
                    type="text"
                    placeholder="Campaign title"
                    className="w-full mb-3 p-3" />
            </div>
            <div className="relative w-full flex justify-content-end">
                <CustomButton
                    label={`Cancel`}
                    className="bg-gray-500 mt-3 mr-4 w-4 h-2.1rem capitalize"
                    icon="add"
                    onClick={() => setVisible(false)}
                />
                <CustomButton
                    label={`save`}
                    className=" mt-3 w-4 h-2.1rem capitalize"
                    icon="add"
                    onClick={() => setVisible(false)}
                />
            </div>
        </div>
    )
}

export default Edit_Campaign