"use client"
import React, {useEffect, useState} from "react"
import Image from "next/image";
import QImage from "../../../../../public/image/dashboard/Question/Q1.png"
import {useRouter} from "next/navigation";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import { Dialog } from 'primereact/dialog';
import {CustomButton} from "../../../../ReusedComponent/Styled_Button";
import {QuestionnaireCampaign} from "../../../../../types/dashboard";
import {GeneralService} from "../../../../../public/DemoData";
import Edit_Campaign from "../questionnaire_form/Edit_Campaign";
import CreateCampaign from "../questionnaire_form/Create_Campaign";
import {MdOutlineEditNote} from "react-icons/md";
import {IoArrowForwardCircleSharp} from "react-icons/io5";



const CampaignCreation = ()=> {
    const [visible, setVisible] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState('');
    const [selectedItemName, setSelectedItemName] = useState("")
    const [contact, setContact] = useState<QuestionnaireCampaign[]>([]);
    const [showForm, setShowForm] = useState(false);

    const router = useRouter();
    const WhatsappRoute = () => {
        router.push("/home/interactiveSms");
    };

    useEffect(() => {
        GeneralService?.getQuestionnaireCampaignDetails()
            .then((data:any) => {
                setContact(data);
            })
            .catch((error:any) => {
                console.error("An error occurred:", error);
            });
    }, []);


    const handleButtonClick = () => {
        setShowForm(true);
    }

    const Edit = (data: QuestionnaireCampaign) => {
        return(

                <div className='text-orange-600 text-2xl font-bold cursor-pointer'
                     onClick={() => {
                         setSelectedItemId(data?.id);
                         setSelectedItemName(data?.name);
                         setVisible(true);
                     }}><MdOutlineEditNote/></div>
        )
    };

    const View = (data: QuestionnaireCampaign) => {
        return(
                <div className='text-green-600 text-2xl font-bold cursor-pointer'
                     onClick={() => {
                         setSelectedItemId(data?.id);
                         router.push(`/home/questionnaire/new/${data?.id}`);
                     }}>
                    <IoArrowForwardCircleSharp/>
                </div>
        )
    };


    return(
        <div className="surface-section mb-5">
            <div className="mb-8 flex flex-wrap">
                <div className="w-full xl:w-5 flex align-items-center justify-content-center ">
                    <Image src={QImage} alt="sms" width={500} height={320}/>
                </div>
                <div className="w-full xl:w-7 pl-5">
                    <h3 className=" font-bold mb-4 block">Questionnaire Campaign </h3>
                    <span className=" text-900 text-1xl mb-4">Create questionnaire Campaign , and send different
                        SMS content reaching users in the ways they prefer.</span>
                    <p className=" text-orange-600 text-sm mt-4">N/B: After Creating Campaign Click on View to Create Campaign questionnaire.</p>
                    {showForm ? (
                        <CreateCampaign setShowForm={setShowForm} />
                    ) : (
                        <div className="relative w-full xl:w-30rem">
                            <CustomButton
                                label={`create Campaign`}
                                className=" mt-7 capitalize"
                                icon="add"
                                onClick={handleButtonClick}
                            />
                        </div>
                    )}
                </div>
            </div>
            <div className='card mt-4 shadow-1'>
                <h5 className='font-bold text-1xl ml-2 mt-2'> Questionnaire Campaign List</h5>
                <DataTable value={contact} tableStyle={{ minWidth: '50rem' }} className='mt-5 text-sm '>
                    <Column field="id" header="ID" style={{width:"20%"}}></Column>
                    <Column field="name" header="Campaign Title" style={{width:"40%"}}/>
                    <Column field="date" header="Date" style={{width:"30%"}}></Column>
                    <Column field="id" header="Edit"  body={Edit}  style={{width:"8%"}}/>
                    <Column field="id" header="view"  body={View}  style={{width:"8%"}}/>
                    {/*<Column field="date" header="View groups"  body={(rowData) => viewOptions(rowData?.id)}/>*/}
                </DataTable>
            </div>


            <Dialog header="Edit  Campaign" className='border-round-2xl ' visible={visible} style={{ width: '25vw' }}
                    onHide={() => {
                        setVisible(false);
                        setSelectedItemId('');
                        setSelectedItemName("");
                    }}>
                <Edit_Campaign
                    selectedItemId={selectedItemId}
                    selectedItemName={selectedItemName}
                    setVisible={setVisible}
                />

            </Dialog>
        </div>
    )
}

export default CampaignCreation