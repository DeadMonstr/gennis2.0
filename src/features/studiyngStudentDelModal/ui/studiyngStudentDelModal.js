import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'shared/ui/modal';
import { Button } from 'shared/ui/button';
import cls from './studiyngStudentDelModal.module.sass';
import alertIcon from 'shared/assets/icons/alert.svg'
import {onAddAlertOptions} from "../../alert/model/slice/alertSlice";
import {studiyngStudentDelThunk} from "../model/studiyngStudentDelThunk";
import {fetchOnlyNewStudentsData} from "../../../entities/students";
import {useParams} from "react-router-dom";

export const StudiyngStudentDelModal = ({ isOpen, onClose, userId}) => {

    const dispatch = useDispatch();
    const {"*": id} = useParams()
    const userBranchId = id

    const handleDelete = () => {
        dispatch(studiyngStudentDelThunk(userId)).then(() => {
            dispatch(onAddAlertOptions({
                type: "success",
                status: true,
                msg: "Oylik muvofaqqiyatli o'chirildi"
            }))
            onClose();
            dispatch(fetchOnlyNewStudentsData({id: userBranchId}));
        });
    };


    if (!isOpen) return null;
    return (
        <Modal active={isOpen} setActive={onClose}>
            <div className={cls.filter}>
                <div className={cls.deleteHead}>
                    <img src={alertIcon} alt=""/>
                    <h1>Delete modal</h1>
                </div>
                <div className={cls.deleteText}>
                    <h2>Are you sure delete this card</h2>
                </div>
                <div className={cls.deleteButtons}>
                    {/*<Link to={`/platform/rooms`}>*/}
                    <Button extraClass={cls.deleteButton} children={"Delete"} onClick={handleDelete}/>
                    {/*</Link>*/}

                    <Button extraClass={cls.cancelButton} children={"Cancel"} onClick={onClose}/>
                </div>
            </div>
        </Modal>
    );
};