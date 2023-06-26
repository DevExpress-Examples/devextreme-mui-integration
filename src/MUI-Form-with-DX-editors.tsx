// import { useFormControl } from "@mui/material";
// import FormControl from '@mui/material/FormControl';
import FormControl, { useFormControlContext } from "@mui/base/FormControl"
import { FormEvent, useCallback, useState } from "react";
import TextBox from "devextreme-react/text-box";
import { CheckBox } from "devextreme-react";
import { Input } from "@mui/material";

interface FormData {
    textBox: string,
    muiInput: string,
    checkBox: boolean | null,
}

const TextBoxWrapper = ({ onValueChange }: { onValueChange: (value: string) => void }) => {
    const value = useFormControlContext()?.value as FormData;

    return <TextBox value={value.textBox} onValueChange={onValueChange} />
}

const FormComponent = () => {
    const [formData, updateFormData] = useState<FormData>({
        textBox: '',
        muiInput: '',
        checkBox: false
    });
    const handleFormDataChange = (name: string) => (value: string | boolean | null) => {
        updateFormData({ ...formData, [name]: value });
    }
    const handleMuiFormDataChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        updateFormData({ ...formData, [name]: event.target.value });
    }
    const handleSubmit = useCallback((event: FormEvent) => {
        event.preventDefault();
        console.log(formData);
    }, [formData])
    return <form onSubmit={handleSubmit}>
        <FormControl value={formData} required>
            <TextBoxWrapper onValueChange={handleFormDataChange('textBox')} />
            <CheckBox onValueChange={handleFormDataChange('checkBox')} />
            <Input onChange={handleMuiFormDataChange('muiInput')} />
            <button type="submit">Submit</button>
        </FormControl>
    </form>
}

export default FormComponent;