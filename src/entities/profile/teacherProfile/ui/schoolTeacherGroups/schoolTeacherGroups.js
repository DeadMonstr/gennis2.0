import React, {memo, useEffect, useState} from 'react';

import { EditableCard } from "shared/ui/editableCard";
import {groups} from "entities/profile/teacherProfile";

import cls from "./schoolTeacherGroups.module.sass";
import cardBg from 'shared/assets/icons/card-bg.svg';
import groupImage from 'shared/assets/images/group-img.svg';
import {Table} from "../../../../../shared/ui/table";
import {useDispatch, useSelector} from "react-redux";
import {getTeacherId, getTeacherGroups} from "../../../../teachers";
import {useNavigate} from "react-router";
import {Link} from "../../../../../shared/ui/link";
import {teacherGroupThunk} from "../../../../teachers/model/teacherGroupThunk";

export const SchoolTeacherGroups = memo(() => {
    const teacherData = useSelector(getTeacherId)
    const dispatch = useDispatch()
    const groups = useSelector(getTeacherGroups)
    const pathArray = window.location.pathname.split('/');
    const teacherID = pathArray[pathArray.length - 1];

    useEffect(() => {
        dispatch(teacherGroupThunk(teacherID))
    }, [])


    const schoolTeacherGroups = teacherData?.group
    const navigate = useNavigate()

    const renderStudents = () => {
        return groups?.map((item, index) => {
            return (
                <tr>
                    <td>{index + 1}</td>
                    <td>{item?.name} {item?.surname}</td>
                    <td>{item?.parent_number}</td>
                    <td>{item?.number}</td>
                    <td>{item?.debt}</td>
                </tr>
            )
        })
    }

    return (
        <div className={cls.groupsContainer}>
            {
                schoolTeacherGroups?.length === 0 ?
                    <EditableCard>
                        <h1>O'qituvchida guruhi yo'q</h1>
                    </EditableCard>
                    :
                schoolTeacherGroups?.map((item, index) => (
                        <EditableCard onClick={() => navigate(`/platform/groups/groupInfo/${item?.id}`)} extraClass={cls.classProfile}>
                            <h1>Sinfi</h1>

                            <div className={cls.classColor}></div>

                            <h1>{item?.name}</h1>

                            <h2 className={cls.info__role}>Green</h2>
                        </EditableCard>

                ))
            }


            <EditableCard extraClass={cls.classList}>
                <h1>O'quvchilar ro'yxati</h1>
                <Table>
                    <thead className={cls.theadBody}>
                    <tr>
                        <th>№</th>
                        <th>Ism familiya</th>
                        <th>Tel</th>
                        <th>Tel (ota-ona)</th>
                        <th>Qarz</th>
                    </tr>
                    </thead>
                    <tbody>
                    {renderStudents()}
                    </tbody>
                </Table>
            </EditableCard>
        </div>
    );
});
