import React from 'react';

import {
    SchoolHomeMain,
    SchoolHomeHeader, SchoolHomeExtracurricus
} from "entities/schoolHome";

import cls from "./SchoolHomePage.module.sass";

export const SchoolHomePage = () => {

    const onScroll = (target) => {
        console.log(target.capHeight, "capHeight")
        console.log(target.offsetHeight, "offsetHeight")
    }

    return (
        <div
            // onScroll={(e) => onScroll(e.target)}
            className={cls.schoolHome}
        >
            <div
                // onScroll={(e) => onScroll(e.target)}
                className={cls.schoolHome__header}
            >
                <SchoolHomeHeader/>
                <SchoolHomeMain/>
            </div>
            <SchoolHomeExtracurricus/>
        </div>
    )
}
