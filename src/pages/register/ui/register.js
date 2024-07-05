import React, { useState } from 'react';
import cls from "./register.module.sass";
import Button from "shared/ui/button/button";
import bg__img from 'shared/assets/images/reg__bg.svg'
import {Input} from 'shared/ui/input'
import {Textarea} from "shared/ui/textArea";
import { Select } from "../../../shared/ui/select";

// Options for Select dropdowns
const studentOptions = {
    language:
        [
            {
                value: "uz",
                label: "o'zbek"
            },
            { value: "ru",
                label: "rus"
            }
        ],
    subject:
        [
            {
                value: "rus tili",
                label: "rus tili"
            },
            {
                value: "ingliz tili",
                label: "ingliz tili"
            },
            {
                value: "matematika",
                label: "matematika"
            }
        ],
    time:
        [
            {
                value: "1-smena",
                label: "1-smena"
            },
            {
                value: "2-smena",
                label: "2-smena"
            },
            {
                value: "hamma vaqt",
                label: "hamma vaqt"
            }
        ]
};

const teacherOptions = {
    language:
        [
            {
                value: "uz",
                label: "o'zbek"
            },
            {
                value: "ru",
                label: "rus"
            }
        ],
    subject:
        [
            {
                value: "rus tili",
                label: "rus tili"
            },
            {
                value: "ingliz tili",
                label: "ingliz tili"
            },
            {
                value: "matematika",
                label: "matematika"
            }
        ]
};

const employerOptions = {
    profession:
        [
            {
                value: "farrosh",
                label: "farrosh"
            },
            {
                value: "elektrik",
                label: "elektrik"
            },
            {
                value: "qorovul",
                label: "qorovul"
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
                            placeholder="username"
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
                            type="tel"
                            required
                        />
                        <Input
                            placeholder="Telefon nomer (ota-onasiniki)"
                            type="tel"
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
                            placeholder="username"
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
                            type="tel"
                            required
                        />
                        <Input
                            placeholder="Telefon nomer (ota-onasiniki)"
                            type="tel"
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
                            placeholder="username"
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
                            type="tel"
                            required
                        />
                        <Input
                            placeholder="Telefon nomer (ota-onasiniki)"
                            type="tel"
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
