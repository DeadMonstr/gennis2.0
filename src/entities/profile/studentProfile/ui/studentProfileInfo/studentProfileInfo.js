import {memo} from 'react';

import {EditableCard} from "shared/ui/editableCard";

import cls from "./studentProfileInfo.module.sass";
import defaultUserImg from "shared/assets/images/user_image.png";

export const StudentProfileInfo = memo((props) => {

    const {
        setActive,
        data,
        setActiveModal,
        newImage
    } = props

    return (
        <EditableCard
            onClick={() => setActiveModal("changeInfo")}
            extraClass={cls.info}
            title={<i className="fas fa-edit"/>}
        >
            <div className={cls.info__avatar}>
                <img
                    onClick={() => setActiveModal("changeImage")}
                    className={cls.info__image}
                    src={!!newImage ? newImage : defaultUserImg}
                    alt=""
                />
                <h1>{data?.username}</h1>
                <h2 className={cls.info__role}>Student</h2>
            </div>
            <div className={cls.info__text}>
                <p>Ism: <span>{data?.name}</span></p>
                <p>Familiya: <span>{data?.surname}</span></p>
                <p>Otasinig ismi: <span>{data?.father_name}</span></p>
                <p>Telefon raqami: <span>{data?.phone}</span></p>
                <p>Yoshi: <span>{data?.age}</span></p>
                <p>Tug'ilgan sana: <span>{data?.birth_date}</span></p>
                <div className={cls.info__addInfo}>
                    <i className="fas fa-plus"/>
                </div>
            </div>
            <EditableCard
                extraClass={cls.info__balance}
                onClick={() => setActive("balance")}
            >
                <h2>Balans</h2>
                <p>Summa</p>
                <div className={cls.info__money}>
                    <h2>$ 570.000</h2>
                    <p>$ 390.000</p>
                </div>
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