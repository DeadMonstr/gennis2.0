import React, {createContext, useEffect, useState} from 'react';
import classNames from "classnames";
import {TeacherProfileInfo, TeacherProfileTeachersGroup} from "entities/profile/teacherProfile";
import {TeacherEdit} from "features/profileEdits/teacherEdit";
import cls from "./profileTeacherPage.module.sass"
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {fetchTeacherId, getTeacherId, changeTeacherProfileImage} from "../../../../entities/teachers";
import {ImageCrop} from "../../../../features/imageCrop";
import {changeStudentProfileImage} from "../../model/thunk/studentProfileThunk";
export const ContextStuPro = createContext(null)

export const ProfileTeacherPage = () => {

    const [active, setActive] = useState(false)
    const [actives, setActives] = useState(false)
    const dispatch = useDispatch()
    const {id} = useParams()
    const teacherId = useSelector(getTeacherId)
    const [activeModal, setActiveModal] = useState("")
    const [newImage, setNewImage] = useState("")




    const onSubmitImage = (data) => {
        // formData.append("profile_img", data)
        console.log(data, "file profile-page")
        dispatch(changeStudentProfileImage({id: teacherId.user?.id, data}))
    }


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
                    setActiveModal={setActiveModal}
                    newImage={newImage}
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
                <ImageCrop
                    setActive={setActiveModal}
                    active={activeModal === "changeImage"}
                    setNewImage={onSubmitImage}
                />

            </div>
        // </ContextStuPro.Provider>

    );
};
