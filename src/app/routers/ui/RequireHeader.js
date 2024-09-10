import React from 'react';
import {Header} from "widgets/header";
import {Outlet} from "react-router";

import BackButton from "shared/ui/backButton/backButton";

const RequireHeader = ({header = true}) => {




    return (
        <>
            {header ? <Header/> : <BackButton/>}
            <Outlet/>
        </>

    );
};

export default RequireHeader;