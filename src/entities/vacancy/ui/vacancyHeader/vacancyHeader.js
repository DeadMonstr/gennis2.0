import {memo} from 'react';

import {Button} from "shared/ui/button";

import cls from "./vacancyHeader.module.sass";

export const VacancyHeader = memo(() => {
    return (
        <div className={cls.header}>
            <Button type={"filter"}>Filter</Button>
            <div className={cls.header__btns}>
                <Button extraClass={cls.header__btn}>
                    <i className="fas fa-plus"/>
                </Button>
                <Button extraClass={cls.header__btn}>
                    <i className="fas fa-pen"/>
                </Button>
            </div>
        </div>
    )
})