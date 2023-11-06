import { FormEvent, useCallback, useState } from "react";
import DXForm, { Item as DXItem, Label as DXLabel } from "devextreme-react/form";
import DXButton, { ButtonTypes } from "devextreme-react/button";
import DXTextBox from "devextreme-react/text-box";

import notify from "devextreme/ui/notify";

import { Input as MUIInput, InputLabel as MUIInputLabel, Checkbox as MUICheckbox } from "@mui/material";
import MUIFormLabel from '@mui/material/FormLabel';

import './Mui-Form.css';

interface FormData {
    textBox: string,
    muiInput: string,
    checkBox: boolean | null,
}

export default function App() {
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
    const InputTemplate = () => {
        return <MUIInput onChange={handleMuiFormDataChange('muiInput')} />;
    }
    const handleSubmit = useCallback((event: FormEvent | ButtonTypes.ClickEvent) => {
        notify(`User ${formData.textBox} ${formData.muiInput} succesfully registered`);
    }, [formData])
    return <>
        <form onSubmit={handleSubmit}>
            <DXForm className="form">
                <DXItem render={InputTemplate}>
                    <DXLabel render={() => <MUIFormLabel component="legend">Name</MUIFormLabel>}></DXLabel>
                </DXItem>
                <DXItem>
                    <DXTextBox label="Surname" onValueChange={handleFormDataChange('textBox')}></DXTextBox>
                </DXItem>
                <DXItem render={() => (<>
                    Need further instructions
                    <MUICheckbox onChange={handleMuiFormDataChange('checkBox')} />
                </>)} />
                < DXLabel render={() => <MUIInputLabel>Options</MUIInputLabel>} />
                <DXItem render={() => <DXButton onClick={handleSubmit}>Submit</DXButton>}></DXItem>
            </DXForm>
        </form >
    </>
} 