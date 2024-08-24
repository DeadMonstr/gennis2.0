import React, { useState } from 'react';
import cls from './alert.module.sass';

const alertTypes = {
    error: 'error',
    success: 'success',
    warning: 'warning'
};

export const Alert = ({ alerts, hideAlert }) => {
    return (
        <div className={cls.alerts}>
            {alerts.map((alert) => (
                <div key={alert.id}
                     className={`${cls.alert} ${cls[alert.type]} ${alert.hide ? cls.hide : cls.show}`}>
                    <p>{alert.message}</p>
                    <i className="fa-solid fa-xmark" onClick={() => hideAlert(alert.id)}></i>
                </div>
            ))}
        </div>
    )
};
