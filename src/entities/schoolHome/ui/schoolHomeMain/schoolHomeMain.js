import React, {memo} from 'react';

import cls from "./schoolHomeMain.module.sass";
import {SchoolGallery} from "../../../shoolHome";

export const SchoolHomeMain = memo(() => {
    return (
        <div>
            <SchoolGallery/>
        </div>
    )
})
