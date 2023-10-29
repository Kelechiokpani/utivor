"use client"
import {InputText} from "primereact/inputtext";
import { Dropdown } from 'primereact/dropdown';
import React, {useRef, useState} from "react";
import {RadioButton} from "primereact/radiobutton";
import {InputTextarea} from "primereact/inputtextarea";
import { Calendar } from 'primereact/calendar';
import {Toast} from "primereact/toast";
import {CustomButton} from "../../../ReusedComponent/Styled_Button";



const Mask = [
    { name: 'Test One', code: 'NY' },
    { name: 'Test Two', code: 'RM' },
    { name: 'Test Three', code: 'LDN' },
    { name: 'Test Four', code: 'IST' },
];


const SMS_MESSAGE = ( )=>{
    const toast = useRef<Toast | any>(null);
    const [selectedMask, setSelectedMask] = useState(null);
    const [activeTab, setActiveTab] = useState('upload');
    const [tab, setTab] = useState('now');
    const [datetime12h, setDateTime12h] = useState<any>(null);



    return(
            <>
                <Toast ref={toast}/>
                <div className="surface-section px-4 py-6 md:px-6 lg:px-8 text-700 shadow-1">

                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-10 pr-0 lg:pr-5">
                            <span className="text-700 font-bold bg-blue-100 inline-block py-2 px-3" style={{ borderRadius: '50px' }}>Bulk Message</span>

                            <div className='mt-5'>
                                <div className='lg:w-6 mt-6'>
                                    <label htmlFor="Sender Mask" className="block text-900 font-medium mb-2"> *Sender Mask (ID)</label>
                                    <Dropdown value={selectedMask} onChange={(e) => setSelectedMask(e.value)} options={Mask} optionLabel="name"
                                              placeholder="Please choose a Sender Mask" className="w-full bg-gray-50" />
                                </div>

                                <div className='lg:w-6 mt-6'>
                                    <label htmlFor="Sender Mask" className="block text-900 font-medium mb-2"> *Campaign name </label>
                                    <InputText
                                        type="text"
                                        placeholder="Campaign Name"
                                        className="w-full mb-3 p-3 bg-gray-50" />
                                </div>
                            </div>

                            <div className='lg:w-12 mt-5'>
                                <label htmlFor="Sender Mask" className="block text-900 font-medium mb-2"> *Message Content </label>
                                <InputTextarea
                                    autoResize   rows={5} cols={30}
                                    placeholder="Please enter message content."
                                    className="w-full mb-3 p-3 bg-gray-50" />
                            </div>
                            <span> 0 / 160 characters without characters in { 0 } message(s) </span>


                            {/* tabs select*/}
                            <div className="flex flex-wrap gap-6 mt-6">
                                <div className="flex align-items-center">
                                    <RadioButton
                                        type="radio"
                                        id="upload"
                                        name="upload"
                                        value="upload"
                                        onChange={() => setActiveTab('upload')}
                                        checked={activeTab === 'upload'}
                                    />
                                    <label htmlFor="upload"   className={`ml-2 ${activeTab === 'upload' ? 'active font-bold text-blue-600' : ' '}`}>
                                        select uploaded csv
                                    </label>
                                </div>
                                <div className="flex align-items-center">
                                    <RadioButton
                                        type="radio"
                                        id="contact_List"
                                        name="contact_List"
                                        value="contact_List"
                                        onChange={() => setActiveTab('contact_List')}
                                        checked={activeTab === 'contact_List'}
                                    />
                                    <label htmlFor="contact_List"   className={`ml-2 ${activeTab === 'contact_List' ? 'active font-bold text-blue-600' : ' '}`}>
                                        select contact List
                                    </label>
                                </div>
                            </div>


                            <div className="tab-content mt-6">
                                {activeTab === 'upload' &&
                                    <div className='lg:w-6 mt-6'>Content for csv upload</div>}

                                {activeTab === 'contact_List' &&
                                    <div className='lg:w-6 mt-6'>
                                        <label htmlFor="Sender Mask" className="block text-900 font-medium mb-2"> * Contact List </label>
                                        <Dropdown value={selectedMask} onChange={(e) => setSelectedMask(e.value)} options={Mask} optionLabel="name"
                                                  placeholder="Please choose a Sender Mask" className="w-full bg-gray-50" />
                                    </div>
                                }
                            </div>

                            <div className="flex flex-wrap gap-6 mt-6">
                                <div className="flex align-items-center">
                                    <RadioButton
                                        type="radio"
                                        id="now"
                                        name="now"
                                        value="now"
                                        onChange={() => setTab('now')}
                                        checked={tab === 'now'}
                                    />
                                    <label htmlFor="now"   className={`ml-2 ${tab === 'now' ? 'active font-bold text-blue-600' : ' '}`}>
                                        Now
                                    </label>
                                </div>

                                <div className="flex align-items-center gap-7">
                                    <div>
                                        <RadioButton
                                            type="radio"
                                            id="schedule"
                                            name="schedule"
                                            value="schedule"
                                            onChange={() => setTab('schedule')}
                                            checked={tab === 'schedule'}
                                        />
                                        <label htmlFor="schedule"   className={`ml-2 ${tab === 'schedule' ? 'active font-bold text-blue-600' : ' '}`}>
                                            schedule
                                        </label>
                                    </div>
                                    {tab === 'schedule' &&
                                        <div className="flex-auto">
                                            <Calendar id="calendar-12h" placeholder='please select Time' className='w-full' value={datetime12h} onChange={(e) => setDateTime12h(e.value)} showTime hourFormat="12" />
                                        </div>
                                    }
                                </div>

                            </div>

                            <div className="relative w-full flex mt-5">
                                <CustomButton
                                    label={`Submit`}
                                    className=" mt-3 w-4 h-3rem capitalize"
                                    icon="add"
                                    // onClick={WhatsappRoute}
                                />
                            </div>
                        </div>
                        <div className="w-full lg:w-6 pl-0 lg:pl-5 pt-5">

                        </div>
                    </div>
                </div>

            </>
    )
}


export default SMS_MESSAGE