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
    const [classType, setClassType] = useState('')
    const [selectedSubjects, setSelectedSubjects] = useState([])


    const subjectOptions = subjects?.map(subject => ({
        value: subject?.id,
        label: subject?.name,
    }));


    useEffect(() => {
        dispatch(fetchSubjectsData())
    }, [])

    useEffect(() => {
        if (teacherID) {
            setName(teacherID.user?.name)
            setSurname(teacherID.user?.surname)
            setNumber(teacherID.user?.phone)
            setAge(teacherID.user?.age)
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
    console.log(categories , classTypes)
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
            subject: selectedSubjects.map(item => item?.value)

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

    console.log(teacherSalaryType , classType)
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
                            type={"text"}
                            extraClassName={cls.inputAge}
                            placeholder={"Yosh"}
                            title={"Yosh"}
                            onChange={(e) => setAge(e.target.value)}
                            value={age}
                            // value={selectedFrom}
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
                            defaultValue={categories[0].name}
                            onChangeOption={setTeacherSalaryType}
                            title={"Toifa"}
                        />
                        <Select
                            extraClass={cls.extraClasses}
                            name={"class_type"}
                            options={classTypes}
                            onChangeOption={setClassType}
                            title={"Sinf"}
                            defaultValue={classTypes[0].name}

                        />
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