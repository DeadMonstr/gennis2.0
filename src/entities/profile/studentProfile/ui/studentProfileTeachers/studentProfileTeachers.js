import {memo} from 'react';

import {EditableCard} from "shared/ui/editableCard";

import cls from "./studentProfileTeachers.module.sass"
import defaultUserImage from "shared/assets/images/user_image.png";

export const StudentProfileTeachers = memo(() => {
    return (
        <EditableCard
            extraClass={cls.teacher}
        >
            <h1>O’qituvchilari</h1>
            <div className={cls.items}>
                <div className={cls.items__inner}>
                    <img
                        src={defaultUserImage}
                        alt=""
                    />
                    <h3>Rustamova Sh</h3>
                    <p>Matematika</p>
                </div>
                <div className={cls.items__inner}>
                    <img
                        src={defaultUserImage}
                        alt=""
                    />
                    <h3>Rustamova Sh</h3>
                    <p>Matematika</p>
                </div>
                <div className={cls.items__inner}>
                    <img
                        src={defaultUserImage}
                        alt=""
                    />
                    <h3>Rustamova Sh</h3>
                    <p>Matematika</p>
                </div>
            </div>
        </EditableCard>
    );
})