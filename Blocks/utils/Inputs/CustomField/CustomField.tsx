import {FormikProps} from "formik";
import React from "react";
import {IFormValues} from "../../Form/CustomForm";

interface CustomFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    formik: FormikProps<IFormValues<any>>;
    as?: React.ElementType;
    // ... any other custom props you may have
}

const CustomField: React.FC<CustomFieldProps> = ({ name, formik, as = 'input', ...otherProps }) => {
    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        await formik.setFieldValue(name, e.target.value);
        await formik.setFieldTouched(name, true);
    };

    const handleBlur = formik.handleBlur;

    return React.createElement(
        as,
        {
            ...otherProps,  // All other props are spread here
            name,
            value: formik.values[name],
            onChange: handleChange,
            onBlur: handleBlur,
        }
    );
};

export default CustomField
