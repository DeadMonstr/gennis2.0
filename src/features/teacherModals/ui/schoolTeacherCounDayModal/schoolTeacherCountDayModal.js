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
import {onChangeSalary} from "../../../../entities/teacherSalary/ui/teacherSalarySlice";
import {API_URL, headers, useHttp} from "../../../../shared/api/base";

export const SchoolTeacherCountDayModal = memo(({setEditMode, editMode, teacherData}) => {

    const {register, handleSubmit} = useForm()
    const [day, setDay] = useState("")
    const dispatch = useDispatch()
    const {id} = useParams()

    const {request} = useHttp()

    const handleAddDay = () => {
        const data = {
            worked_hours: day
        }
        request(`${API_URL}Teachers/teachers/salary/update_patch/${teacherData.id}/` , "PATCH" , JSON.stringify(data) , headers())
            .then(res => {
                console.log(res)
                dispatch(fetchTeacherSalaryThunk(id))

            })

        console.log(data)


        // dispatch(schoolTeacherDayThunk({id: teacherData.id, data: data}))
        // dispatch(onChangeSalary(id))
        setEditMode(false)
    }

    return (
        <div>
            <Modal extraClass={cls.dayModal} active={editMode} setActive={setEditMode}>
                <h1>O'qituvchining 1 oylik dars soatlari</h1>
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
