import React, {createContext, useEffect, useState} from 'react';
import classNames from "classnames";
import cls from "./employerPage.module.sass"
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {fetchEmployerId, getEmployerId, getEmployerLoading} from "../../../../entities/profile/employerProfile";
import {ImageCrop} from "../../../../features/imageCrop";
import {changeEmployerProfileImage} from "../../../../entities/profile/employerProfile";
import {EmployerProfileInfo} from "../../../../entities/profile/employerProfile";
import {DefaultLoader} from "../../../../shared/ui/defaultLoader";
export const ContextStuPro = createContext(null)

export const ProfileEmployerPage = () => {

    const [active, setActive] = useState(false)
    const [actives, setActives] = useState(false)
    const dispatch = useDispatch()
    const {id} = useParams()
    const employerId = useSelector(getEmployerId)
    const [activeModal, setActiveModal] = useState("")
    const [newImage, setNewImage] = useState("")
    const loadingDef = useSelector(getEmployerLoading)




    const onSubmitImage = (data) => {
        // formData.append("profile_img", data)
        console.log(data, "file profile-page")
        dispatch(changeEmployerProfileImage({id: employerId.id, data}))
    }


    return (
        // <ContextStuPro.Provider value={}>
        <div
            className={classNames(cls.profile, {
                [cls.active]: active
            })}
        >

                    <EmployerProfileInfo
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
                {/*<EmployerProfileTeachersGroup/>*/}
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