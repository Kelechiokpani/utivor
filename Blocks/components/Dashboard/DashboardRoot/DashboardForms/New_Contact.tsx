import * as yup from "yup";
import {InferType} from "yup";
import {FormikHelpers} from "formik";
import React from "react";
import {useRouter} from "next/navigation";
import CustomForm, {IFormInput, IFormValues} from "../../../../utils/Form/CustomForm";
import TextInput from "../../../../utils/Inputs/TextInput";
import TextInputArea from "../../../../utils/Inputs/TextInputArea";



 const New_Contact = ( )=>{
    const router = useRouter();

    const inputList: Array<IFormInput> = [
        {
            name: '*Select List',
            as: TextInput,
            format: (value) => value.toLowerCase().replace(/\s/g, ''),
            options: { inputMode: 'selectList', className: 'w-full md:w-64 lg:w-96' },
            placeholder: 'select New List',
            label: 'Select List'
        },
        {
            name: 'phoneNumber',
            as: TextInputArea,
            format: (value) => value.toLowerCase().replace(/\s/g, ''),
            options: { inputMode: 'phoneNumber', className: 'w-full md:w-64 lg:w-96' },
            placeholder:"Please enter recipients' phone numbers. COMMA required between each phone number.",
            label: '*Phone Number'
        },


    ];

    const schema = yup.object({
        slug: yup.string()
            .required('slug is required')
            .test('start-with-lowercase', 'Must start with a lowercase letter', (value) => {
                if (!value) return true; // Already covered by required
                return /^[a-z]/.test(value);
            }),
    });
    type InputPayLoad = InferType<typeof schema>;

    const handleSubmit = async (payload: IFormValues<IFormInput>, helpers: FormikHelpers<IFormValues<IFormInput>>) => {
        console.log(payload)
    };

    const NewRoute = () => {

    };

    return(
        <>
            <CustomForm
                onFormReset={NewRoute}
                validateOnMount={false}
                enableReinitialize
                initialValues={{}}
                validationSchema={schema}
                onSubmitFunction={handleSubmit}
                // loading={loading}
                formInputs={inputList}
                formButtonProps={{ className: 'w-15rem flex bg-orange-600 justify-between align-content-end text-lg text-white font-bold' }}
                submitButtonText="Add New Contact"
            />

        </>
    )
}

export default New_Contact
