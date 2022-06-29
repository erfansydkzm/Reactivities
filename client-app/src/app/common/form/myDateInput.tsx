import { useField } from "formik";
import { Form, Label, Segment } from "semantic-ui-react";
import DatePicker, { ReactDatePickerProps } from "react-datepicker"

export default function MyDateInput(props: Partial<ReactDatePickerProps>) {
    const [field, meta, helpers] = useField(props.name!);
    return (
        <Segment>
            <Form.Field error={meta.touched && !!meta.error}>
                <DatePicker
                    {...field}
                    {...props}
                    selected={(field.value && new Date(field.value)) || null}
                    onChange={value => helpers.setValue(value)}
                />
                {meta.touched && meta.error ? (
                    <Label basic color="red">{meta.error}</Label>
                ) : null}
            </Form.Field>
        </Segment>
    )
}