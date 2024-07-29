import React, {useState} from 'react';

import {Modal} from "shared/ui/modal";
import {Input} from "shared/ui/input";
import {Select} from "shared/ui/select";
import {Switch} from "shared/ui/switch";

import cls from "./vacancyWorkerEdit.module.sass";
import {EditableCard} from "../../../../shared/ui/editableCard";
import {AnimatedMulti,system, location, branch} from "../../../workerSelect";
import {Button} from "../../../../shared/ui/button";

export const VacancyWorkerEdit = React.memo(({active, setActive, activePage}) => {

    const [selected, setSelected] = useState([])
    const [deletedId, setDeletedId] = useState(0)

    return (
        <Modal
            active={active}
            setActive={setActive}
        >
            <div className={cls.filter}>
                <EditableCard extraClass={cls.cardSelect}>
                    <AnimatedMulti options={system}/>
                </EditableCard>
                <EditableCard extraClass={cls.cardSelect}>
                    <AnimatedMulti options={location}/>
                </EditableCard>
                <EditableCard extraClass={cls.cardSelect}>
                    <AnimatedMulti options={branch}/>
                </EditableCard>
                <Button extraClass={cls.changerButton} children={"Change"}/>

            </div>
        </Modal>
    );
})