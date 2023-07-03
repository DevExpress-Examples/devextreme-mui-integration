import { Button, Form } from "devextreme-react"
import FormControl, { useFormControlContext } from "@mui/base/FormControl"
import { FormEvent, useCallback, useState } from "react";
import TextBox from "devextreme-react/text-box";
import { Input, InputLabel, Checkbox } from "@mui/material";
import FormLabel from '@mui/material/FormLabel';
import './Mui-Form.css';
import { Item, Label } from "devextreme-react/form";
import { ClickEvent } from "devextreme/ui/button";
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
        return <Input onChange={handleMuiFormDataChange('muiInput')} />;
    }
    const handleSubmit = useCallback((event: FormEvent | ClickEvent) => {
        console.log(formData);
    }, [formData])
    return <>
        <form onSubmit={handleSubmit}>
            <Form className="form">
                <Item render={InputTemplate}>
                    <Label render={() => <FormLabel component="legend">Name</FormLabel>}></Label>
                </Item>
                <Item render={() => <TextBox label="Surname" onValueChange={handleFormDataChange('textBox')}></TextBox>} />
                <Item render={() => (<>
                    Need further instructions
                    <Checkbox onChange={handleMuiFormDataChange('checkBox')} />
                </>)} />
                < Label render={() => <InputLabel>Options</InputLabel>} />
                <Item render={() => <Button onClick={handleSubmit}>Submit</Button>}></Item>
            </Form>
        </form >
    </>
} 