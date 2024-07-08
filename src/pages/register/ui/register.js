import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from 'entities/user/userRegister/model/userRegisterThunk';
import cls from "./register.module.sass";
import Button from "shared/ui/button/button";
import bg__img from 'shared/assets/images/reg__bg.svg';
import { Input } from 'shared/ui/input';
import { Textarea } from "shared/ui/textArea";
import { Select } from "../../../shared/ui/select";

const studentOptions = {
    language: [
        { id: 1, value: "uz", name: "o'zbek" },
        { id: 2, value: "ru", name: "rus" }
    ],
    subject: [
        { id: 1, value: "rus tili", name: "rus tili" },
        { id: 2, value: "ingliz tili", name: "ingliz tili" },
        { id: 3, value: "matematika", name: "matematika" }
    ],
    time: [
        { id: 1, value: "1-smena", name: "1-smena" },
        { id: 2, value: "2-smena", name: "2-smena" },
        { id: 3, value: "hamma vaqt", name: "hamma vaqt" }
    ]
};

const teacherOptions = {
    language: [
        { id: 1, value: "uz", name: "o'zbek" },
        { id: 2, value: "ru", name: "rus" }
    ],
    subject: [
        { id: 1, value: "rus tili", name: "rus tili" },
        { id: 2, value: "ingliz tili", name: "ingliz tili" },
        { id: 3, value: "matematika", name: "matematika" }
    ]
};

const employerOptions = {
    profession: [
        { id: 1, value: "farrosh", name: "farrosh" },
        { id: 2, value: "elektrik", name: "elektrik" },
        { id: 3, value: "qorovul", name: "qorovul" }
    ]
};

const userstype = {
    types: [
        { id: 1, value: "student", name: "Student" },
        { id: 2, value: "teacher", name: "Teacher" },
        { id: 3, value: "employer", name: "Employer" }
    ]
};

export const Register = () => {
    const { control, handleSubmit, watch, setValue } = useForm();
    const registerType = watch("registerType", "student");
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(registerUser(data));
    };
    const onChange = (value) => {
        console.log(value, "value");
    };

    const renderFormFields = () => {
        switch (registerType) {
            case 'student':
                return (
                    <>
                        <Controller
                            name="language"
                            control={control}
                            render={({ field }) => <Select {...field} defaultValue="Ta'lim tili" options={studentOptions.language} onChangeOption={onChange}/>}
                        />
                        <Controller
                            name="subject"
                            control={control}
                            render={({ field }) => <Select {...field} defaultValue="Fan" options={studentOptions.subject}  onChangeOption={onChange}/>}
                        />
                        <Controller
                            name="time"
                            control={control}
                            render={({ field }) => <Select {...field} defaultValue="Vaqt" options={studentOptions.time} onChangeOption={onChange}/>}
                        />
                    </>
                );
            case 'teacher':
                return (
                    <>
                        <Controller
                            name="language"
                            control={control}
                            render={({ field }) => <Select {...field} defaultValue="Ta'lim tili" options={teacherOptions.language} onChangeOption={onChange}/>}
                        />
                        <Controller
                            name="subject"
                            control={control}
                            render={({ field }) => <Select {...field} defaultValue="Fan" options={teacherOptions.subject} onChangeOption={onChange}/>}
                        />
                    </>
                );
            case 'employer':
                return (
                    <>
                        <Controller
                            name="profession"
                            control={control}
                            render={({ field }) => <Select {...field} defaultValue="Kasb" options={employerOptions.profession} onChangeOption={onChange}/>}
                        />
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className={cls.login}>
            <div className={cls.selection}>
                <Controller
                    name="registerType"
                    control={control}
                    render={({ field }) => (
                        <Select {...field} defaultValue="User Type" options={userstype.types} onChange={(value) => setValue('registerType', value)} />
                    )}
                />
            </div>
            <div className={cls.login__boxes}>
                <div className={cls.login__boxes__login__box}>
                    <h1 className={cls.login__boxes__box__headerTitle}>Registratsiya</h1>
                    <div className={cls.login__boxes__box__form}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Controller
                                name="username"
                                control={control}
                                render={({ field }) => <Input {...field} placeholder="Username" required />}
                            />
                            <Controller
                                name="firstName"
                                control={control}
                                render={({ field }) => <Input {...field} placeholder="Ism" required />}
                            />
                            <Controller
                                name="lastName"
                                control={control}
                                render={({ field }) => <Input {...field} placeholder="Familiya" required />}
                            />
                            <Controller
                                name="middleName"
                                control={control}
                                render={({ field }) => <Input {...field} placeholder="Otasining ismi" required />}
                            />
                            <Controller
                                name="birthDate"
                                control={control}
                                render={({ field }) => <Input {...field} placeholder="Tug'ilgan kun" type="date" required />}
                            />
                            <Controller
                                name="phoneNumber"
                                control={control}
                                render={({ field }) => <Input {...field} placeholder="Telefon nomer" type="tel" required />}
                            />
                            <Controller
                                name="parentPhoneNumber"
                                control={control}
                                render={({ field }) => <Input {...field} placeholder="Telefon nomer (ota-onasiniki)" type="tel" required />}
                            />
                            <Controller
                                name="comment"
                                control={control}
                                render={({ field }) => <Textarea {...field} placeholder="Kommentariya" />}
                            />
                            {renderFormFields()}
                            <Button type="submit">Register</Button>
                        </form>
                        {/*{status === 'loading' && <p>Loading...</p>}*/}
                        {/*{status === 'failed' && <p>Error: {error}</p>}*/}
                    </div>
                </div>
                <div className={cls.login__aside}>
                    <img className={cls.login__aside__img} src={bg__img} alt="" />
                </div>
            </div>
        </div>
    );
};
