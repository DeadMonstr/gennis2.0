import React, {useState} from 'react';

import {Modal} from "shared/ui/modal";
import cls from './giveEmployerSalaryModal.module.sass'
import {TeacherProfileTotalAmount} from "entities/profile/teacherProfile";
import {EmployerProfileTotalAmount} from "../../../entities/profile/employerProfile";

export const GiveEmployerSalaryModal = React.memo(({active, setActive, activePage}) => {
    return (
        <Modal
            active={active}
            setActive={setActive}
        >
            <div className={cls.filter}>
                <h1>Oylik berish</h1>
                <div  className={cls.filter__container}>
                    <EmployerProfileTotalAmount
                    active={active}
                    setActive={setActive}
                    />

                </div>

            </div>
        </Modal>
    );
})