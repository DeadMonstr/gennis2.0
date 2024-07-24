import React, { useState, useEffect } from 'react';
import { Modal } from "shared/ui/modal";
import { Input } from "shared/ui/input";
import { Select } from "shared/ui/select";
import { Button } from "shared/ui/button";
import cls from "./vacancyPageEdit.module.sass";

export const VacancyPageEdit = React.memo(({ modal, setModal, vacancy, onSave }) => {
    const [selectedSubject, setSelectedSubject] = useState(vacancy?.subjectName || "");
    const [selectedType, setSelectedType] = useState(vacancy?.systemType || "");

    useEffect(() => {
        if (vacancy) {
            setSelectedSubject(vacancy.subjectName);
            setSelectedType(vacancy.systemType);
        }
    }, [vacancy]);

    const handleSave = () => {
        const updatedVacancy = {
            ...vacancy,
            subjectName: selectedSubject,
            systemType: selectedType,
        };
        onSave(updatedVacancy);
    };

    return (
        <Modal active={modal} setActive={setModal}>
            <div className={cls.filter}>
                <h1>Ma'lumotlarni o'zgartirish</h1>
                <div className={cls.filter__container}>
                    <Input
                        placeholder={"Kasb nomi"}
                        value={selectedSubject}
                        onChange={(e) => setSelectedSubject(e.target.value)}
                    />
                    <Select

                    />
                    <Button onClick={handleSave}>Change</Button>
                </div>
            </div>
        </Modal>
    );
});
