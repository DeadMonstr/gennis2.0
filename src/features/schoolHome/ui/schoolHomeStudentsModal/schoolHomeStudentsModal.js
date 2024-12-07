import React from 'react';

import {SchoolHomeBuilding, SchoolHomeChampions, StudentCouncil} from "entities/schoolHome";

import cls from "./schoolHomeStudentsModal.module.sass";
import OurStudent from "../../../../entities/schoolHome/ui/ourStudent/ourStudent";

export const SchoolHomeStudentsModal = () => {
    return (
        <div className={cls.students}>
            <SchoolHomeBuilding/>
            <SchoolHomeChampions/>
            <OurStudent/>
            <StudentCouncil/>
        </div>
    );
}
