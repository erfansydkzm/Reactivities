import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import ActivityList from "./ActivityList";


export default observer(function ActivityDashboard() {
    const { activityStore } = useStore();
    const { loadActivities, activityRegistery } = activityStore;
    useEffect(() => {
        if (activityRegistery.size <= 1) loadActivities();
    }, [activityRegistery.size, loadActivities])

    if (activityStore.loadingInitial) return <LoadingComponent content='Loading App...' />

    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList />
            </Grid.Column>
            <Grid.Column width={'6'}>
                <h2>Activity Filter</h2>
            </Grid.Column>
        </Grid >
    )
})