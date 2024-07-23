import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerUser } from 'pages/register/model/registerThunk';
import cls from "./register.module.sass";
import { Button } from "shared/ui/button";
import bg__img from 'shared/assets/images/reg__bg.svg';
import { Input } from 'shared/ui/input';
import { Textarea } from "shared/ui/textArea";
import { Select } from "shared/ui/select";
import {MiniLoader} from "shared/ui/miniLoader";
import {Alert} from "shared/ui/alert";// Import the Alert component

const teacherOptions = {
    language: [
        { id: 1, name: "o'zbek" },
        { id: 2, name: "rus" }
    ],
    subject: [
        { id: 1, label: "rus tili", name: "rus tili" },
        { id: 2, label: "ingliz tili", name: "ingliz tili" },
        { id: 3, label: "matematika", name: "matematika" }
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
    const [selectedLang, setSelectedLang] = useState(1);
    const [selectedSubject, setSelectedSubject] = useState(1);
    const [selectedTime, setSelectedTime] = useState(1);
    const [selectedProfession, setSelectedProfession] = useState(1);
    const [studentOptions, setStudentOptions] = useState({
        shift: [
            { id: 1, name: "1-smena" },
            { id: 2, name: "2-smena" },
            { id: 3, name: "hamma vaqt" }
        ],
        subject: [],
        language: []
    });
    const [loading, setLoading] = useState(false);

    // State for alerts
    const [alerts, setAlerts] = useState([]);

    const showAlert = (type, message) => {
        const newAlert = { id: Date.now(), type, message };
        setAlerts([...alerts, newAlert]);
        setTimeout(() => {
            hideAlert(newAlert.id);
        }, 5000);
    };

    const hideAlert = (id) => {
        setAlerts(alerts => alerts.map(alert =>
            alert.id === id ? { ...alert, hide: true } : alert
        ));
        setTimeout(() => {
            setAlerts(alerts => alerts.filter(alert => alert.id !== id));
        }, 500);
    };
    
    const onSubmit = (data) => {
        setLoading(true);
        const res = {
            shift: selectedTime,
            subject_id: +selectedSubject,
            parents_number: data.parents_phone,
            user: {
                ...data,
                language: +selectedLang,
                branch: 1,
                selectedProfession: +selectedProfession
            }
        };

        dispatch(registerUser(res)).then((action) => {
            setLoading(false);
            if (action.type === registerUser.fulfilled.type) {
                showAlert('success', 'Registration successful!');
            } else {
                console.error('Registration error:', action.error);
                showAlert('error', 'Registration failed. Please try again.');
            }
        });
    };

    const renderFormFields = () => {
        switch (registerType) {
            case 'student':
                return (
                    <>
                        <Select
                            name={"language"}
                            defaultValue={selectedLang}
                            onChangeOption={setSelectedLang}
                            options={studentOptions.language}
                        />

                        <Select
                            name={"subject_id"}
                            onChangeOption={setSelectedSubject}
                            options={studentOptions.subject}
                        />

                        <Select
                            name={"shift"}
                            defaultValue={selectedTime}
                            onChangeOption={setSelectedTime}
                            options={studentOptions.shift}
                        />
                    </>
                );
            case 'teacher':
                return (
                    <>
                        <Select
                            name={"language"}
                            defaultValue={selectedLang}
                            onChangeOption={setSelectedLang}
                            options={teacherOptions.language}
                        />
                        <Select
                            name={"subject_id"}
                            onChangeOption={setSelectedSubject}
                            options={teacherOptions.subject}
                        />
                    </>
                );
            case 'employer':
                return (
                    <>
                        <Select
                            name={"profession"}
                            onChangeOption={setSelectedProfession}
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
            <Alert alerts={alerts} hideAlert={hideAlert} /> {/* Add Alert component */}
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
                            {loading ?
                                <MiniLoader /> :
                                <Button type="submit" extraClass={cls.registerBtn}>Register</Button>
                            }
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
