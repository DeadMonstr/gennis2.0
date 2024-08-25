import {useEffect, useState} from 'react';
import classNames from "classnames";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";

import {ImageCrop} from "features/imageCrop";
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
    StudentProfileChangeInfo,
    StudentProfileContract,
    StudentProfileAttendanceAll
} from "entities/profile/studentProfile";
import {
    fetchStudentProfileData,
    changeStudentProfileData, changeStudentProfileImage
} from "../../model/thunk/studentProfileThunk";
import {getUserData} from "../../model/selector/studentProfileSelector";

import cls from "./studentProfilePage.module.sass";

export const StudentProfilePage = () => {

    const formData = new FormData()
    const {register, handleSubmit} = useForm()
    const dispatch = useDispatch()
    const {id} = useParams()
    const [selectedSubject, setSelectedSubject] = useState(null)
    const [selectedGroup, setSelectedGroup] = useState(null)
    const [selectedGroupName, setSelectedGroupName] = useState("")
    const userData = useSelector(getUserData)
    const student_id = userData?.id
    const branch_id = userData?.user?.branch.id
    const group_id = userData?.group
    const [active, setActive] = useState(false)
    const [activeModal, setActiveModal] = useState("")
    const [actives,setActives] = useState(false)
    const [newImage, setNewImage] = useState("")

    useEffect(() => {
        dispatch(fetchStudentProfileData(id))
    }, [id])

    // if (!userData || !userData.user) {
    //     return <div>Loading...</div>;
    // }

    const onSubmitData = (data) => {
        const res = {
            user: {
                ...data
            }
        }
        dispatch(changeStudentProfileData({id, res}))
    }

    const onSubmitImage = (data) => {
        console.log(data, "file profile-page")
        dispatch(changeStudentProfileImage({id: userData?.user?.id, data}))
    }

    console.log(userData, "student ")
    console.log(selectedGroup, "branc id")

    return (
        <div
            className={classNames(cls.profile)}
        >
            <StudentProfileInfo
                setActive={setActive}
                active={active}
                setActiveModal={setActiveModal}
                data={userData?.user}
                newImage={newImage}
            />
            <div
                className={classNames(cls.profile__mainContent, {
                    [cls.active]: active
                })}
            >
                <StudentProfileTeachers data={userData?.group}/>
                <StudentProfileRating setActive={setActive}/>
                <StudentProfileReward/>
                <StudentProfileSubjects
                    setActive={setActive}
                    data={userData?.group}
                    onSelectSubject={setSelectedSubject}
                />
                <StudentProfileAttendance
                    setActive={setActive}
                    data={userData?.group}
                    onSelectGroup={setSelectedGroup}
                    onSelectGroupName={setSelectedGroupName}
                />
            </div>
            <div
                className={classNames(cls.profile__otherContent, {
                    [cls.active]: active
                })}
            >
                <StudentProfileContract
                    setActive={setActive}
                    active={active}
                />
                <StudentProfileTotalAmount
                    active={active}
                    setActive={setActive}
                    student_id={student_id}
                    branch_id={branch_id}
                    group_id={group_id}
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
                    selectedSubject={id}
                />
                <StudentProfileTotalAttendance
                    active={active}
                    setActive={setActive}
                    selectedGroup={selectedGroup}
                    selectedGroupName={selectedGroupName}
                />
                <StudentProfileAttendanceAll
                    active={active}
                    setActive={setActive}

                />
            </div>
            <ImageCrop
                setActive={setActiveModal}
                active={activeModal === "changeImage"}
                setNewImage={onSubmitImage}
            />
            <StudentProfileChangeInfo
                setActive={setActiveModal}
                active={activeModal === "changeInfo"}
                register={register}
                onSubmit={handleSubmit(onSubmitData)}
                currentData={userData?.user}
            />
        </div>
    )
}
