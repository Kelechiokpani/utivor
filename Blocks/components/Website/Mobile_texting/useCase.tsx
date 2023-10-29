"use client"
import {Container} from "../../../../styles/Styled_component/StyledComponent";
import {Header_Top} from "../../../ReusedComponent/Text_Typography";
const UseCaseItems = [
    {
        id:1,
        title:"Appointment \n" +
            "Confirmations & Reminders",
        description:"Stay updated with details of your \n" +
            "next appointment. Never miss an \n" +
            "appointment ever again."
    },
    {
        id:2,
        title: "SMS Surveys & Questionnaires",
        description: "Get insights through constructive \n" +
            "feedbacks from your customers to \n" +
            "improve & grow your business."
    },
    {
        id:3,
        title: "Opt-in/Opt-Out Campaigns",
        description: "Run ethical SMS marketing by \n" +
            "allowing your audience to opt-in & \n" +
            "opt-out of receiving SMS messages"
    },
    {
        id:4,
        title: "SMS Contests",
        description: "Carry your audience along by \n" +
            "creating a poll to accept votes using a set of keywords."
    },
    {
        id:5,
        title: "Registrations\n",
        description: "Allow customers to register for your event by sending an SMS to a \n" +
            "number using a set of keywords."
    },
    {
        id:6,
        title: "Customer support",
        description: "Interacting with your customers and provide them the support they \n" +
            "require via texting."
    },
    {
        id:7,
        title: "Mass Texting ",
        description: "Reach more customers across the \n" +
            "globe faster. Build your relationships."
    },
    {
        id:8,
        title: "Trivia ",
        description: "Create single or multiple questions \n" +
            "trivia games, quiz & riddles via texting to engage your audience better."
    },
    {
        id:9,
        title: "2-Way & 1-Way Texting",
        description: "Send simple & interactive messages \n" +
            "to communicate with your audience better.\n"
    }

]


const UseCase = ( )=>{
    return (
        <Container>
            <div className=" px-4  md:px-6 lg:px-8 text-center lg:m-5">
        {/*<div className="px-4 md:px-6 lg:px-8">*/}
            <div className='p-2 m-3'>
                <Header_Top label='Use Case'/>
            </div>
            <div className="grid  text-center">
                {UseCaseItems?.map((data:any)=> (
                    <div className="col-12 md:col-6 lg:col-4 " key={data?.id}>
                        <div className="px-2  surface-card shadow-2 border-round border-orange-100 border-3 border-round p-6 py-7">
                            <div className="text-900 font-bold  text-1xl mb-2">{data?.title}</div>
                            <p className="text-800">{data?.description}.</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </Container>

    )
}


export default UseCase