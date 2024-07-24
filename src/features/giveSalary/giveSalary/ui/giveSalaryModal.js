import React, {useState} from 'react';

import {Modal} from "shared/ui/modal";
import cls from './giveSalaryModal.module.sass'
import {StudentProfileTotalAmount} from "entities/profile/studentProfile";

export const GiveSalaryModal = React.memo(({active, setActive, activePage}) => {

    const [selectedFrom, setSelectedFrom] = useState()
    const [selectedTo, setSelectedTo] = useState()
    const [selectedSubject, setSelectedSubject] = useState()
    const [selectedLanguage, setSelectedLanguage] = useState()

    return (
        <Modal
            active={active}
            setActive={setActive}
        >
            <div className={cls.filter}>
                <h1>Ma'lumotlarni o'zgartirish</h1>
                <div  className={cls.filter__container}>
                    <StudentProfileTotalAmount/>
                </div>

            </div>
        </Modal>
    );
})