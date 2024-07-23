import React, {useState} from 'react';

import {Modal} from "shared/ui/modal";
import {Input} from "shared/ui/input";
import {Select} from "shared/ui/select";
import {Switch} from "shared/ui/switch";

import cls from "../../filters.module.sass";

export const TeacherFilter = React.memo(({active, setActive, activePage , setActiveSwitch , activeSwitch}) => {

    const [selectedFrom, setSelectedFrom] = useState()
    const [selectedTo, setSelectedTo] = useState()
    const [selectedSubject, setSelectedSubject] = useState()
    const [selectedLanguage, setSelectedLanguage] = useState()
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
                        title={"Fan"}
                        extraClass={cls.filter__select}
                        onChangeOption={setSelectedSubject}
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
                        <Switch onChangeSwitch={() =>onChangeSwitch()} activeSwitch={activeSwitch}/>
                    </div>

                </div>
            </div>
        </Modal>
    );
})