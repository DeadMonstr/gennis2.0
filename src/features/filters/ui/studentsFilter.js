import React, {useEffect, useState} from 'react';
import classNames from "classnames";

import {Modal} from "shared/ui/modal";
import {Input} from "shared/ui/input";
import {Select} from "shared/ui/select";
import Radio from "shared/ui/radio/radio";
import Switch from "shared/ui/switch/switch";

import cls from "./filters.module.sass";

const statusList = [
    {
        name: "green",
        label: "Yashil",
        extra: ""
    },
    {
        name: "yellow",
        label: "Sariq",
        extra: cls.yellow
    },
    {
        name: "red",
        label: "Qizil",
        extra: cls.red
    }

]

export const StudentsFilter = ({active, setActive, activePage, setData}) => {

    const [selectedAgeFrom, setSelectedAgeFrom] = useState()
    const [selectedAgeTo, setSelectedAgeTo] = useState()
    const [selectedSubject, setSelectedSubject] = useState()
    const [selectedLanguage, setSelectedLanguage] = useState()
    const [selectedClass, setSelectedClass] = useState()
    const [selectedStatus, setSelectedStatus] = useState()

    const [filterData, setFilterData] = useState({})

    const onChange = (status) => {
        setSelectedStatus(status)
        setFilterData({
            ageFrom: selectedAgeFrom,
            ageTo: selectedAgeTo,
            subject: selectedSubject,
            language: selectedLanguage,
            class: selectedClass
        })
    }

    // useEffect(() => {
    //     if (selectedStatus !== "") {
    //         setData({
    //             ageFrom: selectedAgeFrom,
    //             ageTo: selectedAgeTo,
    //             subject: selectedSubject,
    //             language: selectedLanguage,
    //             class: selectedClass
    //         })
    //     }
    // }, [selectedStatus, setData])

    return (
        <Modal
            active={active}
            setActive={setActive}
        >
            <div className={cls.filter}>
                <h1>Filter</h1>
                <div className={cls.filter__container}>
                    {
                        activePage !== "deleted" ? <Select
                            title={"Fan"}
                            extraClass={cls.filter__select}
                            onChangeOption={setSelectedSubject}
                        /> : null
                    }

                    {
                        activePage === "deleted" ? <Select
                            title={"Sinf"}
                            extraClass={cls.filter__select}
                            onChangeOption={setSelectedClass}
                        /> : null
                    }

                    <div className={cls.filter__age}>
                        <Input
                            type={"number"}
                            extraClassName={cls.filter__input}
                            placeholder={"Yosh (От)"}
                            onChange={setSelectedAgeFrom}
                            value={selectedAgeFrom}
                        />
                        <Input
                            type={"number"}
                            extraClassName={cls.filter__input}
                            placeholder={"Yosh (До)"}
                            onChange={setSelectedAgeTo}
                            value={selectedAgeTo}
                        />
                    </div>
                    <Select
                        title={"Til"}
                        extraClass={cls.filter__select}
                        onChangeOption={setSelectedLanguage}
                    />
                    {
                        activePage === "studying" ? <div className={cls.filter__status}>
                            {
                                statusList.map(item => {
                                    return (
                                        <div className={cls.filter__inner}>
                                            <Radio
                                                extraClasses={classNames(cls.filter__radio, item.extra)}
                                                onChange={onChange}
                                                name={"status"}
                                                value={item.name}
                                                checked={item.name === selectedStatus}
                                            >
                                                {item.label}
                                            </Radio>
                                        </div>
                                    )
                                })
                            }
                        </div> : null
                    }
                    <div className={cls.filter__switch}>
                        <p>O’chirilgan</p>
                        <Switch disabled/>
                    </div>
                    <div className={cls.filter__switch}>
                        <p>Filterlangan</p>
                        <Switch/>
                    </div>
                </div>
            </div>
        </Modal>
    );
};