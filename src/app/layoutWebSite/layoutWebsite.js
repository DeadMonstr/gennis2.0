import React from 'react';
import {SchoolHomeHeader} from "../../entities/schoolHome";
import {Outlet} from "react-router";

const LayoutWebsite = () => {
    return (
        <div style={{width: "100%"}}>
            <SchoolHomeHeader/>
            <Outlet/>
        </div>
    );
};

export default LayoutWebsite;