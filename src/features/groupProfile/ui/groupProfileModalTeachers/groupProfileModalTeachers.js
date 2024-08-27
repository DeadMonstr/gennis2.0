import classNames from "classnames";
import {getGroupProfileFilteredTeachers} from "entities/profile/groupProfile/model/groupProfileSelector";
import {changeGroupProfile, fetchFilteredTeachers} from "entities/profile/groupProfile/model/groupProfileThunk";
import {getTeachers} from "entities/teachers";
import {getUserBranchId} from "pages/profilePage";
import {getUserSystemId} from "pages/profilePage/model/selector/userProfileSelector";
import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {useTheme} from "shared/lib/hooks/useTheme";

import {EditableCard} from "shared/ui/editableCard";
import {Input} from "shared/ui/input";
import {Table} from "shared/ui/table";
import {Modal} from "shared/ui/modal";
import {Switch} from "shared/ui/switch";
import {getGroupProfileData} from "entities/profile/groupProfile";

import cls from "./groupProfileModalTeachers.module.sass";
import defaultUserImg from "shared/assets/images/user_image.png";

export const GroupProfileModalTeachers = memo(() => {

    const userSystemId = useSelector(getUserSystemId)
    const dispatch = useDispatch()
    const {id} = useParams()
    const {theme} = useTheme()
    const profileData = useSelector(getGroupProfileData)
    const teachers = useSelector(getGroupProfileFilteredTeachers)

    const [active, setActive] = useState(false)
    const [searchValue, setSearchValue] = useState("")

    const onChangeTeacher = (teacherId) => {
        dispatch(changeGroupProfile({
            data: {teacher: [teacherId]},
            id: id,
            group_type: userSystemId === 1 ? "center" : "school"
        }))
    }

    const searched = useMemo(() => {
        console.log(teachers, "teachers")
        const filteredSlice = teachers?.slice()

        return filteredSlice?.filter(item =>
            item?.user?.name?.toLowerCase().includes(searchValue?.toLowerCase()) ||
            item?.user?.surname?.toLowerCase().includes(searchValue?.toLowerCase())
        )
    }, [teachers, searchValue])

    const renderTeachers = useCallback(() => {
        return searched?.map(item =>
            <tr>
                <td>
                    <img src={defaultUserImg} alt=""/>
                </td>
                <td>{item?.user?.name}</td>
                <td>{item?.user?.surname}</td>
                <td>
                    <div className={cls.teachersModal__wrapper}>
                        {
                            item?.subject?.map(i =>
                                <div className={cls.teachersModal__subject}>
                                    {i?.name?.slice(0, 16)}
                                </div>
                            )
                        }
                    </div>
                </td>
                <td>
                    <div className={cls.check}>
                        <Switch
                            activeSwitch={profileData?.teacher[0]?.id === item?.id}
                            onChangeSwitch={() => onChangeTeacher(item?.id)}
                        />
                        <div className={classNames(cls.status, {
                            [cls.active]: item?.extra_info?.status
                        })}>
                            <div className={classNames(cls.status__inner, {
                                [cls.active]: item?.extra_info?.status
                            })}/>
                        </div>
                    </div>
                </td>
            </tr>
        )
    }, [searched])

    const render = renderTeachers()

    return (
        <>
            <EditableCard
                extraClass={cls.teacher}
                // titleType={"beetwean"}
                title={<i className="fas fa-edit"/>}
                onClick={() => setActive(true)}
            >
                <h1>O’qituvchilari</h1>
                <div className={cls.teacher__container}>
                    <div className={cls.teacher__info}>
                        <img
                            className={cls.teacher__image}
                            src={
                                profileData?.teacher[0]?.user?.profile_img ??
                                defaultUserImg}
                            alt=""
                        />
                        <h2 className={cls.teacher__name}>
                            <span>
                            {profileData?.teacher[0]?.user?.name}
                            </span>
                            <span>
                            {profileData?.teacher[0]?.user?.surname}
                            </span>
                        </h2>
                    </div>
                    {
                        profileData?.teacher_salary ? <div className={cls.teacher__share}>
                            <p>O’qituvchi ulushi:</p>
                            <p className={cls.teacher__money}>{profileData?.teacher_salary}</p>
                        </div> : null
                    }

                </div>
            </EditableCard>
            <Modal
                active={active}
                setActive={setActive}
                extraClass={cls.teachersModal}
            >
                <Input
                    placeholder={"Search"}
                    onChange={(e) => setSearchValue(e.target.value)}
                    defaultValue={searchValue}
                />
                <div className={cls.teachersModal__container}>
                    <Table>
                        <thead>
                        <tr>
                            <th/>
                            <th>Ism</th>
                            <th>Familya</th>
                            <th>Fanlar</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {render}
                        </tbody>
                    </Table>
                </div>
            </Modal>
        </>
    )
})
