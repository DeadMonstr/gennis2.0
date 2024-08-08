import React, {memo, useContext, useEffect, useState} from 'react';

import {ContextStuPro} from "pages/profilePage";
import {EditableCard} from "shared/ui/editableCard";
import {Link} from "shared/ui/link";

import cls from "./teacherProfileInfo.module.sass";
import defaultUserImg from "shared/assets/images/user_image.png";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {fetchTeacherId, getTeacherId} from "../../../../teachers";
import {TeacherEdit} from "../../../../../features/profileEdits/teacherEdit";

export const TeacherProfileInfo = memo(({active,setActive}) => {

    const dispatch = useDispatch()
    const {id} = useParams()
    const teacherId = useSelector(getTeacherId)
    // const userData = useSelector(getTeacherData);



    useEffect(() => {
        if (id)
        {
            dispatch(fetchTeacherId(id))
        }

    } ,[dispatch, id])
    console.log(teacherId, "data user")
    return (
        <EditableCard
            onClick={() => setActive(true)}
            extraClass={cls.info}
            title={<i className="fas fa-edit"/>}
        >
            <div className={cls.info__avatar}>
                <img
                    className={cls.info__image}
                    src={defaultUserImg}
                    alt=""
                />
                <h1>{teacherId.user?.username}</h1>
                <h2 className={cls.info__role}>Student</h2>
            </div>
            <div className={cls.info__text}>
                <p>Ism: <span>{teacherId.user?.name}</span></p>
                <p>Familiya: <span>{teacherId.user?.surname}</span></p>
                <p>Otasinig ismi: <span>{teacherId.user?.father_name}</span></p>
                <p>Telefon raqami: <span>{teacherId.user?.phone}</span></p>
                <p>Yoshi: <span>{teacherId.user?.age}</span></p>
                <p>Tug'ilgan sana: <span>{teacherId.user?.birth_date}</span></p>
                <div className={cls.info__addInfo}>
                    <i className="fas fa-plus"/>
                </div>
            </div>
            <Link to={"/platform/teacherSalaryPage"}>
                <EditableCard
                    extraClass={cls.info__balance}
                >
                    <h2>Balans</h2>
                    <p>Summa</p>
                    <div className={cls.info__money}>
                        <h2>$ 570.000</h2>
                        <p>$ 390.000</p>
                    </div>
                </EditableCard>
            </Link>
            <TeacherEdit
                isOpen={active}
                onClose={() => setActive(false)}


            />
        </EditableCard>
    )
})