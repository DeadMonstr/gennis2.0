import React from 'react';

import {Modal} from "shared/ui/modal";
import {Input} from "shared/ui/input";
import {Select} from "shared/ui/select";
import Radio from "shared/ui/radio/radio";
import Switch from "shared/ui/switch/switch";

import cls from "./studentsFilter.module.sass";

export const StudentsFilter = ({active, setActive}) => {
    return (
        <Modal
            active={active}
            setActive={setActive}
        >
            <div className={cls.filter}>
                <h1 className={cls.filter__title}>Filter</h1>
                <div className={cls.filter__container}>
                    <Select/>
                    <div className={cls.filter__age}>
                        <Input
                            extraClassName={cls.filter__input}
                            placeholder={"Yosh (От)"}
                        />
                        <Input
                            extraClassName={cls.filter__input}
                            placeholder={"Yosh (До)"}
                        />
                    </div>
                    <Select/>
                    <div className={cls.filter__status}>
                        <div className={cls.filter__inner}>
                            <Radio/>
                            <p>Yashil</p>
                        </div>
                        <div className={cls.filter__inner}>
                            <Radio/>
                            <p>Sariq</p>
                        </div>
                        <div className={cls.filter__inner}>
                            <Radio/>
                            <p>Qizil</p>
                        </div>
                    </div>
                    <div className={cls.filter__deleted}>
                        <p>O’chirilgan</p>
                        <Switch/>
                    </div>
                    <div className={cls.filter__filtered}>
                        <p>Filterlangan</p>
                        <Switch/>
                    </div>
                </div>
            </div>
        </Modal>
    );
};