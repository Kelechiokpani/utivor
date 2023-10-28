import React from "react"
import {useRouter} from "next/navigation";
import * as yup from "yup";
import {InferType} from "yup";
import {FormikHelpers} from "formik";
import CustomForm, {IFormInput, IFormValues} from "../../../../utils/Form/CustomForm";
import TextInput from "../../../../utils/Inputs/TextInput";



const New_Contact_List = ({setVisible}:any )=>{
    const router = useRouter();
    const inputList: Array<IFormInput> = [
        {
            name: 'createList',
            as: TextInput,
            format: (value) => value.toLowerCase().replace(/\s/g, ''),
            options: { inputMode: 'createList', className: 'w-full md:w-64 lg:w-96 mb-6 ' },
            placeholder: 'create New List',
            label: 'Create List'
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
        setVisible(false)
    };

    return (
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
                formButtonProps={{ className: 'w-15rem flex justify-between align-content-end text-lg text-white font-bold' }}
                submitButtonText="create List"
            />
        </>
    )
}


export default New_Contact_List