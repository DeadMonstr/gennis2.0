import React, { useState } from 'react';
import cls from "./register.module.sass";
import Button from "shared/ui/button/button";
import bg__img from 'shared/assets/images/reg__bg.svg'
import {Input} from 'shared/ui/input'
import {Textarea} from "shared/ui/textArea";
import { Select } from "../../../shared/ui/select";
import {SearchPlatformInput} from "../../../features/searchInput";

// Options for Select dropdowns
const studentOptions = {
    language:
        [
            {
                id: 1,
                value: "uz",
                name: "o'zbek"
            },
            {
                id: 2,
                value: "ru",
                name: "rus"
            }
        ],
    subject:
        [
            {
                id: 1,
                value: "rus tili",
                name: "rus tili"
            },
            {
                id: 1,
                value: "ingliz tili",
                name: "ingliz tili"
            },
            {
                id: 1,
                value: "matematika",
                name: "matematika"
            }
        ],
    time:
        [
            {
                id: 1,
                value: "1-smena",
                name: "1-smena"
            },
            {
                id: 1,
                value: "2-smena",
                name: "2-smena"
            },
            {
                id: 1,
                value: "hamma vaqt",
                name: "hamma vaqt"
            }
        ]
};

const teacherOptions = {
    language:
        [
            {
                id: 1,
                value: "uz",
                name: "o'zbek"
            },
            {
                id: 1,
                value: "ru",
                name: "rus"
            }
        ],
    subject:
        [
            {
                id: 1,
                value: "rus tili",
                name: "rus tili"
            },
            {
                id: 1,
                value: "ingliz tili",
                name: "ingliz tili"
            },
            {
                id: 1,
                value: "matematika",
                name: "matematika"
            }
        ]
};

const employerOptions = {
    profession:
        [
            {
                id: 1,
                value: "farrosh",
                name: "farrosh"
            },
            {
                id: 1,
                value: "elektrik",
                name: "elektrik"
            },
            {
                id: 1,
                value: "qorovul",
                name: "qorovul"
            }
        ]
};

export const Register = () => {
    const [registerType, setRegisterType] = useState('student');

    const onChange = (value) => {
        console.log(value, "value");
    };

    const renderFormFields = () => {
        switch (registerType) {
            case 'student':
                return (
                    <>
                        <Input
                            placeholder="Username"
                            required
                        />
                        <Input
                            placeholder="Ism"
                            type="text"
                            required
                        />
                        <Input
                            placeholder="Familiya"
                            type="text"
                            required
                        />
                        <Input
                            placeholder="Otasining ismi"
                            type="text"
                            required
                        />
                        <Input
                            placeholder="Tug'ilgan kun"
                            type="date"
                            required
                        />
                        <Input
                            placeholder="Telefon nomer"
                            type="number"
                            required
                        />
                        <Input
                            placeholder="Telefon nomer (ota-onasiniki)"
                            type="number"
                            required
                        />
                        <Textarea
                            placeholder="Kommentariya"
                        />
                        <Select
                            defaultValue="Ta'lim tili"
                            options={studentOptions.language}
                            onChangeOption={onChange}
                            required
                        />
                        <Select
                            defaultValue="Fan"
                            options={studentOptions.subject}
                            onChangeOption={onChange}
                            required
                        />
                        <Select
                            defaultValue="Vaqt"
                            options={studentOptions.time}
                            onChangeOption={onChange}
                            required
                        />
                    </>
                );
            case 'teacher':
                return (
                    <>
                        <Input
                            placeholder="Username"
                            required
                        />
                        <Input
                            placeholder="Ism"
                            type="text"
                            required
                        />
                        <Input
                            placeholder="Familiya"
                            type="text"
                            required
                        />
                        <Input
                            placeholder="Otasining ismi"
                            type="text"
                            required
                        />
                        <Input
                            placeholder="Tug'ilgan kun"
                            type="date"
                            required
                        />
                        <Input
                            placeholder="Telefon nomer"
                            type="number"
                            required
                        />
                        <Input
                            placeholder="Telefon nomer (ota-onasiniki)"
                            type="number"
                            required
                        />
                        <Textarea
                            placeholder="Kommentariya"
                        />
                        <Select
                            defaultValue="Ta'lim tili"
                            options={teacherOptions.language}
                            onChangeOption={onChange}
                            required
                        />
                        <Select
                            defaultValue="Fan"
                            options={teacherOptions.subject}
                            onChangeOption={onChange}
                            required
                        />
                    </>
                );
            case 'employer':
                return (
                    <>
                        <Input
                            placeholder="Username"
                            required
                        />
                        <Input
                            placeholder="Ism"
                            type="text"
                            required
                        />
                        <Input
                            placeholder="Familiya"
                            type="text"
                            required
                        />
                        <Input
                            placeholder="Otasining ismi"
                            type="text"
                            required
                        />
                        <Input
                            placeholder="Tug'ilgan kun"
                            type="date"
                            required
                        />
                        <Input
                            placeholder="Telefon nomer"
                            type="number"
                            required
                        />
                        <Input
                            placeholder="Telefon nomer (ota-onasiniki)"
                            type="number"
                            required
                        />
                        <Textarea
                            placeholder="Kommentariya"
                        />
                        <Select
                            defaultValue="Kasb"
                            options={employerOptions.profession}
                            onChangeOption={onChange}
                            required
                        />
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className={cls.login}>
            <div>
                <Button onClick={() => setRegisterType('student')}>Student</Button>
                <Button onClick={() => setRegisterType('teacher')}>Teacher</Button>
                <Button onClick={() => setRegisterType('employer')}>Employer</Button>
            </div>
            <div className={cls.login__boxes}>
                <div className={cls.login__boxes__login__box}>
                    <h1 className={cls.login__boxes__box__headerTitle}>Registratsiya</h1>
                    <div className={cls.login__boxes__box__form}>
                        <form action="">
                            {renderFormFields()}
                            <Button>Register</Button>
                        </form>
                    </div>
                </div>
                <div className={cls.login__aside}>
                    <img className={cls.login__aside__img} src={bg__img} alt="" />
                </div>
            </div>
        </div>
    );
};
