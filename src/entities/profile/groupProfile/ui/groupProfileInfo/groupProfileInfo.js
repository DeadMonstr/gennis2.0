import React, {memo} from 'react';

import {EditableCard} from "shared/ui/editableCard";

import cls from "./groupProfileInfo.module.sass";
import defaultUserImg from "shared/assets/images/user_image.png";
import nextImage from "shared/assets/images/groupImage.png";

export const GroupProfileInfo = memo((props) => {

    const {
        setActive,
        data,
        setActiveModal,
        newImage
    } = props

    return (
        <EditableCard
            onClick={() => {
                setActiveModal("changeInfo")
            }}
            extraClass={cls.info}
            title={<i className="fas fa-edit"/>}
        >
            <div className={cls.info__avatar}>
                <img
                    onClick={() => setActiveModal("changeImage")}
                    className={cls.info__image}
                    src={data?.profile_img ?? defaultUserImg}
                    alt=""
                />
                <h1>{data?.username}</h1>
                <h2 className={cls.info__role}>Group</h2>
            </div>
            <div className={cls.info__text}>
                <p>O'qitish tili: <span>{data?.name}</span></p>
                <p>Kurs turi: <span>{data?.surname}</span></p>
                <p>Level: <span>{data?.father_name}</span></p>
                <p>Guruh narxi: <span>{data?.phone}</span></p>
                <p>Studentlar soni: <span>{data?.age}</span></p>
                {/*<p>Tug'ilgan sana: <span>{data?.birth_date}</span></p>*/}
                <div className={cls.info__addInfo}>
                    <i className="fas fa-plus"/>
                </div>
            </div>
            <EditableCard
                extraClass={cls.info__balance}
                onClick={() => setActive("balance")}
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
                {/*<div className={cls.info__money}>*/}
                {/*    <h2>$ 570.000</h2>*/}
                {/*    <p>$ 390.000</p>*/}
                {/*</div>*/}
            </EditableCard>
            {/*<Link to={"/platform/teacherSalaryPage"}>*/}
            {/*    <EditableCard*/}
            {/*        extraClass={cls.info__balance}*/}
            {/*    >*/}
            {/*        <h2>Balans</h2>*/}
            {/*        <p>Summa</p>*/}
            {/*        <div className={cls.info__money}>*/}
            {/*            <h2>$ 570.000</h2>*/}
            {/*            <p>$ 390.000</p>*/}
            {/*        </div>*/}
            {/*    </EditableCard>*/}
            {/*</Link>*/}

        </EditableCard>
    )
})