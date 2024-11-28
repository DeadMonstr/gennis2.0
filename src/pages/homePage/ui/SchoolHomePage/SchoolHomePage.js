import React, {useEffect, useRef, useState} from 'react';

import {
    SchoolHomeMain,
    SchoolHomeHeader,
    SchoolHomeExtracurricus,
    SchoolHomeCertificats,
    SchoolHomeAboutUs,
    SchoolHomeContact,
    SchoolParentesComment,
    SchoolHomeGallery,
    SchoolHomeWorkUs,
    SchoolNews,
    WorkUs,
    Calendar,
    SchoolHomeContactUs,
    SchoolHomeStudentProfile,
    getSchoolProfileData,
    SchoolHomeLatestNew, SchoolHomeCurricular
} from "entities/schoolHome";

import cls from "./SchoolHomePage.module.sass";
import {Footer} from "../../../../entities/schoolHome/ui/footer/footer";
import {Contact} from "../../../../entities/centerHome";
import {useDispatch, useSelector} from "react-redux";
import {
    SchoolGalleryModal, SchoolHomeCertificatsModal,
    SchoolHomeCurriculamModal,
    SchoolHomeLatestEditModal,
    schoolHomeLatestEditModal,
    SchoolHomeLatestNewModal, SchoolHomeMainModal,
    SchoolHomeStudentEditModal,
    SchoolHomeStudentProfileModal
} from "../../../../features/schoolHome";
import {useForm} from "react-hook-form";
import {getSchoolLatestSlice} from "../../../../entities/schoolHome/model/selector/schoolLatestSelector";
import {
    SchoolLeadershipTeamModal
} from "../../../../features/schoolHome/ui/SchoolLeadershipTeamModal/SchoolLeadershipTeamModal";
import {fetchHomePage} from "../../../../entities/schoolHome/model/thunk/getHomePageSelector";
import {getHomePageType} from "../../../../entities/schoolHome/model/selector/getHomePageSelector";
import {type} from "@testing-library/user-event/dist/type";
import {getUserJob} from "../../../../entities/profile/userProfile";


export const SchoolHomePage = () => {







    const currentHeight = useRef()
    const [add, setAdd] = useState(false)
    const [edit, setEdit] = useState(false)


    const [addLatestNew, setAddLatestNew] = useState(false)



    const types = useSelector(getHomePageType)
    const job = useSelector(getUserJob)

    const dispatch = useDispatch()

    console.log(types, "types")


    useEffect(() => {
        dispatch(fetchHomePage())
    } , [])

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
            {/*    // onScroll={(e) => onScroll(e.target)}*/}
            {/*    className={cls.schoolHome__header}*/}
            {/*>*/}
            <SchoolHomeHeader ref={currentHeight}/>
            <SchoolHomeMainModal types={types}/>
            {/*</div>*/}
            <SchoolHomeExtracurricus/>
            <SchoolHomeCertificatsModal/>
            {/*<SchoolHomeCertificats/>*/}
            <SchoolHomeAboutUs/>
            <SchoolGalleryModal/>
            {/*<SchoolHomeGallery/>*/}
            <SchoolHomeWorkUs/>
            <SchoolHomeContact/>
            <SchoolHomeContactUs/>
            <SchoolParentesComment/>
            <SchoolNews/>
            <WorkUs/>
            <Calendar/>
            <Footer/>







            <SchoolHomeStudentProfileModal types={types}/>




            {/*<SchoolHomeLatestNewModal types={types}/>*/}








            <SchoolHomeCurriculamModal  type={types}/>



            {/*<SchoolLeadershipTeamModal type={types}/>*/}


        </div>
    )
}
