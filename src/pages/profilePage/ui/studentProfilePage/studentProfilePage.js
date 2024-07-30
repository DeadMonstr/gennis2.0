import {useEffect, useState} from 'react';
import classNames from "classnames";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";

import {
    StudentProfileInfo,
    StudentProfileRating,
    StudentProfileReward,
    StudentProfileSubjects,
    StudentProfileTeachers,
    StudentProfileAmountPath,
    StudentProfileAttendance,
    StudentProfileTotalRating,
    StudentProfileTotalAmount,
    StudentProfileGroupsHistory,
    StudentProfileTotalAttendance,
    StudentProfileChangeImage, StudentProfileChangeInfo
} from "entities/profile/studentProfile";
import {fetchStudentProfileData} from "../../model/thunk/studentProfileThunk";
import {getUserData} from "../../model/selector/studentProfileSelector";

import cls from "./studentProfilePage.module.sass";

export const StudentProfilePage = () => {

    const {register, handleSubmit} = useForm()
    const dispatch = useDispatch()
    const {id} = useParams()

    const userData = useSelector(getUserData)

    const [active, setActive] = useState(false)
    const [activeModal, setActiveModal] = useState("")
    const [newImage, setNewImage] = useState("")

    useEffect(() => {
        dispatch(fetchStudentProfileData(id))
    }, [id])

    console.log(userData, "all")

    const onSubmitData = (data) => {
        console.log(data, "data info")
    }


    return (
        <div
            className={classNames(cls.profile)}
        >
            <StudentProfileInfo
                setActive={setActive}
                setActiveModal={setActiveModal}
                data={userData?.user}
                newImage={newImage}
            />
            <div
                className={classNames(cls.profile__mainContent, {
                    [cls.active]: active
                })}
            >
                <StudentProfileTeachers/>
                <StudentProfileRating setActive={setActive}/>
                <StudentProfileReward/>
                <StudentProfileSubjects
                    setActive={setActive}
                    data={userData?.subject}
                />
                <StudentProfileAttendance setActive={setActive}/>
            </div>
            <div
                className={classNames(cls.profile__otherContent, {
                    [cls.active]: active
                })}
            >
                <StudentProfileTotalAmount
                    active={active}
                    setActive={setActive}
                />
                <StudentProfileAmountPath
                    active={active}
                    setActive={setActive}
                />
                <StudentProfileTotalRating
                    active={active}
                    setActive={setActive}
                />
                <StudentProfileGroupsHistory
                    active={active}
                    setActive={setActive}
                />
                <StudentProfileTotalAttendance
                    active={active}
                    setActive={setActive}
                />
            </div>
            <StudentProfileChangeImage
                setActive={setActiveModal}
                active={activeModal === "changeImage"}
                setNewImage={setNewImage}
            />
            <StudentProfileChangeInfo
                setActive={setActiveModal}
                active={activeModal === "changeInfo"}
                register={register}
                onSubmit={handleSubmit(onSubmitData)}
            />
        </div>
    )
}
