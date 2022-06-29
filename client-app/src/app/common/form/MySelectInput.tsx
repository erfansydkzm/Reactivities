import { useField } from "formik";
import React from "react";
import { Form, Label, Segment, Select } from "semantic-ui-react";

interface Props {
    placeholder: string;
    name: string;
    options: any;
    label?: string;
}

export default function MySelectInput(props: Props) {
    const [field, meta, helpers] = useField(props.name);
    return (
        <Segment>
            <Form.Field error={meta.touched && !!meta.error}>
                <label>{props.label}</label>
                <Select 
                clearable 
                options={props.options} 
                onChange={(e, d) => helpers.setValue(d.value)} 
                value={field.value || null} 
                placeholder={props.placeholder} 
                onBlur={() => helpers.setTouched(true)} />
                {meta.touched && meta.error ? (
                    <Label basic color="red">{meta.error}</Label>
                ) : null}
            </Form.Field>
        </Segment>
    )
}