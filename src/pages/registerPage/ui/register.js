import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, fetchSubjectsAndLanguages } from 'pages/register/model/registerThunk';
import cls from "./register.module.sass";
import { Button } from "shared/ui/button";
import bg__img from 'shared/assets/images/reg__bg.svg';
import { Input } from 'shared/ui/input';
import { Textarea } from "shared/ui/textArea";
import { Select } from "shared/ui/select";
import { MiniLoader } from "shared/ui/miniLoader";
import { Alert } from "shared/ui/alert";

const userstype = {
    types: [
        { id: 1, value: "student", name: "Student" },
        { id: 2, value: "teacher", name: "Teacher" },
        { id: 3, value: "employer", name: "Employer" }
    ]
};

export const Register = () => {
    const { register, handleSubmit, watch, setValue, reset } = useForm();
    const registerType = watch("registerType", "student");
    const dispatch = useDispatch();
    const [selectedLang, setSelectedLang] = useState(1);
    const [selectedSubject, setSelectedSubject] = useState(1);
    const [selectedTime, setSelectedTime] = useState(1);
    const [selectedProfession, setSelectedProfession] = useState(1);
    const [loading, setLoading] = useState(false);

    const subjects = useSelector(state => state.registerUser.subjects) || [];
    const languages = useSelector(state => state.registerUser.languages) || [];

    // State for alerts
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        dispatch(fetchSubjectsAndLanguages());
    }, [dispatch]);

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
        const selectedLanguage = languages.filter(lang => lang.id === Number(selectedLang));
        const selectedSubjectData = subjects.filter(subj => subj.id === Number(selectedSubject));

        const res = {
            shift: selectedTime === 1 ? "1 smen" : selectedTime === 2 ? "2 smen" : "hamma vaqt",
            parents_number: data.parents_phone,
            user: {
                ...data,
                observer: true,
                language: {
                    name: selectedLanguage[0]?.name || ""
                },
                branch: {
                    id: 1,
                    name: "sergili",
                    number: 1
                }
            },
            subject: {
                id: selectedSubjectData[0]?.id || null,
                name: selectedSubjectData[0]?.name || "",
                ball_number: selectedSubjectData[0]?.ball_number || null
            }
        };

        dispatch(registerUser(res)).then((action) => {
            setLoading(false);
            if (action.type === registerUser.fulfilled.type) {
                showAlert('success', 'Registration successful!');
                reset(); // Bu yerda reset funksiyasini chaqiryapmiz
                setSelectedLang(1); // holatlarni qayta o'rnating
                setSelectedSubject(1);
                setSelectedTime(1);
                setSelectedProfession(1);
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
                            options={languages.map(lang => ({ id: lang.id, name: lang.name }))}
                        />

                        <Select
                            name={"subject_id"}
                            onChangeOption={setSelectedSubject}
                            options={subjects.map(subj => ({ id: subj.id, name: subj.name }))}
                        />

                        <Select
                            name={"shift"}
                            defaultValue={selectedTime}
                            onChangeOption={setSelectedTime}
                            options={[
                                { id: 1, name: "1 smen" },
                                { id: 2, name: "2 smen" },
                                { id: 3, name: "hamma vaqt" }
                            ]}
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
                            options={languages.map(lang => ({ id: lang.id, name: lang.name }))}
                        />
                        <Select
                            name={"subject_id"}
                            onChangeOption={setSelectedSubject}
                            options={subjects.map(subj => ({ id: subj.id, name: subj.name }))}
                        />
                    </>
                );
            case 'employer':
                return (
                    <>
                        <Select
                            name={"profession"}
                            onChangeOption={setSelectedProfession}
                            options={[
                                { id: 1, value: "farrosh", name: "farrosh" },
                                { id: 2, value: "elektrik", name: "elektrik" },
                                { id: 3, value: "qorovul", name: "qorovul" }
                            ]}
                        />
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className={cls.login}>
            <Alert alerts={alerts} hideAlert={hideAlert} />
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
