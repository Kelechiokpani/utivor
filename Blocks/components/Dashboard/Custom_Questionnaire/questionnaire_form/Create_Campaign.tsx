"use client"
import {InputText} from "primereact/inputtext";
import React, {ChangeEvent, useState} from "react";
import {CustomButton} from "../../../../ReusedComponent/Styled_Button";


const CreateCampaign =({setShowForm}:any)=>{
    const [currentCampaign, setCurrentCampaign] = useState<string>('');

    const handleAddCampaign = () => {
        setCurrentCampaign('');
        setShowForm(false)
    };

    const handleCampaignNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentCampaign(e.target.value);
    };


    return(
        <div className='lg:w-8 mt-5'>
            <div>
                <label htmlFor="Campaign" className="block text-900 font-medium mb-2"> *Campaign</label>
                <InputText
                    id="name"
                    type="text"
                    placeholder="Campaign title"
                    value={currentCampaign}
                    onChange={handleCampaignNameChange}
                    className="w-full mb-3 p-3" />
            </div>
            <div className="relative w-full flex justify-content-end">
                <CustomButton
                    label={`Cancel`}
                    className="bg-gray-500 mt-3 mr-4 w-4 h-2.1rem capitalize"
                    icon="add"
                    onClick={handleAddCampaign}
                    // onClick={() => setShowForm(false)}
                />
                <CustomButton
                    label={`Create`}
                    className=" mt-3 w-4 h-2.1rem capitalize"
                    icon="add"
                    onClick={() => setShowForm(false)}
                />
            </div>
        </div>
    )
}

export default CreateCampaign