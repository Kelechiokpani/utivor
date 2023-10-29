import React, {useEffect, useState} from "react"
import {useRouter} from "next/navigation";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {GeneralService} from "../../../../public/DemoData";
import {SmsReportData, TotalSmsReportBar} from "../../../../types/dashboard";

const SMS_REPORT = ( )=>{

    const [reportBar, setReportBar] = useState<TotalSmsReportBar[]>([]);
    const [report, setReport] = useState<SmsReportData[]>([]);

    const router = useRouter();
    const WhatsappRoute = () => {
        router.push("/home/interactiveSms");
    };

    useEffect(() => {
        GeneralService?.getSmsReportBarDataDetails()
            .then((data:any) => {
                setReportBar(data);
            })
            .catch((error:any) => {
                console.error("An error occurred:", error);
            });

        GeneralService?.getSmsReportDetails()
            .then((data:any) => {
                setReport(data);
            })
            .catch((error:any) => {
                console.error("An error occurred:", error);
            });
    }, []);

    const status = (data: SmsReportData) => {
        return(
           <>
               {data?.status  === "success" ? (
                   <span className='bg-green-700 p-1 px-3 text-white border-round-xl'>success</span>
               ) : (
                   <span className='bg-red-700 p-1 px-3 text-white border-round-xl'>failed</span>
               )}
           </>
        )
    };


    return(
        <>
            <div className="grid">
                {reportBar.map((item,index) => (
                    <div key={index} className="col-12 lg:col-6 xl:col-3">
                        <div className="card mb-0">
                            <div className="flex justify-content-between mb-3">
                                    <h6 className="text-900 font-semibold text-1xl">{item.title}</h6>
                            </div>
                            <span className="font-bold text-green-700">{item.success}</span>
                            <span className="font-bold text-red-700">{item.fail}</span>
                            <span className="font-bold text-blue-700">{item.sent}</span>
                            <span className="font-bold text-900"> {item.unitCost}</span>
                        </div>
                    </div>
                ))}
            </div>


            <div className='card mt-4 shadow-1'>
                <h5 className='font-bold text-1xl ml-2 mt-2'>SMS Report</h5>
                <DataTable value={report} tableStyle={{ minWidth: '50rem' }} className='mt-5 text-sm capitalize'>
                    <Column field="reportId" header="ID" />
                    <Column field="senderMask" header="User Account" />
                    <Column field="Recipient" header="Sender Id" />
                    <Column field="content" header="Sender Id" />
                    <Column field="status" header="Status" body={status} />
                    <Column field="cost" header="Cost" />
                    <Column field="sendingTime" header="Date" />
                    <Column field="finishingTime" header="Date" />
                </DataTable>
            </div>


        </>
    )
}



export default SMS_REPORT