import React, { useState } from 'react';
import { Modal } from "shared/ui/modal";
import { Input } from "shared/ui/input";
import { Select } from "shared/ui/select";
import cls from "./vacancyAdd.module.sass";
import { Button } from "shared/ui/button";

export const VacancyAdd = React.memo(({ active, setActive, addVacancy }) => {
    const branches = [
        { name: "chirchiq", label: "chirchiq" },
        { name: "gazalkent", label: "gazalkent" },
        { name: "xujakent", label: "xujakent" }
    ];
    const [subjectName, setSubjectName] = useState("");
    const [systemType, setSystemType] = useState("");

    const handleAdd = () => {
        const newVacancy = { subjectName, systemType };
        addVacancy(newVacancy);
        setActive(false);
        setSubjectName("");
        setSystemType("");
    };

    return (
        <Modal
            active={active}
            setActive={setActive}
        >
            <div className={cls.filter}>
                <h1>Vakansiya qo'shish</h1>
                <div className={cls.filter__container}>
                    <Input
                        placeholder={"Kasb nomi"}
                        value={subjectName}
                        onChange={(e) => setSubjectName(e.target.value)}
                    />
                    <Select
                        extraClass={cls.inputWidth}
                        value={systemType}
                        onChangeOption={(value) => setSystemType(value)}
                        options={branches}
                    />
                    <Button
                        extraClass={cls.buttonChange}
                        onClick={handleAdd}
                    >
                        Add
                    </Button>
                </div>
            </div>
        </Modal>
    );
});
