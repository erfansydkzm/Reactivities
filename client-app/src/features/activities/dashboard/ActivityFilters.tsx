import React from "react";
import { Header, Menu } from "semantic-ui-react";

export default function ActivityFilters() {
    return (
        <>
            <Menu vertical size="large" style={{ with: '100%', marginTop: 25 }}>
                <Header icon={'filters'} attached color="teal" content='Filters' />
                <Menu.Item content="All Activities" />
                <Menu.Item content="I'am going" />
                <Menu.Item content="I'am Hosting" />
            </Menu>
            <Header />
        </>

    )
}