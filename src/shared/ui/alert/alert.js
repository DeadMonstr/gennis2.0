import React, { useState } from 'react';
import cls from './alert.module.sass';

export const Alert = () => {
    const [alertVisible, setAlertVisible] = useState(false);

    const showAlert = () => {
        setAlertVisible(true);
        setTimeout(() => {
            setAlertVisible(false);
        }, 5000);
    };
    const hideAlert = () => {
        setAlertVisible(false)
    }

    return (
        <>
            <div className={cls.alertBox}>
                <button onClick={showAlert}>Show Alert</button>
                <div className={`${cls.alerts} ${alertVisible ? `${cls.showcha}` : `${cls.hiddencha}`}`}>
                    <div className={`${cls.alert} ${alertVisible ? `${cls.show}` : `${cls.hide}`}`}>
                        <p>This is an alert message!</p>
                        <i className="fa-solid fa-xmark" onClick={hideAlert}></i>
                    </div>
                </div>

            </div>
        </>


    );
};

