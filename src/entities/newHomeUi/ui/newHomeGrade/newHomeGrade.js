import cls from "./newHomeGrade.module.sass"
import {useState} from "react";
import classNames from "classnames";

import sport from "shared/assets/images/sport.png"
import robo from "shared/assets/images/turonRobot.png"

const grades = [
    {
        id: 1,
        grade: "Grade 1-3"
    },
    {
        id: 2,
        grade: "Grade 4-6"
    },
    {
        id: 3,
        grade: "Grade 7-9"
    },
    {
        id: 4,
        grade: "Grade 10-11"
    },

]

export const NewHomeGrade = () => {

    const [active, setActive] = useState(grades[0].id)

    const [activeBox, setActiveBox] = useState(1)

    const renderItem = () => {
        return [1, 2, 3, 4, 5, 6].map(item => {
            const isActive = activeBox === item

            return(
                <div  onClick={() => setActiveBox(item !== activeBox ? item : null)} className={classNames(cls.grade__wrapper_box , {
                    [cls.activeBox]: isActive
                })}>
                    <img className={cls.grade__wrapper_box_img} src={robo} alt=""/>
                    <div style={{color: item === activeBox ? "#fff" : ""}} className={cls.grade__wrapper_box_title}>Robotics</div>
                    <div style={{color: item === activeBox ? "#fff" : ""}} className={cls.grade__wrapper_box_desc}>Robotics is an interdisciplinary branch of electronics and
                        communication, computer science and engineering...
                    </div>
                </div>
            )
        })
    }

    const renderGrades = () => {
        return grades.map(item => (
            <div onClick={() => {
                setActive(item.id)
            }} className={classNames(cls.grade__header_left_grades_item, {
                [cls.active]: active === item.id
            })}>

                {item.grade}

            </div>
        ))
    }

    return (
        <div id={"grading"} className={cls.grade}>

            <div className={cls.grade__header}>
                <div className={cls.grade__header_left}>
                    <div className={cls.grade__header_left_title}>
                        Har bir bosqichda sifatli va amaliy ta’lim
                    </div>
                    <div className={cls.grade__header_left_grades}>
                        {renderGrades()}
                    </div>
                </div>
                <div className={cls.grade__header_right}>
                    Ta’lim dasturi bosqichma-bosqich shakllangan bo‘lib, har bir sinfda o‘quvchilar uchun muhim bo‘lgan
                    fanlar tanlangan. Quyida sinflar bo‘yicha asosiy fanlar bilan tanishishingiz mumkin.

                </div>
                <div className={`${cls.grade__header_left_gradesMobile}`}>
                    {renderGrades()}
                </div>
            </div>

            <div className={cls.grade__wrapper}>
                {renderItem()}
            </div>


        </div>
    );
};
