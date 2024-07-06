import React, {useState} from 'react';

import {Modal} from "shared/ui/modal";
import {Input} from "shared/ui/input";
import {Select} from "shared/ui/select";
import Switch from "shared/ui/switch/switch";

import cls from "./filters.module.sass";

export const EmployeesFilter = ({active, setActive, activePage}) => {

    const [selectedFrom, setSelectedFrom] = useState()
    const [selectedTo, setSelectedTo] = useState()
    const [selectedJob, setSelectedJob] = useState()
    const [selectedLanguage, setSelectedLanguage] = useState()

    return (
        <Modal
            active={active}
            setActive={setActive}
        >
            <div className={cls.filter}>
                <h1>Filter</h1>
                <div className={cls.filter__container}>

                    <Select
                        title={"Ish"}
                        extraClass={cls.filter__select}
                        onChangeOption={setSelectedJob}
                    />

                    <div className={cls.filter__age}>
                        <Input
                            type={"number"}
                            extraClassName={cls.filter__input}
                            placeholder={"Yosh (От)"}
                            onChange={setSelectedFrom}
                            value={selectedFrom}
                        />
                        <Input
                            type={"number"}
                            extraClassName={cls.filter__input}
                            placeholder={"Yosh (До)"}
                            onChange={setSelectedTo}
                            value={selectedTo}
                        />
                    </div>

                    <Select
                        title={"Til"}
                        extraClass={cls.filter__select}
                        onChangeOption={setSelectedLanguage}
                    />



                    <div className={cls.filter__switch}>
                        <p>O’chirilgan</p>
                        <Switch/>
                    </div>

                </div>
            </div>
        </Modal>
    );
};