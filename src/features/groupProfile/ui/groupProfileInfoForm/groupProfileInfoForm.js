import {getTeachers} from "entities/teachers";
import {getLanguagesData} from "pages/registerPage";
import React, {memo, useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {useSelector} from "react-redux";

import {getGroupProfileData} from "entities/profile/groupProfile";
import {Button} from "shared/ui/button";
import {EditableCard} from "shared/ui/editableCard";
import {Form} from "shared/ui/form";
import {Input} from "shared/ui/input";
import {Modal} from "shared/ui/modal";
import {Select} from "shared/ui/select";

import cls from "./groupProfileInfoForm.module.sass";
import nextImage from "shared/assets/images/groupImage.png";
import defaultUserImg from "shared/assets/images/user_image.png";


export const GroupProfileInfoForm = memo(() => {

    const {
        register,
        handleSubmit,
        setValue
    } = useForm()

    const data = useSelector(getGroupProfileData)
    const languages = useSelector(getLanguagesData)

    const [active, setActive] = useState(false)

    const onSubmitChange = (data) => {
        console.log(data, "data change")
    }

    useEffect(() => {
        setValue("name", data?.name)
        setValue("price", data?.price)
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
                    <p>Kurs turi: <span>{data?.course_types?.name}</span></p>
                    <p>Level: <span>{data?.level}</span></p>
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
                    type={"danger"}
                >
                    Delete group
                </Button>
                <Form
                    extraClassname={cls.form}
                    typeSubmit={""}
                    onSubmit={handleSubmit(onSubmitChange)}
                >
                    <Input
                        extraClassName={cls.form__input}
                        placeholder={"Guruh nomi"}
                        register={register}
                        name={"name"}
                    />
                    <Input
                        extraClassName={cls.form__input}
                        placeholder={"Guruh narxi"}
                        register={register}
                        name={"price"}
                        type={"number"}
                    />
                    <Select
                        extraClass={cls.form__select}
                        options={languages}
                        title={"Guruh tili"}
                        register={register}
                        name={"language"}
                    />
                    <Button extraClass={cls.infoModal__btn}>Change</Button>
                </Form>
            </Modal>
        </>
    )
})
