import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {editTeacherThunk} from "../../../../entities/teachers";
import {Modal} from "shared/ui/modal";
import {Input} from "shared/ui/input";
import {getTeacherId} from "../../../../entities/teachers";
import cls from './teacherEdit.module.sass'
import {Button} from "../../../../shared/ui/button";
import {onAddAlertOptions} from "../../../alert/model/slice/alertSlice";
import {Select} from "../../../../shared/ui/select";
import {getCategories} from "../../../../pages/registerPage/model/registerSelector";
import {set} from "react-hook-form";
import {fetchCategories} from "../../../../pages/registerPage/model/registerThunk";

export const TeacherEdit = ({ isOpen, onClose, onUpdate, teacherId}) => {
    const dispatch = useDispatch();
    const teacherID = useSelector(getTeacherId);
    const categories = useSelector(getCategories)
    const userSystem = JSON.parse(localStorage.getItem("selectedSystem"))
    const [selectedFrom, setSelectedFrom] = useState()
    const [selectedTo, setSelectedTo] = useState()
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setNumber] = useState('');
    const [age, setAge] = useState('');
    const [teacherCategory, setTeacherCategory] = useState('')


    useEffect(() => {
        if (teacherID)
        {
            setName(teacherID.user?.name)
            setSurname(teacherID.user?.surname)
            setNumber(teacherID.user?.phone)
            setAge(teacherID.user?.age)
            setTeacherCategory(teacherID?.teacher_salary_type?.name)
        }
    }, [teacherID])

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    const handleEditTeacher = () => {
        if (!teacherID) return;
        const updateTeacher = {
            user: {
                name: name,
                surname: surname,
                phone: phone,
                age: age
            },
            teacher_salary_type: +teacherCategory

        };
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
                        extraClassName={cls.inputAge}
                        placeholder={"Ism"}
                        title={"Ismi"}
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        // value={selectedFrom}
                    />

                    <div className={cls.filter__age}>
                        <Input
                            type={"text"}
                            title={"Familiyasi"}
                            extraClassName={cls.filter__input}
                            placeholder={"Familiya"}
                            onChange={(e) => setSurname(e.target.value)}
                            value={surname}
                            // value={selectedFrom}
                        />
                        <Input
                            type={"number"}
                            title={"Telefon raqami"}
                            extraClassName={cls.filter__input}
                            placeholder={"Tel raqami"}
                            onChange={(e) => setNumber(e.target.value)}
                            value={phone}
                            // value={selectedTo}
                        />
                        <Input
                            type={"text"}
                            title={"Yoshi"}
                            extraClassName={cls.inputAge}
                            placeholder={"Yosh"}
                            onChange={(e) => setAge(e.target.value)}
                            value={age}
                            // value={selectedFrom}
                        />
                        {
                            (userSystem?.name === "school") && (
                                <>
                                    <Select
                                        extraClass={cls.extraClasses}
                                        name={"category"}
                                        options={categories}
                                        onChangeOption={setTeacherCategory}
                                        title={"Toifa"}
                                    />
                                </>
                            )
                        }

                        {/*<Input*/}
                        {/*    type={"text"}*/}
                        {/*    extraClassName={cls.inputAge}*/}
                        {/*    placeholder={"Class type"}*/}
                        {/*    onChange={setSelectedFrom}*/}
                        {/*    // value={selectedFrom}*/}
                        {/*/>*/}
                    </div>




                    <div className={cls.filter__switch}>
                      <div></div>
                        <Button extraClass={cls.submitBtn} type={"submit"} children={"Button"} onClick={handleEditTeacher}/>
                    </div>

                </div>
            </div>
        </Modal>
    );
}