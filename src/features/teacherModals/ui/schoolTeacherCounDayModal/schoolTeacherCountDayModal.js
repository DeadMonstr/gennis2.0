import React, {memo, useState} from 'react';
import cls from './schoolTeacherCountDayModal.module.sass'
import {Modal} from "../../../../shared/ui/modal";
import {Form} from "../../../../shared/ui/form";
import {Input} from "../../../../shared/ui/input";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {schoolTeacherDayThunk} from "../../model/schoolTeacherDayThunk";
import {useParams} from "react-router-dom";
import {fetchTeacherSalaryThunk} from "../../../../entities/teacherSalary";

export const SchoolTeacherCountDayModal = memo(({setEditMode, editMode, teacherData}) => {

    const {register, handleSubmit} = useForm()
    const [day, setDay] = useState("")
    const dispatch = useDispatch()
    const {id} = useParams()

    const handleAddDay = () => {
        const data = {
            worked_hours: day
        }


        dispatch(schoolTeacherDayThunk({id: teacherData.id, data:data}))
        dispatch(fetchTeacherSalaryThunk(id))
        setEditMode(false)
    }

    return (
        <div>
            <Modal extraClass={cls.dayModal} active={editMode} setActive={setEditMode}>
                <h1>O'qituvchining kelgan kunlari</h1>
                <Form onSubmit={handleSubmit(handleAddDay)}>
                    <Input
                        placeholder="Soat kiriting"
                        defaultValue={teacherData?.worked_hours}
                        type={"number"}
                        {...register("day")}
                        onChange={(e) => setDay(e.target.value)}
                    />
                </Form>
            </Modal>
        </div>
    );
});
