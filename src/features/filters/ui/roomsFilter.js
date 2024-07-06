import React, {useState} from 'react';

import {Modal} from "shared/ui/modal";
import {Input} from "shared/ui/input";
import {Select} from "shared/ui/select";
import Switch from "shared/ui/switch/switch";

import cls from "./filters.module.sass";

export const TeacherFilter = ({active, setActive, activePage}) => {

    const [selectedFrom, setSelectedFrom] = useState()
    const [selectedTo, setSelectedTo] = useState()
    const [selectedTeacher, setSelectedTeacher] = useState()

    return (
        <Modal
            active={active}
            setActive={setActive}
        >
            <div className={cls.filter}>
                <h1>Filter</h1>
                <div className={cls.filter__container}>

                    <Select
                        title={"Teacher"}
                        extraClass={cls.filter__select}
                        onChangeOption={setSelectedTeacher}
                    />

                    <div className={cls.filter__age}>
                        <Input
                            type={"number"}
                            extraClassName={cls.filter__input}
                            placeholder={"O’rindiqlar soni (От)"}
                            onChange={setSelectedFrom}
                            value={selectedFrom}
                        />
                        <Input
                            type={"number"}
                            extraClassName={cls.filter__input}
                            placeholder={"O’rindiqlar soni (До)"}
                            onChange={setSelectedTo}
                            value={selectedTo}
                        />
                    </div>



                    <div className={cls.filter__switch}>
                        <p>Doska</p>
                        <Switch/>
                    </div>

                </div>
            </div>
        </Modal>
    );
};