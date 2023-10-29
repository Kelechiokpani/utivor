import React, {useEffect, useState} from "react"
import Image from "next/image";
import SMSImage from  "../../../public/dashboard/SMS/img.png"
import {useRouter} from "next/navigation";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import { Dialog } from 'primereact/dialog';
import Create_Sender_Mask from "./sms-forms/Create_Sender_Mask";
import Edit_Sender_Mask from "./sms-forms/Edit_Sender_Mask";
import {GeneralService} from "../../../../public/DemoData";
import {SenderMask} from "../../../../types/dashboard";
import {CustomButton} from "../../../ReusedComponent/Styled_Button";



const Sms_App = ()=> {
    const [visible, setVisible] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState('');
    const [selectedItemName, setSelectedItemName] = useState("")
    const [contact, setContact] = useState<SenderMask[]>([]);
    const [showForm, setShowForm] = useState(false);
    const router = useRouter();
    const WhatsappRoute = () => {
        router.push("/home/interactiveSms");
    };

    useEffect(() => {
        GeneralService?.getSenderMaskDetails()
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

    const Edit = (data: SenderMask) => {
        return(
            <>
                <div className='text-orange-600 font-bold cursor-pointer'
                     onClick={() => {
                         setSelectedItemId(data?.senderId);
                         setSelectedItemName(data?.senderMask);
                         setVisible(true);
                     }}>Edit</div>
            </>
        )
    };



    return(
        <div className="surface-section mb-5">
            <div className="mb-8 flex flex-wrap">
                <div className="w-full xl:w-5 flex align-items-center justify-content-center ">
                    <Image src={SMSImage} alt="sms" width={300} height={200}/>
                </div>
                <div className="w-full xl:w-7 pl-5">
                    <h3 className=" font-bold mb-4 block">SMS APP</h3>
                    <span className=" text-900 text-1xl mb-4">Create different SMS applications, and send different
                        SMS content reaching users in the ways they prefer.</span>
                    {showForm ? (
                          <Create_Sender_Mask setShowForm={setShowForm} />
                        ) : (
                    <div className="relative w-full xl:w-30rem">
                        <CustomButton
                            label={`Request Sender Mask`}
                            className=" mt-7 capitalize"
                            icon="add"
                            onClick={handleButtonClick}
                        />
                    </div>

                        )}

                    </div>
                </div>
            <div className='card mt-4 shadow-1'>
                <h5 className='font-bold text-1xl ml-2 mt-2'> Sender Mask List</h5>
                <DataTable value={contact} tableStyle={{ minWidth: '50rem' }} className='mt-5 text-sm capitalize'>
                    <Column field="senderId" header="ID" style={{width:"20%"}}></Column>
                    <Column field="userName" header="User Account" style={{width:"20%"}}/>
                    <Column field="senderMask" header="Sender Id" style={{width:"20%"}}></Column>
                    <Column field="status" header="Status" style={{width:"20%"}}></Column>
                    <Column field="date" header="Date" style={{width:"30%"}}></Column>
                    <Column field="date" header="Operation"  body={Edit}/>
                    {/*<Column field="date" header="View groups"  body={(rowData) => viewOptions(rowData?.id)}/>*/}
                </DataTable>
            </div>


            <Dialog header="Edit Sender Mask" className='border-round-3xl ' visible={visible} style={{ width: '25vw' }}
                    onHide={() => {
                        setVisible(false);
                        setSelectedItemId('');
                        setSelectedItemName("");
                    }}>

                         <Edit_Sender_Mask
                             selectedItemId={selectedItemId}
                             selectedItemName={selectedItemName}
                             setVisible={setVisible}
                         />

            </Dialog>


        </div>
    )
}

export default Sms_App