import React, {memo, useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router";

import {
    getGroupProfileData,
    changeGroupProfile,
    deleteGroupProfile
} from "entities/profile/groupProfile";
import {getSchoolClassColors, getSchoolClassNumbers} from "entities/students";
import {useTheme} from "shared/lib/hooks/useTheme";
import {Button} from "shared/ui/button";
import {EditableCard} from "shared/ui/editableCard";
import {Form} from "shared/ui/form";
import {Input} from "shared/ui/input";
import {Modal} from "shared/ui/modal";
import {Radio} from "shared/ui/radio";
import {Select} from "shared/ui/select";
import {getLanguagesData} from "pages/registerPage";
import {Switch} from "shared/ui/switch";

import cls from "./groupProfileInfoForm.module.sass";
import nextImage from "shared/assets/images/groupImage.png";
import defaultUserImg from "shared/assets/images/user_image.png";


export const GroupProfileInfoForm = memo(() => {

    const {
        register,
        handleSubmit,
        setValue
    } = useForm()

    const {theme} = useTheme()
    const {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const data = useSelector(getGroupProfileData)
    const languages = useSelector(getLanguagesData)
    const schoolClassNumbers = useSelector(getSchoolClassNumbers)
    const schoolClassColors = useSelector(getSchoolClassColors)

    const [active, setActive] = useState(false)
    const [selectColor, setSelectColor] = useState()
    const [activeSwitch, setActiveSwitch] = useState(data?.status ?? false)

    const onSubmitChange = (data) => {
        console.log(data, "data change")
        const res = {
            ...data,
            color: selectColor
        }
        dispatch(changeGroupProfile({
            status: activeSwitch,
            data: res,
            id,
            group_type: theme === "app_center_theme" ? "center" : "school"
        }))
    }

    const onDelete = () => {
        navigate(-1)
        dispatch(deleteGroupProfile({id}))
    }

    useEffect(() => {
        setValue("name", data?.name)
        setValue("price", data?.price)
        setValue("language", data?.language?.id)
        setValue("class_number", data?.class_number?.id)
    }, [])

    return (
        <>
            <EditableCard
                extraClass={cls.info}
                title={<i className="fas fa-edit"/>}
                onClick={() => setActive(true)}
            >
                <div className={cls.info__avatar}>
                    <img
                        // onClick={() => setActiveModal("changeImage")}
                        className={cls.info__image}
                        src={data?.profile_img ?? defaultUserImg}
                        alt=""
                    />
                    <h1>{data?.name}</h1>
                    <h2 className={cls.info__role}>Group</h2>
                </div>
                <div className={cls.info__text}>
                    <p>O'qitish tili: <span className={cls.info__name}>
                    {
                        data?.language?.name.length > 16 ?
                            `${data?.language?.name.slice(0, 16)}...` :
                            data?.language?.name
                    }
                </span></p>
                    <p className={cls.info__hoverName}>{data?.language?.name}</p>
                    {
                        data?.course_types?.name ? <p>Kurs turi: <span>{data?.course_types?.name}</span></p> : null
                    }
                    {
                        data?.level?.name ? <p>Level: <span>{data?.level?.name}</span></p> : null
                    }
                    {
                        data?.class_number?.number ? <p>Sinf raqami: <span>{data?.class_number?.number}</span></p> : null
                    }

                    <p>Guruh narxi: <span>{data?.price}</span></p>
                    <p>Studentlar soni: <span>{data?.students.length}</span></p>
                    <div className={cls.info__addInfo}>
                        <i className="fas fa-plus"/>
                    </div>
                </div>
                <EditableCard
                    extraClass={cls.info__balance}
                    // onClick={() => setActive("balance")}
                    title={""}
                    titleType={""}
                >
                    <div className={cls.info__title}>
                        <h1>Next <br/> Lesson</h1>
                        <p>WEDNESDAY <br/> 14:00 <br/> Lincoln</p>
                    </div>
                    <div>
                        <img src={nextImage} alt=""/>
                    </div>
                </EditableCard>
            </EditableCard>
            <Modal
                extraClass={cls.infoModal}
                active={active}
                setActive={setActive}
            >
                <h1>Ma’lumot o’zgartirish</h1>
                <Button
                    extraClass={cls.infoModal__btn}
                    onClick={onDelete}
                    type={"danger"}
                >
                    Delete group
                </Button>
                <Form
                    id={"formChange"}
                    extraClassname={cls.form}
                    typeSubmit={""}
                    onSubmit={handleSubmit(onSubmitChange)}
                >
                    <Input
                        extraClassName={cls.form__input}
                        placeholder={"Guruh nomi"}
                        register={register}
                        name={"name"}
                        required
                    />
                    <Input
                        extraClassName={cls.form__input}
                        placeholder={"Guruh narxi"}
                        register={register}
                        name={"price"}
                        type={"number"}
                        required
                    />
                    <Select
                        extraClass={cls.form__select}
                        options={languages}
                        title={"Guruh tili"}
                        register={register}
                        name={"language"}
                        defaultValue={data?.language?.id}
                        required
                    />
                    <Select
                        extraClass={cls.form__select}
                        options={schoolClassNumbers}
                        title={"Sinf rangi"}
                        register={register}
                        name={"class_number"}
                        defaultValue={data?.class_number?.id}
                        required
                    />
                    <div className={cls.form__radios}>
                        {
                            schoolClassColors.map(item => {
                                return (
                                    <div className={cls.form__inner}>
                                        <Radio
                                            extraClasses={cls.form__item}
                                            onChange={() => setSelectColor(item.id)}
                                            checked={selectColor === item.id}
                                            name={"color"}
                                        />
                                        {
                                            item.name
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={cls.form__switch}>
                        <p>Guruh statusi: </p>
                        <Switch
                            activeSwitch={activeSwitch}
                            onChangeSwitch={setActiveSwitch}
                        />
                    </div>
                    <Button id={"formChange"} extraClass={cls.infoModal__btn}>Change</Button>
                </Form>
            </Modal>
        </>
    )
})
