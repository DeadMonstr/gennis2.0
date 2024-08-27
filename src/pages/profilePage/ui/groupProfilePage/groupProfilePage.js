import {getTimeTable} from "entities/profile/groupProfile/model/groupProfileSelector";
import {
    fetchFilteredStudents,
    fetchFilteredStudentsAndTeachers,
    fetchFilteredTeachers,
    fetchGroupProfileTimeTable,
    fetchReasons, fetchWeekDays
} from "entities/profile/groupProfile/model/groupProfileThunk";
import {fetchRoomsData} from "entities/rooms";
import {fetchClassColors, fetchClassNumberList} from "entities/students";
import {getUserBranchId, getUserSystemId} from "entities/profile/userProfile/model/userProfileSelector";
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import classNames from "classnames";
import {useParams} from "react-router";

import {
    GroupProfileAttendanceForm,
    GroupProfileModalTeachers,
    GroupProfileTimeForm,
    GroupProfileInfoForm,
    GroupProfileStudents,
    GroupProfileDeleteForm
} from "features/groupProfile";
import {
    GroupProfileSubjectList,
    GroupProfileAttendance,
    GroupProfileStatistics,
    fetchGroupProfile,
    GroupProfileInfo,
    GroupProfileMore,
    getGroupProfileData,
    getGroupProfileLoading, GroupProfileRating
} from "entities/profile/groupProfile";
import {fetchTeachersData} from "entities/teachers";
import {fetchGroupsData} from "entities/groups";
import {DefaultPageLoader} from "shared/ui/defaultLoader";
import {fetchSubjectsAndLanguages} from "pages/registerPage";


import cls from "./groupProfilePage.module.sass";

export const GroupProfilePage = () => {

    const dispatch = useDispatch()
    const {id} = useParams()
    const data = useSelector(getGroupProfileData)
    const timeTable = useSelector(getTimeTable)
    const loading = useSelector(getGroupProfileLoading)
    const branchId = useSelector(getUserBranchId)
    const systemId = useSelector(getUserSystemId)

    const [active, setActive] = useState(false)

    useEffect(() => {
        dispatch(fetchGroupProfile({id}))
        dispatch(fetchSubjectsAndLanguages())
        dispatch(fetchTeachersData())
        dispatch(fetchGroupsData())
        dispatch(fetchReasons())
        dispatch(fetchRoomsData())
        dispatch(fetchWeekDays())
        dispatch(fetchClassColors())
        dispatch(fetchClassNumberList())
    }, [])

    // useEffect(() => {
    //     if (branchId && data) {
    //         dispatch(fetchFilteredTeachers({
    //             branch_id: branchId,
    //             subject_id: data?.subject?.id
    //         }))
    //         dispatch(fetchFilteredStudents({
    //             branch_id: branchId,
    //             subject_id: data?.subject?.id
    //         }))
    //
    //     }
    // }, [branchId, data])

    useEffect(() => {
        if (data) {
            dispatch(fetchGroupProfileTimeTable({
                group_id: data?.id
            }))
        }
    }, [data])

    useEffect(() => {
        if (branchId && data && timeTable) {
            const res = {
                time_tables: timeTable.map(item => ({
                    week: item.week.id,
                    room: item.room.id,
                    end_time: item.end_time,
                    start_time: item.start_time
                })),
                ignore_students: data?.students.map(item => item.id),
                ignore_teacher: data?.teacher.map(item => item.id)[0]
            }
            // dispatch(fetchFilteredStudentsAndTeachers({
            //     branch_id: branchId,
            //     subject_id: data?.subject?.id,
            //     res
            // }))
        }

    }, [branchId, data, timeTable])

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
                {
                    systemId === 1 ? <>
                        <GroupProfileStatistics setActive={setActive}/>
                        <GroupProfileAttendanceForm/>
                        {/*<GroupProfileAttendance/>*/}
                        <GroupProfileTimeForm/>
                        {/*<GroupProfileSubjectList/>*/}
                        <GroupProfileMore/>
                    </> : null
                }
            </div>
            <div className={classNames(cls.profile__otherContent, {
                [cls.active]: active
            })}>
                <GroupProfileRating/>
            </div>
        </div>
    )
}
