import React from 'react';

import {SchoolHomeBuilding, SchoolHomeChampions} from "entities/schoolHome";

import cls from "./schoolHomeStudentsModal.module.sass";

export const SchoolHomeStudentsModal = () => {
    return (
        <div className={cls.students}>
            <SchoolHomeBuilding/>
            <SchoolHomeChampions/>
        </div>
    );
}
