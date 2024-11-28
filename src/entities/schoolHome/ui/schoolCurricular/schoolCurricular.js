import {memo} from 'react';

import cls from "./schoolCurricular.module.sass";

export const SchoolCurricular = memo(() => {
    return (
        <div className={cls.curricular}>
            <div className={cls.curricular__title}>
                <h1>Curricular</h1>
            </div>
            <div className={cls.container}>

            </div>
        </div>
    );
})
