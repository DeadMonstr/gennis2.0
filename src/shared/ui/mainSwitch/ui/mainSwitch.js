import React, {useState} from 'react';
import switchIcon from 'shared/assets/images/main_switch.svg'
import cls from "./mainSwitch.module.sass"

export const MainSwitch = () => {
    const [active, setActvie] = useState(false)
    return (
        <div className={cls.switchHandler}>
            <button
                className={`${cls.mainSwitch} ${active ? `${cls.activeBg}` : `${cls.passiveBg}`} `}
                onClick={() => setActvie(!active)}
            >
                {active ?
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
                    active ?
                        <h2 className={cls.mainSwitch__text}>Center</h2>
                        :
                        <h2 className={cls.mainSwitch__text__center}>School</h2>
                }

            </button>
        </div>

    );
};
