import React, {useState} from 'react';

import {Modal} from "shared/ui/modal";
import {Input} from "shared/ui/input";
import {Select} from "shared/ui/select";
import {Switch} from "shared/ui/switch";

import cls from "../../filters.module.sass";

export const GroupsFilter = React.memo(({active, setActive, activePage , setActiveSwitch , activeSwitch}) => {

    const [selectedFrom, setSelectedFrom] = useState()
    const [selectedTo, setSelectedTo] = useState()
    const [selectedSubject, setSelectedSubject] = useState()
    const [selectedTeacher, setSelectedTeacher] = useState()
    const [selectedType, setSelectedType] = useState()



    const onChangeSwitch =() =>{
        setActiveSwitch(!activeSwitch)
    }

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
                    <Select
                        title={"Fan"}
                        extraClass={cls.filter__select}
                        onChangeOption={setSelectedSubject}
                    />
                    <Select
                        title={"Kurs turi"}
                        extraClass={cls.filter__select}
                        onChangeOption={setSelectedType}
                    />

                    <div className={cls.filter__age}>
                        <Input
                            type={"number"}
                            extraClassName={cls.filter__input}
                            placeholder={"O’chirilgan sana (От)"}
                            onChange={setSelectedFrom}
                            value={selectedFrom}
                        />
                        <Input
                            type={"number"}
                            extraClassName={cls.filter__input}
                            placeholder={"O’chirilgan sana (До)"}
                            onChange={setSelectedTo}
                            value={selectedTo}
                        />
                    </div>

                    <div className={cls.filter__switch}>
                        <p>O’chirilgan</p>
                        <Switch  activeSwitch={activeSwitch} onChangeSwitch={() => onChangeSwitch()}/>
                    </div>

                </div>
            </div>
        </Modal>
    );
})