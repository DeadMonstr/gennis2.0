import React, {createContext, useEffect, useState} from 'react';
import classNames from "classnames";
import {TeacherProfileInfo, TeacherProfileTeachersGroup} from "entities/profile/teacherProfile";
import {TeacherEdit} from "features/profileEdits/teacherEdit";
import cls from "./profileTeacherPage.module.sass"
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {fetchTeacherId, getTeacherId} from "../../../../entities/teachers";
export const ContextStuPro = createContext(null)

export const ProfileTeacherPage = () => {

    const [active, setActive] = useState(false)
    const [actives, setActives] = useState(false)
    const dispatch = useDispatch()
    const {id} = useParams()
    const teacherId = useSelector(getTeacherId)
    // const userData = useSelector(getTeacherData);


    //
    // useEffect(() => {
    //     if (id)
    //     {
    //         dispatch(fetchTeacherId(id))
    //     }
    //
    // } ,[dispatch, id])
    // console.log(teacherId, "data user")





    return (
        // <ContextStuPro.Provider value={}>
            <div
                className={classNames(cls.profile, {
                    [cls.active]: active
                })}
            >
                <TeacherProfileInfo
                    setActive={setActive}
                    active={active}
                />

                {/*// actives={actives}*/}
                {/*// setActives={setActives}*/}

                {/*<ProfileInfo*/}
                {/*    setActive={setActive}*/}
                {/*    active={active}*/}
                {/*/>*/}
                <div
                    className={classNames(cls.profile__mainContent, {
                        [cls.active]: active
                    })}
                >
                    <TeacherProfileTeachersGroup/>
                </div>

            </div>
        // </ContextStuPro.Provider>

    );
};
