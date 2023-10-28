'use client';
import React, {ReactNode, useState} from 'react';
import styled from 'styled-components';
import { InputText } from 'primereact/inputtext';
import OtpInput from 'react-otp-input';
import {classNames} from "primereact/utils";

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
    props?: any;
    onChange: (name: string, value: string | {}) => void;
    onExtraUpdate: (name: string, value: string | {}) => void;
}

const OTPTextInput = ({ placeholder, onChange = () => undefined, value = '', options = {}, props = {}, label, formatValue, name, errors = {} }: IInput) => {

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     onChange(name, formatValue ? formatValue(e.target.value) : e.target.value);
    // };

    const handlePaste: React.ClipboardEventHandler = (event) => {
        const data = event.clipboardData.getData('text');
        console.log(data)
    };

    const handleChange: (event: any) => void = (event:any) => {
        const data = event?.target?.value;
        console.log(data,'hi');
    };

    return (
        <Container>
            {label && (
                <label htmlFor={name} className="block text-900 text-md font-medium mb-2">
                    {label}
                </label>
            )}

            {/*<InputText*/}
            {/*    className="p-invalid"*/}
            {/*    placeholder={placeholder} onChange={handleChange} name={name} value={value} id={name} type="text" style={{ padding: '20px' }} {...options} />*/}

            <OtpInput
                inputStyle={ classNames('p-invalid')}
                containerStyle={{ padding:"20px",}}
                inputType={"text"}
                value={value}
                onChange={handleChange}
                numInputs={4}
                renderSeparator={<span className='m-3'> </span>}
                renderInput={(props) => <InputText  name={name}  id={name}  {...props} {...options} className=' px-5 py-4 tex-900' />}
            />
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
export default OTPTextInput;
