import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'shared/ui/modal';
import { Button } from 'shared/ui/button';
import cls from './warning.module.sass';
import alertIcon from 'shared/assets/icons/alert.svg'
import {studentPaymentListDeleteGetThunk} from "features/studentPayment";
import {Alert} from "../alert";



export const WarningModal = ({ isOpen, onClose, contentId, contentThunk, studentId, secondaryThunk }) => {
    const dispatch = useDispatch();
    const [alerts, setAlerts] = useState([]);
    const showAlert = (type, message) => {
        const newAlert = { id: Date.now(), type, message };
        setAlerts([...alerts, newAlert]);
        setTimeout(() => {
            hideAlert(newAlert.id);
        }, 1000);
    };

    const hideAlert = (id) => {
        setAlerts(alerts => alerts.map(alert =>
            alert.id === id ? { ...alert, hide: true } : alert
        ));
        setTimeout(() => {
            setAlerts(alerts => alerts.filter(alert => alert.id !== id));
        }, 500);
    };
    const handleDelete = () => {
        dispatch(contentThunk(contentId)).then((action) => {
            if (action.type.endsWith('fulfilled')){
                showAlert('success', "Muvofaqqiyatli o'chirildi")
                dispatch(secondaryThunk(studentId))
            }else {
                console.log("O'chirishda xatolik", action.error)
                showAlert('error', "Internet yoki serverda xatolik")
            }


            // onClose();
        });
    };

    if (!isOpen) return null;
    return (
        <>
            <Modal active={isOpen} setActive={onClose}>
                <div className={cls.filter}>
                    <div className={cls.deleteHead}>
                        <img src={alertIcon} alt=""/>
                        <h1>Warning</h1>
                    </div>
                    <div className={cls.deleteText}>
                        <h2>Rostan ham o'chirmoqchimisiz</h2>
                    </div>
                    <div className={cls.deleteButtons}>
                        <Button extraClass={cls.deleteButton} children={"Ha"} onClick={handleDelete}/>

                        <Button extraClass={cls.cancelButton} children={"Yo'q"} onClick={onClose}/>
                    </div>
                </div>
            </Modal>
            <Alert alerts={alerts} hideAlert={hideAlert}/>
        </>

    );
};
