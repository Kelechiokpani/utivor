"use client"
import {Dropdown} from "primereact/dropdown";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import QImage from "../../../../../public/image/dashboard/Question/Q2.png"
import Image from "next/image";
import React, {ChangeEvent, useRef, useState} from "react";
import styled from "styled-components";
import {Toast} from "primereact/toast";
import {InputTextarea} from "primereact/inputtextarea";
import {Checkbox} from "primereact/checkbox";
import {RadioButton} from "primereact/radiobutton";
import {BsFillArrowLeftCircleFill} from "react-icons/bs";


type Question = {
    question: string;
    answerType: 'text' | 'dropdown' | 'textarea' | 'checkbox' | 'radio';
    options?: string[];
};



const CreateQuestions = ( )=>{
    const toast = useRef<Toast | any>(null);
    const [currentQuestion, setCurrentQuestion] = useState<string>('');
    const [answerType, setAnswerType] = useState<'text' | 'dropdown' | 'textarea' | 'checkbox' | 'radio'>('text');
    const [currentOptions, setCurrentOptions] = useState<string[]>(['']);
    const [activeTabAction, setActiveTabAction] = useState<any>(0);


    const [questionnaires, setQuestionnaires] = useState<any>([]);


    const handleAddQuestion = () => {

        if (currentQuestion.trim() === '') {
            toast.current.show({ severity: 'info', summary: 'Info', detail: 'Please enter a question.' });
        }

        const newQuestion: Question = {
            question: currentQuestion,
            answerType,
            options: answerType === 'dropdown' || answerType === 'checkbox' || answerType === 'radio' ? currentOptions : [],
        };

        setQuestionnaires([...questionnaires, newQuestion]);
        setCurrentQuestion('');
        setCurrentOptions(['']);
    }

    const showToast = (message: string) => {
        if (toast.current) {
            toast.current.show({ severity: 'info', summary: 'Info', detail: message });
        }
    };


    const handleQuestionChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentQuestion(e.target.value);
    };

    const handleAnswerTypeChange = (e: ChangeEvent<{ value: 'text' | 'dropdown' | 'textarea' | 'checkbox' | 'radio' }>) => {
        setAnswerType(e.target.value);
    };

    const handleOptionsChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentOptions(e.target.value.split(','));
    };


    const [selectedValue, setSelectedValue] = useState<string | null>(null);

    const handleDropdownChange = (e: any, index: any, optionIndex: any) => {
        setSelectedValue(e.target.value);
    };



    const tabs = [
        "New Question ",
        "Question List",
    ];
    const handleTabClick = (index: number) => {
        setActiveTabAction(index);
    };


    return(
        <div>
            <Toast ref={toast} />
            <div className="col-12 flex flex-column lg:flex-row justify-content-center align-items-center lg:justify-content-end">
                <Button className="p-button-text lg:mt-0 w-full lg:w-auto lg:px-6 flex-order-2 lg:flex-order-1 lg:mr-4" >
                    <BsFillArrowLeftCircleFill className='text-1xl mr-3'/>
                    <a href='/home/questionnaire/new' className='text-orange-600'>Return to Campaign List</a>
                </Button>
            </div>
            <Wrapper>
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
                    <div className="shadow-2 border-round-xl px-2 py-8 md:px-4 lg:px-6">
                        <div className="grid">
                            <div className="col-12 lg:col-4">
                                <div className="text-900 font-medium text-xl mb-3"> Questionnaire Campaign Details</div>
                                <Image  src={QImage} alt='QImage' width={300} className='hidden lg:flex'/>
                            </div>

                            <div className="col-12 lg:col-8">
                                <div className="grid formgrid p-fluid">

                                    <h4>Create Question: </h4>
                                    <div className="field mb-4 col-12">
                                        <label htmlFor="Question" className="font-medium text-900">Question:</label>
                                        <InputText id="question" type="text"
                                                   className='p-3'
                                                   value={currentQuestion}
                                                   onChange={handleQuestionChange}/>
                                    </div>

                                    <div className="field mb-4 col-12 md:col-12 mt-3">
                                        <label htmlFor="country1" className="font-medium text-900">Answer Type</label>
                                        <Dropdown inputId="answer"
                                                  optionLabel="label"
                                                  filter filterBy="label"
                                                  showClear
                                                  className='p-1'
                                                  options={[
                                                      { label: 'Text', value: 'text' },
                                                      { label: 'Text Area', value: 'textarea' },
                                                      { label: 'Checkbox', value: 'checkbox' },
                                                      { label: 'Radio', value: 'radio' },
                                                      { label: 'dropdown', value: 'dropdown' }
                                                  ]}
                                                  value={answerType}
                                                  onChange={(e:any) => handleAnswerTypeChange(e)}
                                                  placeholder="Select Answer Type"
                                                  itemTemplate={(option) =>
                                                      <div className="flex align-items-center">
                                                          <div>{option.label}</div>
                                                      </div>}
                                        />

                                    </div>

                                    <div className='field mb-4 col-12 md:col-12 mt-3'>
                                        {answerType === 'dropdown' || answerType === 'checkbox' || answerType === 'radio' ? (
                                            <div>
                                                <label>Options (comma-separated):</label>
                                                <InputText
                                                    type="text"
                                                    className='mt-3'
                                                    value={currentOptions.join(',')}
                                                    onChange={handleOptionsChange}
                                                />
                                            </div>
                                        ) : null}
                                        <div className="col-12">
                                            <Button
                                                className="w-auto mt-3 bg-orange-400"
                                                onClick={handleAddQuestion}>Add Question</Button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="col-12 lg:col-8 border-round-1xl shadow-1 mt-6">
                            <h6 className="font-bold mt-3">Questionnaire Preview</h6>
                            <div className="card border-none">
                                {questionnaires.map((q:any, index:any) => (
                                    <div className="card bg-teal-300" key={index}>
                                        <h6 className='font-bold'>{q.question}</h6>
                                        {q.answerType === "text" ? (
                                            <InputText placeholder="Answer" className='w-full'/>
                                        ) : q.answerType === "textarea" ? (
                                            <InputTextarea placeholder="Answer" className='w-full' rows={5}/>
                                        ) : q.answerType === "checkbox" ? (
                                            <div>
                                                {q.options?.map((option:any, optionIndex:any) => (
                                                    <div key={optionIndex} className='m-3'>
                                                        <Checkbox style={{width:"30px"}} checked={false}  value={option} inputId={`chk_${index}_${optionIndex}`} />
                                                        <label className='ml-1' htmlFor={`chk_${index}_${optionIndex}`}>{option}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : q.answerType === "radio" ? (
                                            <div>
                                                {q.options?.map((option:any, optionIndex:any) => (
                                                    <div key={optionIndex} className='m-3'>
                                                        <RadioButton  style={{width:"30px"}} value={option} inputId={`rad_${index}_${optionIndex}`} name={`rad_${index}`} />
                                                        <label  className='ml-1' htmlFor={`rad_${index}_${optionIndex}`}>{option}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        ) :q.answerType === "dropdown" ? (
                                            <div>
                                                {q.options?.map((option:any, optionIndex:any) => (
                                                    <div key={optionIndex}>
                                                        <Dropdown
                                                            options={q.options}
                                                            value={selectedValue}
                                                            onChange={(e) => handleDropdownChange(e, index, optionIndex)}
                                                            inputId={`rad_${index}_${optionIndex}`}
                                                            name={`rad_${index}`}
                                                        />
                                                        <label htmlFor={`rad_${index}_${optionIndex}`}>{option.label}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        ): null}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                 </TabContent>


                <TabContent active={activeTabAction === 1}>

                </TabContent>
            </Wrapper>


        </div>
    )
}


const QuestionContainer = styled.div`
  margin: 10px 0;
`;


const Wrapper = styled.div`
  .dashboard {
    //border-radius: 3rem;
    font-weight: bold;
    height: 2.7rem;
    border-radius: 10px
  }

  .card {
    padding: 10px;
    border-radius: 4px
  }

  .p-button {
    background: transparent;
    color: #000000;
    border: none
  }

  .p-button:hover {
    background: #FF7900;
    color: #ffffff;
    border: none;
  }

  .p-button:focus {
    box-shadow: none;
    background: transparent;
    color: #FF7900;
    border: none
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
     background: orangered;
    //box-shadow: 0 0 0 0.5px #0b0c0e;
    // background:  ${props => (props?.active ? 'transparent' : 'orangered')};
    box-shadow:  ${props => (props?.active ? '#0b0c0e' : '#0b0c0e')};
    color: #000000;
  
`;


export default CreateQuestions