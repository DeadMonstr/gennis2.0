import React from 'react';

import cls from "./table.module.sass";

export const Table = ({children ,extraClass}) => {
    return (
        <table className={`${cls.table} ${extraClass}`}>
            {children}
        </table>
    );
};