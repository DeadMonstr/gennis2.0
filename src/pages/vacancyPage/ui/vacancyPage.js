import React from 'react';

import {
    VacancyHeader,
    VacancyList
} from "entities/vacancy";

import cls from "./vacancyPage.module.sass";

export const VacancyPage = () => {
    return (
        <div className={cls.vacancy}>
            <VacancyHeader/>
            <VacancyList/>
        </div>
    );
};
