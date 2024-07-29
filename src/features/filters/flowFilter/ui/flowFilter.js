import {memo, useState} from 'react';

import {Modal} from "shared/ui/modal";
import {Select} from "shared/ui/select";
import {Input} from "shared/ui/input";
import {Switch} from "shared/ui/switch";

import cls from "../../filters.module.sass"

export const FlowFilter = memo(({active, setActive}) => {

    const [selectedCoinFrom, setSelectedCoinFrom] = useState()
    const [selectedCoinTo, setSelectedCoinTo] = useState()
    const [selectedStudentFrom, setSelectedStudentFrom] = useState()
    const [selectedStudentTo, setSelectedStudentTo] = useState()

    const [selectedClass, setSelectedClass] = useState()
    const [selectedTeacher, setSelectedTeacher] = useState()

    const [activeRange, setActiveRange] = useState(false)
    const [activeDeleted, setActiveDeleted] = useState(false)

    return (
        <Modal
            active={active}
            setActive={setActive}
        >
            <div className={cls.filter}>
                <h1>Filter</h1>
                <div className={cls.filter__container}>

                    <Select
                        title={"Sinf"}
                        extraClass={cls.filter__select}
                        onChangeOption={setSelectedClass}
                    />
                    <Select
                        title={"Teacher"}
                        extraClass={cls.filter__select}
                        onChangeOption={setSelectedTeacher}
                    />

                    <div className={cls.filter__switch}>
                        <p>Rang</p>
                        <Switch
                            activeSwitch={activeRange}
                            onChangeSwitch={() => setActiveRange(!activeRange)}
                        />
                    </div>

                    <div className={cls.filter__age}>
                        <Input
                            type={"number"}
                            extraClassName={cls.filter__input}
                            placeholder={"Studentlar soni (От)"}
                            onChange={setSelectedStudentFrom}
                            value={selectedStudentFrom}
                        />
                        <Input
                            type={"number"}
                            extraClassName={cls.filter__input}
                            placeholder={"Studentlar soni (До)"}
                            onChange={setSelectedStudentTo}
                            value={selectedStudentTo}
                        />
                    </div>

                    <div className={cls.filter__age}>
                        <Input
                            type={"number"}
                            extraClassName={cls.filter__input}
                            placeholder={"Coin (От)"}
                            onChange={setSelectedCoinFrom}
                            value={selectedCoinFrom}
                        />
                        <Input
                            type={"number"}
                            extraClassName={cls.filter__input}
                            placeholder={"Coin (До)"}
                            onChange={setSelectedCoinTo}
                            value={selectedCoinTo}
                        />
                    </div>

                    <div className={cls.filter__switch}>
                        <p>O’chirilgan</p>
                        <Switch
                            activeSwitch={activeDeleted}
                            onChangeSwitch={() => setActiveDeleted(!activeDeleted)}
                        />
                    </div>

                </div>
            </div>
        </Modal>
    )
})
