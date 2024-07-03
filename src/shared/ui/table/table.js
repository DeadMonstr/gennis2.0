import React from 'react';

import cls from "./table.module.sass";

export const Table = ({children}) => {
    return (
        <table className={cls.table}>
            {children}
        </table>
    );
};