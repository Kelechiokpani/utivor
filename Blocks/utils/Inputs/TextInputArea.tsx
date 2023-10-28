'use client';
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { InputText } from 'primereact/inputtext';
import {InputTextarea} from "primereact/inputtextarea";

type name = string;
type touched = { [key in name]: boolean };
type errors = { [key in name]: string };

export interface IInput {
    icon?: ReactNode;
    inputStyle?: HTMLStyleElement;
    touched?: touched;
    name: name;
    value: string;
    formatValue?: (value: string) => string;
    errors?: errors;
    label?: string;
    placeholder: string;
    options?: any;
    onChange: (name: string, value: string | {}) => void;
    onExtraUpdate: (name: string, value: string | {}) => void;
}

const TextInputArea = ({ placeholder, onChange = () => undefined, value = '', options = {}, label, formatValue, name, errors = {} }: IInput) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(name, formatValue ? formatValue(e.target.value) : e.target.value);
    };

    return (
        <Container>
            {label && (
                <label htmlFor={name} className="block text-900 text-md font-medium mt-5 mb-2">
                    {label}
                </label>
            )}
            <InputTextarea
                rows={5}
                className="p-invalid"
                placeholder={placeholder} onChange={handleChange} name={name} value={value} id={name} type="text" style={{ padding: '20px' }} {...options} />
            <ErrorMessageContainer>
                <ErrorMessageDisplay>{ errors[name] ? errors[name] : null}</ErrorMessageDisplay>
            </ErrorMessageContainer>
        </Container>
    );
};

const Container = styled.div`
    input {
        margin-bottom: 0.7rem !important;
    }
`;
const ErrorMessageContainer = styled.div`
    margin-bottom: 0.7rem !important;
`;
const ErrorMessageDisplay = styled.div`
    color: rgba(144, 36, 36, 0.76);
    text-transform: capitalize;
    font-size: 12px;
    position: relative;
`;
export default TextInputArea;
