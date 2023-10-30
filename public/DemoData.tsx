import {QuestionnaireCampaign} from "../types/dashboard";

export const GeneralService:any = {
    getWalletData() {
        return [
            {
                id: '1000',
                transactionId: 'f230fh0g3',
                name: 'Chinedu Wilbert',
                amount: 6500,
                status: "failed",
                gateway: "PayStack",
                date: "20-10-2023",
            },
            {
                id: '1001',
                transactionId: 'h0g3f230f',
                code: 'nvklal433',
                name: 'Okafor John',
                amount: 7500,
                status: "successes",
                gateway: "FlutterWave",
                date: "20-10-2023",
            },
        ]
    },

    getContactGroup() {
        return [
            {
                id: 1,
                Contacts: 10,
                groupName: 'KreativeRock',
                date: "20-10-2023",
                contactDetails:[
                    {
                        id: 11,
                        fullName:"Bianca Ojukwu",
                        email:"bibi@gmail.com",
                        phone:"080912345879",
                        date: "10-10-2023",
                    },
                    {
                        id: 22,
                        fullName:"Ojukwu Bianca ",
                        email:"bibid@gmail.com",
                        phone:"080912335879",
                        date: "10-10-2023",
                    }
                ]
            },
            {
                id: 2,
                Contacts: 22,
                groupName: 'KreativeRock',
                date: "20-10-2023",
                contactDetails:[]
            },
            {
                id: 3,
                Contacts: 32,
                groupName: 'Kreative-Tesst',
                date: "10-10-2023",
                contactDetails:[]
            },

        ]
    },

    getSenderMaskData() {
        return [
            {
                senderId: 'sjdkhkjs',
                userName: 'Chinedu Wilbert',
                senderMask: 'KaceTechs',
                status: "pending",
                date: "20-10-2023",
            },
            {
                senderId: 'shkuhskdh',
                userName: 'Chinedu Wilbert',
                senderMask: 'Kace Technology',
                status: "approved",
                date: "10-10-2023",
            },
        ]
    },

    getSmsReportBarData() {
        return [
            {
                success: 3,
                title: "success Messages",
            },
            {
                fail: 4,
                title: "failed Messages",
            },
            {
                sent: 2,
                title: "sent Messages",
            },
            {
                unitCost: 60,
                title: "SMS Cost",

            },
        ]
    },

    getSmsReportData() {
        return [
            {
                reportId: "wjhfrenfkej",
                senderMask: "Test One",
                Recipient: "08187832884345",
                content: "testing sms demo",
                status: "failed",
                cost: 0,
                sendingTime: "18-12-2021",
                finishingTime: "20-12-2021",
            },
            {
                reportId: "wjhfrenfkej",
                senderMask: "Test Two",
                Recipient: "08187832884345",
                content: "testing sms",
                status: "success",
                cost: 2,
                sendingTime: "18-12-2021",
                finishingTime: "20-12-2021",
            },

        ]
    },

    getQuestionnaireCampaignData() {
        return [
            {
                id: 'sjdkhkjs',
                name: 'KaceTechs',
                date: "20-10-2023",
            },
            {
                id: 'shkuhskdh',
                name: 'Kace Technology',
                date: "10-10-2023",
            },
        ]
    },








    getWalletDetails() {
        return Promise.resolve(this.getWalletData().slice(0, 10));
    },

    getContactGroupDetails() {
        return Promise.resolve(this.getContactGroup().slice(0, 10));
    },

    getSenderMaskDetails() {
        return Promise.resolve(this.getSenderMaskData().slice(0, 10));
    },

    getSmsReportBarDataDetails() {
        return Promise.resolve(this.getSmsReportBarData().slice(0, 10));
    },

    getSmsReportDetails() {
        return Promise.resolve(this.getSmsReportData().slice(0, 10));
    },

    getQuestionnaireCampaignDetails() {
        return Promise.resolve(this.getQuestionnaireCampaignData().slice(0, 10));
    },
}