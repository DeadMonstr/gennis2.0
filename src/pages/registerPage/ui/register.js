import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubjectsAndLanguages, registerUser, registerTeacher, registerEmployer } from "../model/registerThunk";
import cls from "./register.module.sass";
import { Button } from "shared/ui/button";
import bg__img from 'shared/assets/images/reg__bg.svg';
import { Input } from 'shared/ui/input';
import { Textarea } from "shared/ui/textArea";
import { Select } from "shared/ui/select";
import { MiniLoader } from "shared/ui/miniLoader";
import { Alert } from "shared/ui/alert";
import { API_URL, useHttp, headers } from "../../../shared/api/base";

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
    const username = watch("username", "");
    const dispatch = useDispatch();
    const [error, setError] = useState(false);
    const [selectedLang, setSelectedLang] = useState(1);
    const [selectedSubject, setSelectedSubject] = useState(1);
    const [selectedTime, setSelectedTime] = useState(1);
    const [selectedProfession, setSelectedProfession] = useState(1);
    const [loading, setLoading] = useState(false);

    const [usernameMessage, setUsernameMessage] = useState('');
    const [isUsernameAvailable, setIsUsernameAvailable] = useState(true);

    const subjects = useSelector(state => state.registerUser.subjects) || [];
    const languages = useSelector(state => state.registerUser.languages) || [];

    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        dispatch(fetchSubjectsAndLanguages());
    }, [dispatch]);

    useEffect(() => {
        if (username) {
            const checkUsername = async () => {
                try {
                    const response = await fetch(`${API_URL}/Users/username-check/`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            ...headers
                        },
                        body: JSON.stringify({ username })
                    });

                    const data = await response.json();
                    if (data.exists) {
                        setUsernameMessage(<p className={cls.errorMess}>
                            <i class="fa-solid fa-circle-exclamation" style={{color: "#f15c5c"}}></i>
                            Username band
                        </p>);
                        setIsUsernameAvailable(false);
                    } else {
                        setUsernameMessage(<p className={cls.successMess}>
                            <i class="fa-solid fa-circle-check"></i>
                            Username bo'sh
                        </p>);
                        setIsUsernameAvailable(true);
                    }
                } catch (error) {
                    console.error('Error checking username:', error);
                    setUsernameMessage('Error checking username');
                    setIsUsernameAvailable(false);
                }
            };

            checkUsername();
        } else {
            setUsernameMessage(<p>Username kiriting</p>);
            setIsUsernameAvailable(false);
        }
    }, [username]);

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
        if (!isUsernameAvailable) {
            showAlert('error', 'Please choose a different username');
            return;
        }

        setLoading(true);
        const selectedLanguage = languages.find(lang => lang.id === Number(selectedLang));
        const selectedSubjectData = subjects.find(subj => subj.id === Number(selectedSubject));

        let res = {
            user: {
                ...data,
                observer: true,
                language: selectedLanguage?.id || "",
                branch: 1,
            },
            subject: [selectedSubjectData?.id || null],
        };
        let res2 = {
            ...data,
            observer: true,
            language: selectedLanguage?.id || "",
            branch: 1,
        };

        let registerAction;

        if (registerType === 'student') {
            res = {
                ...res,
                shift: selectedTime === 1 ? "1 smen" : selectedTime === 2 ? "2 smen" : "hamma vaqt",
                parents_number: data.parents_phone,
            };
            registerAction = registerUser(res);
        } else if (registerType === 'teacher') {
            res = {
                ...res,
                total_students: 1212,
                color: "red",
            };
            registerAction = registerTeacher(res);
        } else if (registerType === 'employer') {
            res2 = {
                ...res2,
                profession: selectedProfession,
            };
            registerAction = registerEmployer(res2);
        }

        if (registerAction) {
            dispatch(registerAction).then((action) => {
                setLoading(false);
                if (action.type.endsWith('fulfilled')) {
                    showAlert('success', 'Registration successful!');
                    reset();
                    setSelectedLang(1);
                    setSelectedSubject(1);
                    setSelectedTime(1);
                    setSelectedProfession(1);
                    setUsernameMessage('');
                    setIsUsernameAvailable(true);
                } else {
                    console.error('Registration error:', action.error);
                    showAlert('error', 'Registration failed. Please try again.');
                    setError(true);
                }
            });
        }
    };

    const renderFormFields = () => {
        switch (registerType) {
            case 'student':
                return (
                    <>
                        <Select
                            extraClass={cls.extraClasses}
                            name={"language"}
                            onChangeOption={setSelectedLang}
                            options={languages.map(lang => ({ id: lang.id, name: lang.name }))}
                        />

                        <Select
                            extraClass={cls.extraClasses}
                            name={"subject_id"}
                            onChangeOption={setSelectedSubject}
                            options={subjects.map(subj => ({ id: subj.id, name: subj.name }))}
                        />

                        <Select
                            extraClass={cls.extraClasses}
                            name={"shift"}
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
                            extraClass={cls.extraClasses}
                            name={"language"}
                            onChangeOption={setSelectedLang}
                            options={languages.map(lang => ({ id: lang.id, name: lang.name }))}
                        />
                        <Select
                            extraClass={cls.extraClasses}
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
                            extraClass={cls.extraClasses}
                            name={"language"}
                            onChangeOption={setSelectedLang}
                            options={languages.map(lang => ({ id: lang.id, name: lang.name }))}
                        />
                        <Select
                            extraClass={cls.extraClasses}
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
                                title={usernameMessage && <p className={cls.mess}>{usernameMessage}</p>}
                                register={register}
                                placeholder="Username"
                                required
                                extraClassName={cls.extraClasss}
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
                            {registerType === 'student' &&
                                <Input
                                    register={register}
                                    placeholder="Ota-ona telefon raqami"
                                    type="number"
                                    required
                                    name={"parents_phone"}
                                />
                            }

                            <Textarea
                                register={register}
                                placeholder="Kommentariya"
                                name={"comment"}
                            />
                            {renderFormFields()}
                            {loading ?
                                <MiniLoader /> :
                                <Button type={!isUsernameAvailable ? "disabled" : "submit"} extraClass={cls.registerBtn}>
                                    Register
                                </Button>
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
