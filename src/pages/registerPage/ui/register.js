import {classData} from "entities/class/model/selector/classSelector";
import {getClassTypes} from "entities/class/model/thunk/classThunk";
import {fetchClassNumberList, getSchoolClassNumbers} from "entities/students";
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from "react-router-dom";
import {useTheme} from "shared/lib/hooks/useTheme";
import {
    fetchLanguages,
    fetchSubjects,
    registerUser,
    registerTeacher,
    registerEmployer,
    fetchCategories, registerTeacherImage
} from "../model/registerThunk";
import cls from "./register.module.sass";
import { fetchVacancyData, getVacancyJobs } from "features/vacancyModals/vacancyPageAdd";
import { Button } from "shared/ui/button";
import bg__img from 'shared/assets/images/reg__bg.svg';
import { Input } from 'shared/ui/input';
import { Textarea } from "shared/ui/textArea";
import { Select } from "shared/ui/select";
import { MiniLoader } from "shared/ui/miniLoader";
import { API_URL, useHttp, headers } from "shared/api/base";
import {onAddAlertOptions} from "../../../features/alert/model/slice/alertSlice";
import {getCategories, getLanguagesData, getSubjectsData} from "../model/registerSelector";
import {Form} from "../../../shared/ui/form";
import {branchQuery} from "shared/api/base";

const userstype = {
    types: [
        { id: 1, value: "student", name: "Student" },
        { id: 2, value: "teacher", name: "Teacher" },
        { id: 3, value: "employer", name: "Employer" }
    ]
};

const shift = [
    { id: 1, name: "1 smen" },
    { id: 2, name: "2 smen" },
    { id: 3, name: "hamma vaqt" }
]

