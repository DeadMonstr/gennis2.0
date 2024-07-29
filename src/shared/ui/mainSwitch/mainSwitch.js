import React from 'react';
import switchIcon from 'shared/assets/images/main_switch.svg'
import cls from "./mainSwitch.module.sass"

export const MainSwitch = ({ isActive, onSwitch }) => {
    return (
        <div className={cls.switchHandler}>
            <button
                className={`${cls.mainSwitch} ${isActive ? `${cls.activeBg}` : `${cls.passiveBg}`} `}
                onClick={() => onSwitch(!isActive)}
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
    );
};
