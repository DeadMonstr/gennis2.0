import React, { useEffect, useState } from 'react';
import switchIcon from 'shared/assets/images/main_switch.svg';
import cls from './mainSwitch.module.sass';
import { useSelector, useDispatch } from 'react-redux';
import { getVacancySource, vacancyWorkerGetThunk, fetchLocationsForSystemsThunk } from 'entities/vacancy/ui/vacancyWorkerList';


export const MainSwitch = ({ isActive, onSwitch }) => {
    const getSystems = useSelector(getVacancySource);
    const dispatch = useDispatch();
    const [selectedSystemId, setSelectedSystemId] = useState(1);

    const educationCenter = getSystems?.systems?.[0]?.name || "Education Center";
    const school = getSystems?.systems?.[1]?.name || "School";

    useEffect(() => {
        dispatch(vacancyWorkerGetThunk());
    }, [dispatch]);

    useEffect(() => {
        if (selectedSystemId !== null) {
            dispatch(fetchLocationsForSystemsThunk(selectedSystemId));
        }
    }, [selectedSystemId, dispatch]);

    const handleSwitch = () => {
        const newIsActive = !isActive;
        onSwitch(newIsActive);
        const selectedSystem = newIsActive ? getSystems?.systems?.[0] : getSystems?.systems?.[1];
        setSelectedSystemId(selectedSystem?.id);
    };

    return (
        <div className={cls.switchHandler}>
            <div className={cls.switchHandler}>
                            <button
                                className={`${cls.mainSwitch} ${isActive ? `${cls.activeBg}` : `${cls.passiveBg}`} `}
                                onClick={() => {
                                    handleSwitch()
                                    onSwitch(!isActive)}}
                            >
                                {isActive ?
                                    <div>
                                        <span className={cls.mainSwitch__iconHandler}>
                                            <img className={cls.mainSwitch__icon} src={switchIcon} alt=""/>
                                        </span>
                                    </div>
                                    :
                                    <div>
                                        <span className={cls.mainSwitch__iconHandler__center}>
                                            <img className={cls.mainSwitch__icon} src={switchIcon} alt=""/>
                                        </span>
                                    </div>
                                }
                                {
                                    isActive ?
                                        <h2 className={cls.mainSwitch__text}>Center</h2>
                                        :
                                        <h2 className={cls.mainSwitch__text__center}>School</h2>
                                }

                            </button>
                        </div>
        </div>
    );
};
