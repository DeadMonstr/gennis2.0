import React, {useEffect, useState} from 'react';
import {API_URL, headers, useHttp} from "shared/api/base";

import {Modal} from "shared/ui/modal";
import {Input} from "shared/ui/input";
import {Select} from "shared/ui/select";
import {Switch} from "shared/ui/switch";

import cls from "../../filters.module.sass";

export const GroupsFilter = React.memo(({active, setActive}) => {

    const {request} = useHttp()

    const [selectedFrom, setSelectedFrom] = useState()
    const [selectedTo, setSelectedTo] = useState()
    const [selectedSubject, setSelectedSubject] = useState()
    const [selectedTeacher, setSelectedTeacher] = useState()
    const [selectedType, setSelectedType] = useState()
    const [activeSwitch, setActiveSwitch] = useState(false)

    useEffect(() => {
        if (selectedSubject || selectedTeacher || selectedType || selectedTo || selectedFrom || (!activeSwitch || activeSwitch)) {
            const res = {
                from: selectedFrom,
                to: selectedTo,
                subject: selectedSubject,
                teacher: selectedTeacher,
                curse_type: selectedType,
                deleted: activeSwitch,
            }
            // request(`${API_URL}`, "POST", JSON.stringify(res), headers())
            //     .then(res => console.log(res, "filtered"))
            //     .catch(err => console.log(err))
        }
    }, [selectedFrom, selectedTo, selectedType, selectedTeacher, selectedSubject, activeSwitch])

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
                        <Switch activeSwitch={activeSwitch} onChangeSwitch={setActiveSwitch}/>
                    </div>

                </div>
            </div>
        </Modal>
    );
})