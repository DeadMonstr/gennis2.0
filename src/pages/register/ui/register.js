import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerUser } from 'pages/register/model/registerThunk';
import cls from "./register.module.sass";
import { Button } from "shared/ui/button";
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
    const { register, control, handleSubmit, watch, setValue } = useForm();
    const registerType = watch("registerType", "student");
    const dispatch = useDispatch();
    // const [language, setLanguage] = useState()

    const onSubmit = (data) => {
        console.log(data);
        // const res = {
        //     ...data,
        //     shift: time,
        //     language: +language,
        //     job: employerOptions,
        //     location: +selectedLocation,
        //     selectedSubjects: selectedSubjects
        // }
        // dispatch(registerUser(data));
    };

    const renderFormFields = () => {
        switch (registerType) {
            case 'student':
                return (
                    <>
                         <Select
                             defaultValue="Ta'lim tili"
                             options={studentOptions.language}
                         />

                         <Select
                             defaultValue="Fan"
                             options={studentOptions.subject}
                         />

                         <Select
                             defaultValue="Vaqt"
                             options={studentOptions.time}
                         />

                    </>
                );
            case 'teacher':
                return (
                    <>
                         <Select
                             defaultValue="Ta'lim tili"
                             options={teacherOptions.language}
                         />
                        <Select

                            name={"subject"}
                            defaultValue="Fan"
                            options={teacherOptions.subject}
                        />
                    </>
                );
            case 'employer':
                return (
                    <>
                        <Select

                            name={"profession"}
                            defaultValue="Kasb"
                            options={employerOptions.profession}
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
                <Select
                    defaultValue="User Type"
                    options={userstype.types}
                    onChangeOption={(value) => setValue('registerType', value)}
                />
            </div>
            <div className={cls.login__boxes}>
                <div className={cls.login__boxes__login__box}>
                    <h1 className={cls.login__boxes__box__headerTitle}>Registratsiya</h1>
                    <div className={cls.login__boxes__box__form}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input
                                register={register}
                                placeholder="Username"
                                required
                                name={"username"}
                            />
                            <Input
                                register={register}
                                placeholder="Ism"
                                required
                                name={"name"}
                            />

                            <Input
                                register={register}
                                placeholder="Familiya"
                                required
                                name={"surname"}
                            />

                            <Input
                                register={register}
                                placeholder="Otasi ismi"
                                required
                                name={"father_name"}
                            />
                            <Input
                                register={register}
                                placeholder="Parol"
                                required
                                type={"password"}
                                name={"password"}
                            />

                            <Input
                                register={register}
                                placeholder="Tug'ilgan kun"
                                type="date"
                                required
                                name={"birth_date"}
                            />

                            <Input
                                register={register}
                                placeholder="Telefon raqami"
                                type="number"
                                required
                                name={"phone"}
                            />

                            <Input
                                register={register}
                                placeholder="Ota-ona telefon raqami"
                                type="number"
                                required
                                name={"parents_phone"}
                            />
                            <Textarea
                                register={register}
                                placeholder="Kommentariya"
                                name={"comment"}
                            />
                            {renderFormFields()}
                            <Button type="submit">Register</Button>
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
