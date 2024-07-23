import {memo, useContext} from 'react';

import {ContextStuPro} from "pages/profilePage";
import {EditableCard} from "shared/ui/editableCard";
import {Link} from "shared/ui/link";

import cls from "./studentProfileInfo.module.sass";
import defaultUserImg from "shared/assets/images/user_image.png";

export const StudentProfileInfo = memo(() => {

    const {setActive} = useContext(ContextStuPro)

    return (
        <EditableCard
            onClick={() => setActive(true)}
            extraClass={cls.info}
            title={<i className="fas fa-edit"/>}
        >
            <div className={cls.info__avatar}>
                <img
                    className={cls.info__image}
                    src={defaultUserImg}
                    alt=""
                />
                <h1>RIMEFARA</h1>
                <h2 className={cls.info__role}>Student</h2>
            </div>
            <div className={cls.info__text}>
                <p>Ism: <span>Begzod</span></p>
                <p>Familiya: <span>Jumaniyozov</span></p>
                <p>Otasinig ismi: <span>Farhod o’g’li</span></p>
                <p>Telefon raqami: <span>+998993656845</span></p>
                <p>Yoshi: <span>23</span></p>
                <p>Tug'ilgan sana: <span>2001-10-22</span></p>
                <div className={cls.info__addInfo}>
                    <i className="fas fa-plus"/>
                </div>
            </div>
            <EditableCard
                extraClass={cls.info__balance}
                onClick={() => setActive("balanceIn")}
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