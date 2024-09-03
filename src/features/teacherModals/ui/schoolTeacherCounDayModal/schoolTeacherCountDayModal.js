import React, {memo, useState} from 'react';
import cls from './schoolTeacherCountDayModal.module.sass'
import {Modal} from "../../../../shared/ui/modal";
import {Form} from "../../../../shared/ui/form";
import {Input} from "../../../../shared/ui/input";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {schoolTeacherDayThunk} from "../../model/schoolTeacherDayThunk";

export const SchoolTeacherCountDayModal = memo(({setEditMode, editMode, teacherId}) => {

    const {register, handleSubmit} = useForm()
    const [day, setDay] = useState("")
    const dispatch = useDispatch()
    console.log(teacherId, "teacherId")
    const handleAddDay = () => {
        const data = {
            worked_days: day
        }
        dispatch(schoolTeacherDayThunk({id: teacherId, data:data}))

    }

    return (
        <div>
            <Modal extraClass={cls.dayModal} active={editMode} setActive={setEditMode}>
                <h1>O'qituvchining kelgan kunlari</h1>
                <Form onSubmit={handleSubmit(handleAddDay)}>
                    <Input
                        placeholder="Kun kiriting"
                        type={"number"}
                        {...register("day")}
                        onChange={(e) => setDay(e.target.value)}
                    />
                </Form>
            </Modal>
        </div>
    );
});
