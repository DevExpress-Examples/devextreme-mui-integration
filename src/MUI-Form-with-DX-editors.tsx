// import { useFormControl } from "@mui/material";
// import FormControl from '@mui/material/FormControl';
import FormControl, { useFormControlContext } from "@mui/base/FormControl"
import { FormEvent, useCallback, useState } from "react";
import TextBox from "devextreme-react/text-box";
import { CheckBox } from "devextreme-react";
import { Input, InputLabel } from "@mui/material";
import FormLabel from '@mui/material/FormLabel';

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
            <FormLabel component="legend">Name</FormLabel>
            <TextBoxWrapper onValueChange={handleFormDataChange('textBox')} />
            <InputLabel>Surname</InputLabel>
            <Input onChange={handleMuiFormDataChange('muiInput')} />
            <InputLabel>Options</InputLabel>
            <CheckBox onValueChange={handleFormDataChange('checkBox')} text="Need further instructions" />
            <br />
            <button type="submit">Submit</button>
        </FormControl>
    </form>
}

export default FormComponent;