import React, { useState } from 'react';
import cls from './alert.module.sass';

const alertTypes = {
    error: 'error',
    success: 'success',
    warning: 'warning'
};

export const Alert = () => {
    const [alerts, setAlerts] = useState([]);

    const showAlert = (type, message) => {
        const newAlert = { id: Date.now(), type, message };
        setAlerts([...alerts, newAlert]);
        setTimeout(() => {
            hideAlert(newAlert.id);
        }, 5000);
    };

    const hideAlert = (id) => {
        setAlerts(alerts => alerts.map(alert =>
            alert.id === id ? { ...alert, hide: true } : alert
        ));
        setTimeout(() => {
            setAlerts(alerts => alerts.filter(alert => alert.id !== id));
        }, 500);
    };

    return (
        <>
            <div className={cls.alertBox}>
                <button onClick={() => showAlert(alertTypes.error, 'This is an error message!')}>Show Error Alert</button>
                <button onClick={() => showAlert(alertTypes.success, 'This is a success message!')}>Show Success Alert</button>
                <button onClick={() => showAlert(alertTypes.warning, 'This is a warning message!')}>Show Warning Alert</button>
                <div className={cls.alerts}>
                    {alerts.map((alert) => (
                        <div key={alert.id} className={`${cls.alert} ${cls[alert.type]} ${alert.hide ? cls.hide : cls.show}`}>
                            <p>{alert.message}</p>
                            <i className="fa-solid fa-xmark" onClick={() => hideAlert(alert.id)}></i>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
