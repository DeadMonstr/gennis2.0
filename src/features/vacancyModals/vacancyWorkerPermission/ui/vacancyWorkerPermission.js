import React, { useState } from 'react';
import { Modal } from "shared/ui/modal";
import { Input } from "shared/ui/input";
import { Select } from "shared/ui/select";
import { vacancyWorkerPermissions, vacancyWorkNames } from "entities/vacancy/model/constants/constants";
import cls from "./vacancyWorkerPermission.module.sass";
import { Button } from "../../../../shared/ui/button";

export const VacancyWorkerPermission = React.memo(({ active, setActive, onAddVacancy }) => {
    const [selectedWorkName, setSelectedWorkName] = useState("");
    const [selectedPermissions, setSelectedPermissions] = useState([]);

    const onChangeWorkName = (value) => {
        setSelectedWorkName(value);
    };

    const onChangePermission = (e, permission) => {
        if (e.target.checked) {
            setSelectedPermissions(prev => [...prev, permission]);
        } else {
            setSelectedPermissions(prev => prev.filter(item => item !== permission));
        }
    };

    const handleAdd = () => {
        const newVacancy = {
            id: Date.now(),
            workName: selectedWorkName,
            workerNames: selectedPermissions.join(", ")
        };
        onAddVacancy(newVacancy);
        setSelectedPermissions([]);
        setSelectedWorkName("");
        setActive(false);
    };

    return (
        <Modal active={active} setActive={setActive}>
            <div className={cls.filter}>
                <h1>Add</h1>
                <div className={cls.filter__container}>
                    <Select
                        title={"Ish turi"}
                        extraClass={cls.filter__select}
                        onChangeOption={onChangeWorkName}
                        options={vacancyWorkNames}
                        required
                        value={selectedWorkName}
                    />
                    {vacancyWorkerPermissions.map(item => (
                        <div key={item.id} className={cls.workerPermission}>
                            <h4>{item.permissionName}</h4>
                            <Input
                                style={{ width: "20px", marginTop: "15px" }}
                                type={"checkbox"}
                                checked={selectedPermissions.includes(item.permissionName)}
                                onChange={(e) => onChangePermission(e, item.permissionName)}
                            />
                        </div>
                    ))}
                </div>
                <div className={cls.buttonHome}>
                    <Button children={"Add"} onClick={handleAdd} />
                </div>
            </div>
        </Modal>
    );
});
