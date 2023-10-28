"use client"
import React, { useState } from 'react';
import styled from 'styled-components';
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";

interface Question {
    question: string;
    answerType: 'text' | 'select' | 'textarea' | 'checkbox' | 'radio';
    options?: string[];
}

interface Questionnaire {
    name: string;
    questions: Question[];
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const QuestionnaireContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  width: 400px;
`;

const QuestionContainer = styled.div`
  margin: 10px 0;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 100px;
`;

const CheckboxLabel = styled.label`
  display: block;
  margin: 5px 0;
`;

const RadioLabel = styled.label`
  margin-right: 10px;
`;

const Questionnaires: React.FC = () => {
    const [questionnaires, setQuestionnaires] = useState<Questionnaire[]>([]);
    const [currentQuestionnaire, setCurrentQuestionnaire] = useState<string>('');
    const [currentQuestion, setCurrentQuestion] = useState<string>('');
    const [questions, setQuestions] = useState<Question[]>([]);
    const [answerType, setAnswerType] = useState<'text' | 'select' | 'textarea' | 'checkbox' | 'radio'>('text');
    const [currentOptions, setCurrentOptions] = useState<string[]>(['']);

    const addQuestionnaire = () => {
        setQuestionnaires([...questionnaires, { name: currentQuestionnaire, questions }]);
        setCurrentQuestionnaire('');
        setQuestions([]);
    };

    const addQuestion = () => {
        setQuestions([...questions, { question: currentQuestion, answerType, options: currentOptions }]);
        setCurrentQuestion('');
        setCurrentOptions(['']);
    };

    return (
            <div className="p-4 shadow-1 border-round bg-teal-50">
                <h3 className='mt-3'>Create Questionnaire</h3>

                <div className="grid">
                    <div className="col-12 lg:col-6">
                        <div className="grid formgrid p-fluid">
                            <div className="field mb-4 col-12">
                                <label className="font-bold text-900">Campaign Name:</label>
                                <InputText
                                    type="text"
                                    value={currentQuestionnaire}
                                    onChange={(e) => setCurrentQuestionnaire(e.target.value)}
                                    className='mt-2 p-3'
                                />
                                <Button className='w-4 p-3 mt-4' onClick={addQuestionnaire}>Add Campaign</Button>
                            </div>
                            <div className="field mb-4 col-12">
                                <label className="font-bold text-900">Question:</label>
                                <InputText
                                    type="text"
                                    value={currentQuestion}
                                    onChange={(e) => setCurrentQuestion(e.target.value)}
                                    className='mt-2 p-3'
                                />
                                <label>Answer Type:</label>
                                <Select
                                    value={answerType}
                                    onChange={(e) => setAnswerType(e.target.value as 'text' | 'select' | 'textarea' | 'checkbox' | 'radio')}>
                                    <option value="text">Text</option>
                                    <option value="select">Select</option>
                                    <option value="textarea">Text Area</option>
                                    <option value="checkbox">Checkbox</option>
                                    <option value="radio">Radio</option>
                                </Select>
                                {answerType === 'select' || answerType === 'checkbox' || answerType === 'radio' ? (
                                    <div>
                                        <label>Options (comma-separated):</label>
                                        <Input
                                            type="text"
                                            value={currentOptions.join(',')}
                                            onChange={(e) => setCurrentOptions(e.target.value.split(','))}
                                        />
                                    </div>
                                ) : null}

                                <Button className='w-3 p-3 mt-4' onClick={addQuestion}>Add Question</Button>


                            </div>
                        </div>
                    </div>


                    <div className="col-12 lg:col-6">
                        <h6 className='font-bold'>Questionnaire</h6>
                        <div className='card'>
                            {questionnaires.map((q, index) => (
                                <div className='card bg-teal-300' key={index}>
                                    <h4>{q.name}</h4>
                                    {q.questions.map((question, i) => (
                                        <QuestionContainer key={i}>
                                            <p>{question.question}</p>
                                            {question.answerType === 'text' ? (
                                                <Input type="text" placeholder="Answer" />
                                            ) : question.answerType === 'select' ? (
                                                <Select>
                                                    <option value="">Select an option</option>
                                                    {question.options?.map((option, index) => (
                                                        <option key={index} value={option}>
                                                            {option}
                                                        </option>
                                                    ))}
                                                </Select>
                                            ) : question.answerType === 'textarea' ? (
                                                <TextArea placeholder="Answer"></TextArea>
                                            ) : question.answerType === 'checkbox' ? (
                                                <div>
                                                    {question.options?.map((option, index) => (
                                                        <CheckboxLabel key={index}>
                                                            <input type="checkbox" value={option} /> {option}
                                                        </CheckboxLabel>
                                                    ))}
                                                </div>
                                            ) : question.answerType === 'radio' ? (
                                                <>
                                                    {question.options?.map((option, index) => (
                                                        <RadioLabel key={index}>
                                                            <input type="radio" name={`radio_${i}`} value={option} /> {option}
                                                        </RadioLabel>
                                                    ))}
                                                </>
                                            ) : null}
                                        </QuestionContainer>
                                    ))}
                                </div>
                            ))}

                        </div>
                    </div>


                </div>


            </div>

    );
};

export default Questionnaires;