export const Register = () => {
    const jobsData = useSelector(getVacancyJobs)
    const jobOptions = jobsData?.jobs?.map(job => ({
        id: job.group.id,
        name: job.group.name
    })) || [];


    const {
        register,
        handleSubmit,
        watch,
        setValue,
        reset
    } = useForm();
    const {"*":id} = useParams()
    const registerType = watch("registerType", "student");
    const username = watch("username", "");
    const {theme} = useTheme()

    const userSystem = JSON.parse(localStorage.getItem("selectedSystem"))
    const classNumbers = useSelector(getSchoolClassNumbers)
    const languages = useSelector(getLanguagesData);
    const branch = localStorage.getItem("selectedBranch")
    const subjects = useSelector(getSubjectsData)
    const classTypes = useSelector(classData)
    const categories = useSelector(getCategories)
    const dispatch = useDispatch();
    const [error, setError] = useState(false);
    const [selectedLang, setSelectedLang] = useState(1);
    const [selectedSubject, setSelectedSubject] = useState(1);
    const [selectedTime, setSelectedTime] = useState(1);
    const [selectedProfession, setSelectedProfession] = useState(1);
    const [selectedClass, setSelectedClass] = useState()
    const [selectedClassType, setSelectedClassType] = useState()
    const [selectedCategory, setSelectedCategory] = useState()
    const [loading, setLoading] = useState(false);
    const {request} = useHttp()
    const [usernameMessage, setUsernameMessage] = useState('');
    const [isUsernameAvailable, setIsUsernameAvailable] = useState(true);

    useEffect(() => {
        dispatch(fetchLanguages());
        dispatch(fetchSubjects())
        dispatch(getClassTypes())
        dispatch(fetchCategories())
        setValue("password", 12345678)
    }, []);

    useEffect(() => {
        dispatch(fetchVacancyData())
    }, [])

    useEffect(() => {
        if (userSystem?.id === 2 || theme === "app_school_theme") {
            dispatch(fetchClassNumberList())
        }
    }, [])

    useEffect(() => {
        if (username) {
            const checkUsername = async () => {
                try {
                    const response = await request(`${API_URL}Users/username-check/`, "POST", JSON.stringify({ username }), headers());

                    const data = await response
                    if (data.exists) {
                        setUsernameMessage(<p className={cls.errorMess}>
                            <i className="fa-solid fa-circle-exclamation" style={{color: "#f15c5c"}}></i>
                            Username band
                        </p>);
                        setIsUsernameAvailable(false);
                    } else {
                        setUsernameMessage(<p className={cls.successMess}>
                            <i className="fa-solid fa-circle-check"></i>
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


    const onSubmit = (data) => {
        if (!isUsernameAvailable) {
            return;
        }

        setLoading(true);
        const selectedTimes = shift.find(shift => shift.id === Number(selectedTime))
        const selectedLanguage = languages.find(lang => lang.id === Number(selectedLang));
        const selectedSubjectData = subjects.find(subj => subj.id === Number(selectedSubject));

        let res = {
            user: {
                ...data,
                observer: true,
                language: selectedLanguage?.id || "",
                branch: id,
            },
            subject: [selectedSubjectData?.id || null],
        };
        let res2 = {
            ...data,
            observer: true,
            language: selectedLanguage?.id || "",
            branch: id,
        };

        let registerAction;

        if (registerType === 'student') {
            let result;
            if (userSystem?.id === 2) {
                result = {
                    class_number: selectedClass
                }
            } else {
                result = {
                    subject: [selectedSubjectData?.id || null],
                }
            }
            res = {
                ...res,
                shift: selectedTimes?.id || "",
                parents_number: data.parents_phone,
                ...result
            };
            registerAction = registerUser(res);
        } else if (registerType === 'teacher') {
            if (userSystem?.id === 2) {
                res = {
                    ...res,
                    total_students: 1212,
                    color: "red",
                    class_type: selectedClassType,
                    salary_type: selectedCategory
                };

                registerAction = registerTeacher({res, file: res?.user?.resume[0]})
            } else {
                res = {
                    ...res,
                    total_students: 1212,
                    // color: "red",
                    // class_type: selectedClassType,
                    // toifa: selected
                };
                registerAction = registerTeacher(res);
            }
        } else if (registerType === 'employer') {
            res2 = {
                ...res2,
                profession: Number(selectedProfession),
            };
            registerAction = registerEmployer(res2);
        }

        if (registerAction) {
            // dispatch(registerTeacherImage({
            //     id: res?.user?.username,
            //     file: res?.user?.resume[0]
            // }))
            dispatch(registerAction).then((action) => {
                setLoading(false);
                if (action.type.endsWith('fulfilled')) {
                    dispatch(onAddAlertOptions({
                        type: "success",
                        status: true,
                        msg: `${registerType} muvofaqqiyatli qo'shildi`
                    }))
                    setSelectedLang(1);
                    setSelectedSubject(1);
                    setSelectedTime(1);
                    setSelectedProfession(1);
                    setUsernameMessage('');
                    setIsUsernameAvailable(true);
                } else {
                    console.error('Registration error:', action.error);
                    dispatch(onAddAlertOptions({
                        type: "error",
                        status: true,
                        msg: "Internet yoki serverda xatolik qayta urinib ko'ring"
                    }))
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
                            title={"Til"}
                            name={"language"}
                            onChangeOption={setSelectedLang}
                            options={languages}
                            defaultValue={1}
                        />


                        {
                            (theme === "app_school_theme" || userSystem?.id === 2) ? (
                                <Select
                                    extraClass={cls.extraClasses}
                                    title={"Sinf"}
                                    name={"class_number"}
                                    onChangeOption={setSelectedClass}
                                    options={classNumbers}
                                />
                            ) : (
                                <>
                                    <Select
                                        extraClass={cls.extraClasses}
                                        name={"subject_id"}
                                        onChangeOption={setSelectedSubject}
                                        options={subjects}
                                    />

                                    <Select
                                        extraClass={cls.extraClasses}
                                        name={"shift"}
                                        onChangeOption={setSelectedTime}
                                        options={shift}
                                    />
                                </>
                            )
                        }
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
                        {
                            (theme === "app_school_theme" || userSystem?.id === 2) && (
                                <>
                                    <Select
                                        extraClass={cls.extraClasses}
                                        name={"category"}
                                        options={categories}
                                        onChangeOption={setSelectedCategory}
                                        title={"Toifa"}
                                    />
                                    <Select
                                        extraClass={cls.extraClasses}
                                        name={"class_type"}
                                        options={classTypes}
                                        onChangeOption={setSelectedClassType}
                                        title={"Sinf turi"}
                                    />
                                    <div className={cls.resume}>
                                        <h2 style={{textAlign: "left", fontSize: "2rem"}}>Resume</h2>
                                        <Input
                                            type={"file"}
                                            name={"resume"}
                                            register={register}
                                            extraClassName={cls.resume__input}
                                        />
                                    </div>
                                </>
                            )
                        }
                    </>
                );
            case 'employer':
                return (
                    <>
                        <Select
                            extraClass={cls.extraClasses}
                            name={"language"}
                            onChangeOption={setSelectedLang}
                            options={languages}
                        />
                        <Select
                            extraClass={cls.extraClasses}
                            name={"profession"}
                            onChangeOption={setSelectedProfession}
                            options={jobOptions}
                        />
                        <div className={cls.resume}>
                            <h2 style={{textAlign: "left", fontSize: "2rem"}}>Resume</h2>
                            <Input
                                type={"file"}
                                name={"resume"}
                                register={register}
                                extraClassName={cls.resume__input}
                            />
                        </div>
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
