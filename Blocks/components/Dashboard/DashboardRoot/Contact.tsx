"use client"
import React, {useEffect, useRef, useState} from "react";
import {useRouter} from "next/navigation";
import styled from "styled-components";
import {InputText} from "primereact/inputtext";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {Button} from "primereact/button";
import { Dialog } from 'primereact/dialog';
import { Menu } from 'primereact/menu';
import {Toast} from "primereact/toast";
import {FormikHelpers} from "formik";
import New_Contact_List from "./DashboardForms/New_Contact_List";
import New_Contact from "./DashboardForms/New_Contact";
import {GeneralService} from "../../../../public/DemoData";
import {ContactGroup} from "../../../../types/dashboard";
import {IFormInput, IFormValues} from "../../../utils/Form/CustomForm";
import {CustomButton} from "../../../ReusedComponent/Styled_Button";





const ContactScreen = () => {
    const toast = useRef<Toast>(null);
    const router = useRouter();
    const [contact, setContact] = useState<ContactGroup[]>([]);
    const [showForm, setShowForm] = useState(false);
    const [visible, setVisible] = useState(false);
    const [activeTabAction, setActiveTabAction] = useState<any>(0);
    const menuRight = useRef<Menu>(null);

    useEffect(() => {
        GeneralService?.getContactGroupDetails()
            .then((data:any) => {
                setContact(data);
            })
            .catch((error:any) => {
                console.error("An error occurred:", error);
            });
    }, []);

    const items = [
        {
            label: 'group_options',
            items: [
                {
                    label: 'Update',
                    icon: 'pi pi-pencil',
                    command: () => {
                    }
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times',
                    command: () => {
                    }
                } ,
                {
                    label: 'view contacts',
                    icon: 'pi pi-forward',
                    command: (rowData:any) => handleView(rowData?.id),
                }
            ]
        },

    ];


    const handleView = (id: string) => {
        router.push(`/home/contact/${id}`);
    };

    const handleTabClick = (index: number) => {
        setActiveTabAction(index);
    };

    const viewOptions = (contactId: any) => {
        return(
        <Button  icon="pi pi-align-right"
                onClick={(event) => menuRight?.current?.toggle(event)} aria-controls="popup_menu_right" aria-haspopup >
            <Menu model={items} popup ref={menuRight} id="popup_menu_right" popupAlignment="right" />
        </Button>
        )
    };

    const tabs = [
        "Contact List",
        "Add Manually",
        "Upload",
    ];


    const handleSubmit = async (payload: IFormValues<IFormInput>, helpers: FormikHelpers<IFormValues<IFormInput>>) => {
       console.log(payload)
        setVisible(false)
    };


    return(
        <>
            <Toast ref={toast} />
            <Wrapper className="surface-ground px-4 py-5 md:px-6 lg:px-8 mt-6">
                <div className="  py-5 flex flex-wrap gap-3 justify-content-between align-items-center mb-2 grid">

                    <div className="flex flex-column gap-2 ">
                        <h1 className="m-0 text-900 text-2xl font-medium line-height-3">Welcome back Bube!</h1>
                        <p className="mt-0 mb-0 text-600 text-sm">Here what is happening in your account today </p>
                    </div>
                </div>


                <section className="tabs relative md:px-12 lg:px-12">
                    <div>
                        <ul className="flex align-items-center  gap-3 px-1 py-1  list-none md:overflow-hidden overflow-x-auto ">
                            {tabs.map((tab:any, index:any) => (
                                <li key={tab}>
                                    <TabButton
                                        label={tab}
                                        // @ts-ignore
                                        active={activeTabAction === index}
                                        onClick={() => handleTabClick(index)}
                                    />
                                </li>
                            ))}

                        </ul>
                    </div>
                </section>

                <TabContent active={activeTabAction === 0}>
                    <div className="flex justify-content-between align-content-center align-items-center flex-auto mt-3 ">
                        <div className="p-input-icon-left w-4 p-input-filled">
                            <i className="pi pi-search"></i>
                            <InputText type="text" className="w-full" placeholder="Contact search" />
                        </div>
                        <div>
                            <span className="m-0 text-900 text-1xl font-bold line-height-3">Create  Contact List</span>
                            <CustomButton
                                label={`create List`}
                                className=" capitalize mt-2"
                                icon="add"
                                onClick={() => setVisible(true)}
                                style={{ borderRadius:"37rem"}}
                            />
                        </div>
                    </div>

                    <div className='card mt-4'>
                        <h5 className='font-bold text-1xl ml-2 mt-4'> Contacts List</h5>
                        <DataTable value={contact} tableStyle={{ minWidth: '50rem' }} className='mt-5 text-sm'>
                            <Column field="id" header="ID" style={{width:"25%"}}></Column>
                            <Column field="groupName" header="List Name" style={{width:"20%"}}></Column>
                            <Column field="Contacts" header="Contacts" style={{width:"20%"}}/>
                            <Column field="date" header="Date" style={{width:"30%"}}></Column>
                            <Column field="date" header="View groups"  body={(rowData) => viewOptions(rowData?.id)}/>
                        </DataTable>
                    </div>
                </TabContent>

                <TabContent active={activeTabAction === 1}>
                    <div className=" py-4 col-7 md:col-7">
                        <div className="font-bold  text-md mb-3">Add New Bulk Contact</div>
                        <div className="surface-card p-6 shadow-1 border-round">
                            <div className="formgrid p-fluid">
                               <New_Contact/>
                            </div>
                        </div>
                    </div>
                </TabContent>

                <TabContent active={activeTabAction === 2}>

                </TabContent>


                <Dialog header="Contact List" visible={visible}  onHide={() => setVisible(false)} className='lg:w-60rem m-2'>
                    <div className="formgrid p-fluid ">
                        <New_Contact_List setVisible={setVisible} />
                    </div>
                </Dialog>
            </Wrapper>
        </>
    )


}




const Wrapper = styled.div`
 .dashboard{
    //border-radius: 3rem;
   font-weight:bold;
   height:2.7rem;
   border-radius:10px
  }

  .card{
    padding:10px;
    border-radius:4px
  }
  
  .p-button {
    background:white;
    color:orangered;
    border:none
  }
  .p-button:hover {
    background:transparent;
    color:orangered;
    border:none
  }
  
  .p-button:focus {
    box-shadow:none;
    background:transparent;
    color:orangered;
    border:none
  }
  
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
    border: 0.1px solid #495057;
  }
`;

type TabButtonProps = {
    active: boolean;
};

const TabContent = styled.div<TabButtonProps>`
  display: ${props => (props.active ? 'block' : 'none')};
`;

const TabButton = styled(Button)<TabButtonProps>`
    outline: 0 none;
    font-size:13px;
    outline-offset: 0;
    //box-shadow: 0 0 0 0.5px #0b0c0e;
    background:  ${props => (props?.active ? '#ffffff' : 'transparent')};
    box-shadow:  ${props => (props?.active ? '#0b0c0e' : '#0b0c0e')};
    color: #000000;
  
`;


export default ContactScreen