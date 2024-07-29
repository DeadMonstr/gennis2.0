import React, {useState} from 'react';

import {Modal} from "shared/ui/modal";
import {Input} from "shared/ui/input";


import cls from './teacherEdit.module.sass'
import {Button} from "../../../../shared/ui/button";

export const TeacherEdit = React.memo(({active, setActive, activePage}) => {

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
                <div className={cls.filter__container}>

                    <Input
                        type={"text"}
                        extraClassName={cls.inputAge}
                        placeholder={"Ism"}
                        onChange={setSelectedFrom}
                        // value={selectedFrom}
                    />

                    <div className={cls.filter__age}>
                        <Input
                            type={"text"}
                            extraClassName={cls.filter__input}
                            placeholder={"Familiya"}
                            onChange={setSelectedFrom}
                            // value={selectedFrom}
                        />
                        <Input
                            type={"text"}
                            extraClassName={cls.filter__input}
                            placeholder={"Toifa"}
                            onChange={setSelectedTo}
                            // value={selectedTo}
                        />
                        <Input
                            type={"number"}
                            extraClassName={cls.filter__input}
                            placeholder={"Tel raqami"}
                            onChange={setSelectedTo}
                            // value={selectedTo}
                        />
                        <Input
                            type={"text"}
                            extraClassName={cls.inputAge}
                            placeholder={"Yosh"}
                            onChange={setSelectedFrom}
                            // value={selectedFrom}
                        />
                        <Input
                            type={"text"}
                            extraClassName={cls.inputAge}
                            placeholder={"Class type"}
                            onChange={setSelectedFrom}
                            // value={selectedFrom}
                        />
                    </div>




                    <div className={cls.filter__switch}>
                      <div></div>
                        <Button type={"submit"} children={"Button"}/>
                    </div>

                </div>
            </div>
        </Modal>
    );
})