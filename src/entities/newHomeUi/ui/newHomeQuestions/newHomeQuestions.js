import React from 'react';

import {Accordion} from "shared/ui/accardion/accardion";
import cls from "./newHomeQuestions.module.sass";

const list = [
    {
        title: "Qaysi hujjatlar talab etiladi?"
    }, {
        title: "Qabul qanday bosqichlardan iborat?"
    }, {
        title: "Kirish imtihonlari barchaga majburiymi?"
    }, {
        title: "To‘lovni bo‘lib-bo‘lib to‘lash mumkinmi?"
    }, {
        title: "Qanday imtiyozlar mavjud?"
    }
]

export const NewHomeQuestions = () => {

    const render = () => {
        return list.map(item => {
            return (
                <Accordion
                    title={item.title}
                    children={
                        <ol className={cls.list}>
                            <li>O‘quvchining tug‘ilganlik guvohnomasi nusxasi</li>
                            <li>Ota-onaning pasport nusxasi</li>
                            <li>3x4 rasm (3 dona)</li>
                            <li>Oldingi sinfdan baholar ko‘chirmasi (agar mavjud bo‘lsa)</li>
                        </ol>
                    }
                />
            )
        })
    }

    return (
        <div className={cls.questions} id={"question"}>
            <div className={cls.questions__header}>
                <h1 className={cls.title}>
                    Qabul jarayoni haqida tez-tez <br/>
                    so‘raladigan savollar
                </h1>
                <p className={cls.subTitle}>
                    Qabul qanday kechadi? Qanday hujjatlar kerak? To‘lov <br/>
                    qanday bo‘ladi? Biz sizni qiziqtiradigan eng muhim <br/>
                    savollarga bu yerda javob berdik.
                </p>
            </div>
            <div className={cls.questions__container}>
                {render()}
            </div>
        </div>
    );
};
