import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {editTeacherThunk} from "../../../../entities/teachers";
import {Modal} from "shared/ui/modal";
import {Input} from "shared/ui/input";
import {getTeacherId} from "../../../../entities/teachers";
import cls from './teacherEdit.module.sass'
import {Button} from "../../../../shared/ui/button";

export const TeacherEdit = ({ isOpen, onClose, onUpdate, teacherId}) => {
    const dispatch = useDispatch();
    const teacherID = useSelector(getTeacherId);
    const [selectedFrom, setSelectedFrom] = useState()
    const [selectedTo, setSelectedTo] = useState()
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setNumber] = useState('')
    const [age, setAge] = useState('')
    useEffect(() => {
        if (teacherID)
        {
            setName(teacherID.user?.name)
            setSurname(teacherID.user?.surname)
            setNumber(teacherID.user?.phone)
            setAge(teacherID.user?.age)
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
            }

        };
        dispatch(editTeacherThunk({id: (teacherID.id), updateTeacher}))
            .then(() => {
                onUpdate(updateTeacher)
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
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        // value={selectedFrom}
                    />

                    <div className={cls.filter__age}>
                        <Input
                            type={"text"}
                            extraClassName={cls.filter__input}
                            placeholder={"Familiya"}
                            onChange={(e) => setSurname(e.target.value)}
                            value={surname}
                            // value={selectedFrom}
                        />
                        <Input
                            type={"number"}
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
                            onChange={(e) => setAge(e.target.value)}
                            value={age}
                            // value={selectedFrom}
                        />
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