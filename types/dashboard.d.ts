

export interface SenderMask {
    senderId: string;
    senderMask: string;
    userName: string;
    date: string;
    status: string;
}


export interface TotalSmsReportBar {
    sent: string;
    unitCost: string;
    success: string;
    fail: string;
    title: string;
}

export interface SmsReportData {
    reportId: string;
    senderMask: string;
    Recipient: string;
    content: string;
    status: string;
    cost: string;
    sendingTime: string;
    finishingTime: string;
}


export interface Wallet {
    id: string;
    transactionId: string;
    name: string;
    amount: string;
    status: string;
    gateway: string;
    date: string;
}


export interface ContactGroup {
    id: string;
    groupName: string;
    date: string;
    contactDetails:[{
           id:string,
            fullName:string,
            phone:string,
            email:string,
            date: string;
        }
    ]
}