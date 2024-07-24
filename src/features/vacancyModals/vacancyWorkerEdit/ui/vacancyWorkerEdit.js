import React, {useState} from 'react';

import {Modal} from "shared/ui/modal";
import {Input} from "shared/ui/input";
import {Select} from "shared/ui/select";
import {Switch} from "shared/ui/switch";

import cls from "./vacancyWorkerEdit.module.sass";
import GetLocation from "../../../location/getLocation";
import {EditableCard} from "../../../../shared/ui/editableCard";

export const VacancyWorkerEdit = React.memo(({active, setActive, activePage}) => {

    const [selected, setSelected] = useState([])
    const [deletedId, setDeletedId] = useState(0)

    return (
        <Modal
            active={active}
            setActive={setActive}
        >
            <div className={cls.filter}>
                <EditableCard>
                    <GetLocation
                        getItem={setSelected}
                        deletedId={deletedId}
                    />
                    <div className={cls.header__selected}>
                        {
                            selected.map(item => {
                                return (
                                    <div
                                        className={cls.header__item}
                                    >
                                        <i
                                            onClick={() => setDeletedId(item.id)}
                                            className="fa fa-times"
                                        />
                                        <p>{item.name}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </EditableCard>

            </div>
        </Modal>
    );
})