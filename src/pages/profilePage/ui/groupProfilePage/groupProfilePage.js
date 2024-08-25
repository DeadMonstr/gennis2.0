import {fetchGroupsData} from "entities/groups";
import {fetchTeachersData} from "entities/teachers";
import {GroupProfileDeleteForm} from "features/groupProfile/ui/groupProfileDeleteForm/groupProfileDeleteForm";
import {fetchSubjectsAndLanguages} from "pages/registerPage";
import React, {useEffect, useState} from 'react';
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";

import {
    GroupProfileAttendanceForm,
    GroupProfileModalTeachers,
    GroupProfileTimeForm,
    GroupProfileInfoForm,
    GroupProfileStudents
} from "features/groupProfile";
import {
    GroupProfileSubjectList,
    GroupProfileAttendance,
    GroupProfileStatistics,
    fetchGroupProfile,
    GroupProfileInfo,
    GroupProfileMore,
    getGroupProfileData,
    getGroupProfileLoading
} from "entities/profile/groupProfile";
import {DefaultPageLoader} from "shared/ui/defaultLoader";

import cls from "./groupProfilePage.module.sass";

export const GroupProfilePage = () => {

    const dispatch = useDispatch()
    const {id} = useParams()
    const loading = useSelector(getGroupProfileLoading)

    const [active, setActive] = useState(false)

    useEffect(() => {
        dispatch(fetchGroupProfile(id))
        dispatch(fetchSubjectsAndLanguages())
        dispatch(fetchTeachersData())
        dispatch(fetchGroupsData())
    }, [])

    if (loading) {
        return <DefaultPageLoader/>
    } else return (
        <div className={cls.profile}>
            <GroupProfileInfoForm/>
            {/*<GroupProfileInfo/>*/}
            <div
                className={classNames(cls.profile__mainContent, {
                    [cls.active]: active
                })}
            >
                <GroupProfileModalTeachers/>
                {/*<GroupProfileTeacher setActive={setActiveModal}/>*/}
                <GroupProfileDeleteForm/>
                {/*<GroupProfileStudents/>*/}
                <GroupProfileStatistics/>
                <GroupProfileAttendanceForm/>
                {/*<GroupProfileAttendance/>*/}
                <GroupProfileTimeForm/>
                {/*<GroupProfileSubjectList/>*/}
                <GroupProfileMore/>
            </div>
        </div>
    )
}
