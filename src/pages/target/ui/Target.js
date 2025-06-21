import React from 'react';
import {Route, Routes} from "react-router";
import {TargetItemsReg} from "entities/targetItems";

const Target = () => {
    return (
        <div>
            <Routes>
                <Route path={"/form/:type"} element={<TargetItemsReg/>} />
                {/*<Route path={"/children"} element={<>} />*/}


            </Routes>
        </div>
    );
};

export default Target;