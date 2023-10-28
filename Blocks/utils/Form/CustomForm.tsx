'use client';
import React, {Fragment, ReactNode} from 'react';
import {useFormik, FormikHelpers} from 'formik';
import {Button, ButtonProps} from 'primereact/button';
import styled from 'styled-components';
import {ObjectSchema} from 'yup';
import {confirmDialog} from "primereact/confirmdialog";
import CustomField from "./CustomField";
import useWarnOnUnsavedChanges from "../lib/hooks/useWarnOnUnsavedChanges";

export interface IFormInput {
    name: string;
    options?: object;
    props?: object;
    format?: (value: any) => any;
    icon?: ReactNode;
    label?: string;
    placeholder?: string | ReactNode;
    as: any;
}

export interface IFormValues<T> {
    [key: string]: T;
}

interface IForm<T> {
    removeInput?: Array<string>;
    initialValues: IFormValues<any>;
    validationSchema?: ObjectSchema<any>;
    AfterSubmitButton?: ReactNode;
    showRestButton?: boolean
    removeRestButton?: boolean
    BeforeSubmitButton?: ReactNode;
    onSubmitFunction: (values: IFormValues<T>, formikHelpers: FormikHelpers<IFormValues<T>>) => void;
    onFormReset?: () => void;
    loading?: boolean;
    removeSubmitButton?: boolean;
    enableReinitialize?: boolean;
    formInputs: Array<IFormInput>;
    submitButtonText?: string;
    formButtonProps?: ButtonProps;
    onInputChange?: (field: string, value: string | File | object) => any;
    onExtraUpdate?: (field: string, value: string | File | object) => any;
    validateOnMount?: boolean;
}

const CustomForm = <T extends {}>({
                                      initialValues,
                                      validationSchema,
                                      AfterSubmitButton,
                                      BeforeSubmitButton,
                                      onFormReset,
                                      onSubmitFunction,
                                      loading,
                                      removeInput = [],
                                      removeSubmitButton = false,
                                      onInputChange,
                                      formButtonProps = {},
                                      removeRestButton = false,
                                      enableReinitialize,
                                      showRestButton = false,
                                      validateOnMount = true,
                                      formInputs,
                                      submitButtonText = 'Submit'
                                  }: IForm<T>) => {
    const formik = useFormik({
        validateOnMount,
        enableReinitialize,
        initialValues,
        validationSchema,
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: onSubmitFunction
    });

    const accept = () => {
        resetForm()
        onFormReset?.()
    }

    const confirmRest = () => {
        confirmDialog({
            message: 'This will clear all changes, Are you sure you want to proceed?',
            header: 'Clear Confirmation',
            acceptClassName: 'p-button-danger',
            accept,
        });
    };
    const {
        errors,
        dirty,
        resetForm,
        setErrors,
        setFieldTouched,
        values,
        setFieldValue,
        touched,
        handleBlur,
        handleSubmit,
        isValid
    } = formik;
    useWarnOnUnsavedChanges(dirty)
    return (
        <Forms_Style>
            <form onSubmit={handleSubmit}>
                {formInputs.map(({name, icon, format, label, placeholder, as, options,props}) => {
                    return (
                        !removeInput?.includes(name) && (
                            <Fragment key={name}>
                                <CustomField
                                    setErrors={setErrors}
                                    key={name}
                                    errors={errors}
                                    onBlur={handleBlur}
                                    format={format}
                                    touched={touched}
                                    label={label}
                                    options={options}
                                    props={props}
                                    value={values[name]}
                                    onChange={async (field: string, value: string) => {
                                        await setFieldValue(field, value);
                                        await setFieldTouched(field, true);
                                    }}
                                    onExtraUpdate={async (field: string, value: string) => {
                                        onInputChange?.(field, value);
                                    }}
                                    icon={icon}
                                    as={as}
                                    {...options}
                                    placeholder={placeholder}
                                    name={name}
                                />
                            </Fragment>
                        )
                    );
                })}

                <>
                    {BeforeSubmitButton}
                    {!removeSubmitButton && (
                        <div className="flex justify-content-between">
                            {AfterSubmitButton}
                            <FormButtonStyle>
                                <Button type="button" label="Cancel"
                                        outlined
                                        onClick={confirmRest}
                                        loading={loading} disabled={loading}
                                        className="custom-color w-10rem md:text-sm  font-bold"
                                        style={{
                                            display: removeRestButton ? "none" : 'initial',
                                            visibility: showRestButton ? "visible" : "hidden",
                                            border: "1px solid #302F59"
                                        }}/>
                                <Button type="submit" label={submitButtonText}
                                        loading={loading} disabled={loading} {...formButtonProps}
                                        style={{color: '#fffff', border: 'none'}}/>
                            </FormButtonStyle>
                        </div>
                    )}
                    {AfterSubmitButton}
                </>
            </form>
        </Forms_Style>
    );
};


export const Forms_Style = styled.div`
  margin-top: 3rem;
  .p-inputtext:enabled:hover {
    //border-color: transparent;
  }

  .p-inputtext:enabled:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: none;
    border-color: #495057;
  }
  `

const FormButtonStyle = styled.div`
  .p-button {
    cursor: pointer;
    border-radius: 18px;
    background: #FF7900;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
    color: white;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: normal;
    font-weight: 500;
    //font-family: Lora;
    font-size: 14px;
    line-height: normal;

    @media (max-width: 768px) {
      font-size: 14px;
      padding: 8px 16px;
    }
  }

  .p-button:hover {
    border-color: transparent;
    background: #FF7900;
  }


  .custom-color {
    span {
      color: #302F59
    }
  }
;
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin-top: 30px;
`;

export default CustomForm;
