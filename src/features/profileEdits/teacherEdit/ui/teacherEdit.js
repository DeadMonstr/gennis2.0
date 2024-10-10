import {AnimatedMulti} from "features/workerSelect";
import React, {useEffect, useState} from 'react';
// import {} from ""
import {useDispatch, useSelector} from "react-redux";
import {editTeacherThunk} from "../../../../entities/teachers";
import {Modal} from "shared/ui/modal";
import {Input} from "shared/ui/input";
import {getTeacherId} from "../../../../entities/teachers";
import cls from './teacherEdit.module.sass'
import {Button} from "../../../../shared/ui/button";
import {onAddAlertOptions} from "../../../alert/model/slice/alertSlice";
import {Select} from "../../../../shared/ui/select";

import {fetchCategories, fetchSubjectsData, getClassTypeData, getSubjectsData , getCategories} from "entities/oftenUsed";
import {HexColorPicker} from "react-colorful";


export const TeacherEdit = ({isOpen, onClose, onUpdate, teacherId}) => {
    const dispatch = useDispatch();
    const teacherID = useSelector(getTeacherId);
    const categories = useSelector(getCategories)
    const classTypes = useSelector(getClassTypeData)
    const subjects = useSelector(getSubjectsData)

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [teacherSalaryType, setTeacherSalaryType] = useState('');
    const [phone, setNumber] = useState('')
    const [age, setAge] = useState('')
    const [money, setMoney] = useState("")
    const [classType, setClassType] = useState('')
    const [selectedSubjects, setSelectedSubjects] = useState([])
    const [colorChange, setColorChange] = useState("black")
    const [classTime, setClassTime] = useState()


    const subjectOptions = subjects?.map(subject => ({
        value: subject?.id,
        label: subject?.name,
    }));


    useEffect(() => {
        dispatch(fetchSubjectsData())
    }, [])

    useEffect(() => {
        if (teacherID) {
            setMoney(teacherID?.person_tage)
            setClassTime(teacherID?.working_hours)
            setName(teacherID.user?.name)
            setSurname(teacherID.user?.surname)
            setNumber(teacherID.user?.phone)
            setAge(teacherID.user?.birth_date)
            setTeacherSalaryType(teacherID?.teacher_salary_type)
            setClassType(teacherID?.class_type)
            setSelectedSubjects(
                teacherID?.subject?.map(subject => ({
                    value: subject?.id,
                    label: subject?.name,
                }))
            )
        }
    }, [teacherID])

    const handleEditTeacher = () => {
        if (!teacherID) return;
        const updateTeacher = {
            user: {
                name: name,
                surname: surname,
                phone: phone,
                age: age
            },
            teacher_salary_type: teacherSalaryType,
            class_type: classType,
            subject: selectedSubjects.map(item => item?.value),
            color: colorChange,
            working_hours: +classTime,
            person_tage: +money

        };

        console.log(updateTeacher, "updateTeacher")
        dispatch(editTeacherThunk({id: (teacherID.id), updateTeacher}))
            .then(() => {
                onUpdate(updateTeacher)
                dispatch(onAddAlertOptions({
                    type: "success",
                    status: true,
                    msg: "Ma'lumot muvofaqqiyatli o'zgartirildi"
                }))
                onClose()
            })
    }

    if (!isOpen) return null


    return (
        <Modal
            active={isOpen}
            setActive={onClose}
        >
            <div className={cls.filter}>
                <h1>Ma'lumotlarni o'zgartirish</h1>
                <div className={cls.filter__container}>

                    <Input
                        type={"text"}
                        title={"Ism"}
                        extraClassName={cls.inputAge}
                        placeholder={"Ism"}
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        // value={selectedFrom}
                    />

                    <div className={cls.filter__age}>
                        <Input
                            type={"text"}
                            title={"Familiya"}
                            extraClassName={cls.filter__input}
                            placeholder={"Familiya"}
                            onChange={(e) => setSurname(e.target.value)}
                            value={surname}
                            // value={selectedFrom}
                        />
                        <Input
                            type={"number"}
                            title={"Tel raqami"}
                            extraClassName={cls.filter__input}
                            placeholder={"Tel raqami"}
                            onChange={(e) => setNumber(e.target.value)}
                            value={phone}
                            // value={selectedTo}
                        />
                        <Input
                            type={"date"}
                            extraClassName={cls.inputAge}
                            placeholder={"Tug'ilgan yili"}
                            title={"Tug'ilgan yili"}
                            onChange={(e) => setAge(e.target.value)}
                            value={age}
                            // value={selectedFrom}
                        />
                        <Input
                            type={"text"}
                            extraClassName={cls.inputAge}
                            placeholder={"Ustama foiz"}
                            title={"Ustama foiz"}
                            onChange={(e) => setMoney(e.target.value)}
                            value={money}
                        />
                        <AnimatedMulti
                            options={subjectOptions}
                            onChange={setSelectedSubjects}
                            extraClass={cls.multiSelect}
                            value={selectedSubjects}
                            fontSize={15}
                        />
                        <Select
                            extraClass={cls.extraClasses}
                            name={"category"}
                            options={categories}
                            defaultValue={teacherSalaryType?.id ?? teacherSalaryType}
                            onChangeOption={setTeacherSalaryType}
                            title={"Toifa"}
                        />
                        <Select
                            extraClass={cls.extraClasses}
                            name={"class_type"}
                            options={classTypes}
                            onChangeOption={setClassType}
                            title={"Sinf"}
                            defaultValue={classType}

                        />
                        <Input
                            type={"number"}
                            title={"Darslik soat"}
                            extraClassName={cls.filter__input}
                            placeholder={"Darslik soat"}
                            onChange={(e) => setClassTime(e.target.value)}
                            value={classTime}
                            // value={selectedTo}
                        />

                        <div>
                            <div style={{display: "flex" , gap: "1rem" , alignItems: "center" , marginBottom: "10px"}}><h3>Rang qushish :</h3> <div style={{backgroundColor: colorChange ? colorChange : "black" , width: "30px" , height: "30px" , borderRadius: "5px" , boxShadow: colorChange === "#ffffff" ? "0 0 5px 0" : null}}></div></div>
                            <HexColorPicker style={{width: "30rem", height: "15rem"}} color={colorChange}
                                            onChange={setColorChange}/>
                        </div>
                    </div>


                    <div style={{display: "flex", gap: "5px"}}>
                        {/*<a href={API_URL_DOC+} download><Button> Resume Saqlab olish</Button></a>*/}

                        <Button>Resume O'zgartirish</Button>
                    </div>

                    <div className={cls.filter__switch}>
                        <div></div>
                        <Button extraClass={cls.submitBtn} type={"submit"} children={"Button"}
                                onClick={handleEditTeacher}/>
                    </div>

                </div>
            </div>
        </Modal>
    );
}