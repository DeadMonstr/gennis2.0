import React, {useRef} from 'react';

import {
    SchoolHomeMain,
    SchoolHomeHeader,
    SchoolHomeExtracurricus,
    SchoolHomeCertificats,
    SchoolHomeAboutUs,
    SchoolParentesComment
} from "entities/schoolHome";

import cls from "./SchoolHomePage.module.sass";

export const SchoolHomePage = () => {

    const currentHeight = useRef()

    // const onScroll = (target) => {
    //     console.log(true)
    //     console.log(target.outerHeight, "outerHeight")
    //     console.log(target.offsetHeight, "offsetHeight")
    // }

    return (
        <div
            onWheel={(e) => {
                // console.log(e.y, "e.y")
                // console.log(e.pageY, "e.pageY")
                // console.log(e.deltaY, "e.deltaY")
                // console.log(e.clientY, "e.clientY")
                // console.log(e.offsetY, "e.offsetY")
                // console.log(e.screenY, "e.screenY")
                // onScroll(e.target)
            }}
            className={cls.schoolHome}
        >
            {/*<div*/}
            {/*    onScroll={(e) => onScroll(e.target)}*/}
            {/*    className={cls.schoolHome__header}*/}
            {/*>*/}
                <SchoolHomeHeader ref={currentHeight}/>
                <SchoolHomeMain/>
            {/*</div>*/}
            <SchoolHomeExtracurricus/>
            <SchoolHomeCertificats/>
            <SchoolHomeAboutUs/>
            <SchoolParentesComment/>
        </div>
    )
}
