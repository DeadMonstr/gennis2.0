import React, {useEffect, useState} from 'react';
import cls from './alert.module.sass';

const alertTypes = {
    error: 'error',
    success: 'success',
    warning: 'warning'
};

export const Alert = ({data}) => {

    const [alerts,setAlerts] = useState()




    const hideAlert = (id) => {
        setAlerts(alerts => alerts.map(alert =>
            alert.id === id ? {...alert, hide: true} : alert
        ));
        setTimeout(() => {
            setAlerts(alerts => alerts.filter(alert => alert.id !== id));
        }, 500);
    };

    return (
        <div className={cls.alerts}>
            {alerts?.map((alert) => (
                <div key={alert.id} className={`${cls.alert} ${cls[alert.type]} ${alert.hide ? cls.hide : cls.show}`}>
                    <p>{alert.message}</p>
                    <i className="fa-solid fa-xmark" onClick={() => hideAlert(alert.id)}></i>
                </div>
            ))}
        </div>
    )

};
