import React from 'react';
import cls from "./miniLoader.module.sass"
export const MiniLoader = () => {
    return (
        <div className={cls.loader}>
            <div className={cls.loader__circle}>
                <div></div>
            </div>
        </div>
    );
};