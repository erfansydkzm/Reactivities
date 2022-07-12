import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Button, Segment } from "semantic-ui-react";
import React from "react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import { Formik, Form } from "formik"
import * as yup from 'yup';
import MyTextInput from '../../../app/common/form/myTextInput';
import MyTextArea from "../../../app/common/form/MyTextArea";
import MySelectInput from "../../../app/common/form/MySelectInput";
import { categoryOptions } from "../../../app/common/options/categoryOptions";
import MyDateInput from "../../../app/common/form/myDateInput";
import { v4 as uuid } from 'uuid'
import { Activity } from "../../../app/models/activity";



export default observer(function ActivityForm() {

    const { activityStore } = useStore();
    const history = useHistory();
    const { loading, loadActivity, loadingInitial, updateActivity, createActivity } = activityStore;
    const { id } = useParams<{ id: string }>();
    const [activity, setActivity] = useState({
        id: '',
        title: '',
        category: '',
        city: '',
        venue: '',
        date: '',
        description: ''
    });
    const validationSchema = yup.object({
        title: yup.string().required('The activity title is required'),
        description: yup.string().required('The activities description is required'),
        category: yup.string().required(),
        date: yup.string().required(),
        city: yup.string().required(),
        venue: yup.string().required()
    })

    useEffect(() => {
        if (id) {
            loadActivity(id).then(activity => setActivity(activity!))
        }
    }, [id, loadActivity])

    function handleFormSubmit(activity: Activity) {
        if (activity.id.length === 0) {
            if (activity.title == "") {
                alert("Please fill input...");
            } else {
                let newActivity = {
                    ...activity,
                    id: uuid()
                };
                createActivity(newActivity).then(() =>
                    history.push(`/activities/${newActivity.id}}`));
            }

        } else {
            updateActivity(activity).then(() =>
                history.push(`/activities/${activity.id}`)
            )
        }
    }


    if (loadingInitial) return <LoadingComponent content="Loading Activity..." />
    return (
        <Segment clearing>
            <Formik validationSchema={validationSchema} enableReinitialize initialValues={activity} onSubmit={values => handleFormSubmit(values)}>
                {({ handleSubmit, isSubmitting, isValid, dirty }) => (
                    <Form className="ui form" onSubmit={handleSubmit} autoComplete='off'>
                        <MyTextInput name='title' placeholder='Title' />
                        <MyTextArea rows={3} placeholder='Description' name='description' />
                        <MySelectInput options={categoryOptions} placeholder='Category' name='category' />
                        <MyDateInput
                            placeholderText="Date"
                            name='date'
                            showTimeSelect
                            timeCaption="time"
                            dateFormat='MMMM dd, yyyy h:mm aa'
                        />
                        <MyTextInput placeholder='City' name='city' />
                        <MyTextInput placeholder='Venue' name='venue' />
                        <Button
                            loading={isSubmitting}
                            floated="right"
                            positive
                            type="submit"
                            content='Submit' />
                        <Button as={Link} to={'/activities'} floated="right" type="button" content='Cancel' />
                    </Form>
                )}
            </Formik>
        </Segment >
    )
})