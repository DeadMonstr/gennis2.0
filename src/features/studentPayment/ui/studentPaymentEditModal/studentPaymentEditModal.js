import React, {useEffect, useState} from 'react';
import { Modal } from "../../../../shared/ui/modal";
import cls from './studentPaymentEdit.module.sass';
import { useDispatch } from "react-redux";
import { Form } from "../../../../shared/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../../../../shared/ui/input";
import { Select } from "../../../../shared/ui/select";
import { amountTypes } from "../../../../entities/profile/studentProfile";
import {studentPaymentDataThunk, studentPaymentTypeChangeThunk} from "../../model/studentPaymentThunk";

export const StudentPaymentEditModal = ({ portal, setPortal, paymentId, studentId }) => {
    const dispatch = useDispatch();

    const [paymentType, setPaymentType] = useState("");
    const { register, handleSubmit } = useForm();

    const handleChange = async (data) => {
        const requestData = {
            payment_type: paymentType || data.amount
        };
        dispatch(studentPaymentTypeChangeThunk({id: paymentId, data: requestData}));

          dispatch(studentPaymentDataThunk(studentId))
        setPortal(false)
    };

    return (
        <div>
            <Modal extraClass={cls.modalPage} setActive={setPortal} active={portal}>
                <Form extraClassname={cls.formPage} onSubmit={handleSubmit(handleChange)}>
                    <Select
                        extraClass={cls.selectPage}
                        {...register("amount")}
                        options={amountTypes}
                        onChangeOption={(value) => {
                            setPaymentType(value);
                        }}
                    />
                </Form>
            </Modal>
        </div>
    );
};

