import React, { useState, ChangeEvent } from 'react';
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {Dropdown} from "primereact/dropdown";

interface QuestionnaireCreationProps {
    campaignName: string;
}

const QuestionnaireCreation: React.FC<QuestionnaireCreationProps> = ({ campaignName }) => {
    const [currentQuestion, setCurrentQuestion] = useState<string>('');
    const [answerType, setAnswerType] = useState<'text' | 'select' | 'textarea' | 'checkbox' | 'radio'>('text');
    const [currentOptions, setCurrentOptions] = useState<string[]>(['']);

    const handleAddQuestion = () => {
        // Implement your logic to add a question to the selected campaign.
    };

    const handleQuestionChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentQuestion(e.target.value);
    };

    const handleAnswerTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setAnswerType(e.target.value as 'text' | 'select' | 'textarea' | 'checkbox' | 'radio');
    };

    const handleOptionsChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentOptions(e.target.value.split(','));
    };

    return (
        <div>
            <h3>Create Questionnaire for Campaign: {campaignName}</h3>
            <label>Question:</label>
            <InputText
                type="text"
                value={currentQuestion}
                onChange={handleQuestionChange}
            />
            <label>Answer Type:</label>
            <Dropdown
                value={answerType}
                options={[
                    { label: 'Text', value: 'text' },
                    { label: 'Select', value: 'select' },
                    { label: 'Text Area', value: 'textarea' },
                    { label: 'Checkbox', value: 'checkbox' },
                    { label: 'Radio', value: 'radio' }
                ]}
                onChange={(e) => setAnswerType(e.value)}
                placeholder="Select Answer Type"
            />

            {answerType === 'select' || answerType === 'checkbox' || answerType === 'radio' ? (
                <div>
                    <label>Options (comma-separated):</label>
                    <InputText
                        type="text"
                        value={currentOptions.join(',')}
                        onChange={handleOptionsChange}
                    />
                </div>
            ) : null}
            <Button onClick={handleAddQuestion}>Add Question</Button>

        </div>
    );
};

export default QuestionnaireCreation;
